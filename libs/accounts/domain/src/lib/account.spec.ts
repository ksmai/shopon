import * as E from 'fp-ts/lib/Either';

import { Account, CreateAccountParams } from './account';
import { hashPassword } from '@shopon/shared/domain';

describe('Account', () => {
  describe('create', () => {
    let data: CreateAccountParams;

    beforeEach(async () => {
      const password = 'Str0ngP@ssW0rd!';
      const hashedPassword = E.getOrElseW(fail)(
        await hashPassword(10)(password)()
      );
      data = {
        name: 'Account Name',
        email: 'test@example.com',
        password,
        hashedPassword,
      };
    });

    it('can be created with name', () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      expect(account.getName().getName()).toBe(data.name);
    });

    it('can be created with email', () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      expect(account.getEmail().getDisplayed()).toBe(data.email);
    });

    it('can be created with password', async () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      const result = E.getOrElseW(fail)(
        await account.getPassword().comparePassword(data.password)()
      );
      expect(result).toBe(true);
    });

    it('cannot be created with empty name', () => {
      data.name = '';
      const account = Account.create(data);
      expect(E.isLeft(account)).toBe(true);
    });

    it('cannot be created with very very long name', () => {
      data.name = 'LongName'.repeat(10000);
      const account = Account.create(data);
      expect(E.isLeft(account)).toBe(true);
    });

    it('cannot be created with invalid email', () => {
      data.email = 'invalidEmail';
      const account = Account.create(data);
      expect(E.isLeft(account)).toBe(true);
    });

    it('cannot be created with weak password', () => {
      data.password = '1';
      const account = Account.create(data);
      expect(E.isLeft(account)).toBe(true);
    });
  });
});

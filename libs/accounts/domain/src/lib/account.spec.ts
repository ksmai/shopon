import * as E from 'fp-ts/lib/Either';

import { Account, CreateAccountData } from './account';

describe('Account', () => {
  describe('create', () => {
    let data: CreateAccountData;

    beforeEach(() => {
      data = {
        name: 'Account Name',
        email: 'test@example.com',
        password: 'secret-password',
      };
    });

    it('can be created with name', () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      expect(account.getName()).toBe(data.name);
    });

    it('can be created with email', () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      expect(account.getEmail()).toBe(data.email);
    });

    it('can be created with password', () => {
      const account = E.getOrElseW(fail)(Account.create(data));
      expect(account.getPassword()).toBe(data.password);
    });
  });
});

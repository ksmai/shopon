import * as E from 'fp-ts/lib/Either';

import { hashPassword } from './hash-password';
import { Password, CreatePasswordParams } from './password.vo';

describe('Password', () => {
  let params: CreatePasswordParams;

  beforeEach(async () => {
    const password = 'P@ssw0rd!!';
    const hashedPassword = E.getOrElseW(fail)(
      await hashPassword(10)(password)()
    );
    params = { password, hashedPassword };
  });

  it('does not store plain password', () => {
    const password = E.getOrElseW(fail)(Password.create(params));
    expect(password.getHashedPassword()).toBeTruthy();
    expect(password.getHashedPassword()).not.toBe(params.password);
  });

  it('does not allow weak passwords', async () => {
    const params = { password: '123', hashedPassword: 'fake hash' };
    const password = Password.create(params);
    expect(E.isLeft(password)).toBe(true);
  });

  it('same password are equal', () => {
    const password = E.getOrElseW(fail)(Password.create(params));
    const password2 = E.getOrElseW(fail)(Password.create(params));
    expect(password.equals(password2)).toBe(true);
  });

  it('different password are not equal', () => {
    const params2 = {
      password: 'An0th3rP@ssw0rd',
      hashedPassword: 'fake hash',
    };
    const password = E.getOrElseW(fail)(Password.create(params));
    const password2 = E.getOrElseW(fail)(Password.create(params2));
    expect(password.equals(password2)).toBe(false);
  });

  it('can compare correct password', async () => {
    const password = E.getOrElseW(fail)(Password.create(params));
    const isCorrect = E.getOrElseW(fail)(
      await password.comparePassword(params.password)()
    );
    expect(isCorrect).toBe(true);
  });

  it('can compare incorrect password', async () => {
    const password = E.getOrElseW(fail)(Password.create(params));
    const isCorrect = E.getOrElseW(fail)(
      await password.comparePassword(params.password + '1')()
    );
    expect(isCorrect).toBe(false);
  });
});

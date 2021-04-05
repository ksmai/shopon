import * as E from 'fp-ts/lib/Either';

import { Email } from './email.vo';

describe('Email', () => {
  it('can be created with a valid email address', () => {
    const params = { email: 'user@domain.com' };
    const email = E.getOrElseW(fail)(Email.create(params));
    expect(email.getDisplayed()).toBe(params.email);
  });

  it('can be normalized', () => {
    const params = { email: ' U.sEr+123@gmail.COM ' };
    const email = E.getOrElseW(fail)(Email.create(params));
    expect(email.getNormalized()).toBe('user@gmail.com');
  });

  it('can display trimmed input email before normalization', () => {
    const params = { email: ' U.ser+123@Gmail.Com ' };
    const email = E.getOrElseW(fail)(Email.create(params));
    expect(email.getDisplayed()).toBe(params.email.trim());
  });

  it('2 emails with the same normalization are equal', () => {
    const params = { email: ' user@Gmail.com' };
    const params2 = { email: 'U.ser+123@GMAIL.CoM' };
    const email = E.getOrElseW(fail)(Email.create(params));
    const email2 = E.getOrElseW(fail)(Email.create(params2));
    expect(email.equals(email2)).toBe(true);
  });

  it('2 different emails do not equal', () => {
    const params = { email: 'user@domain.com' };
    const params2 = { email: 'john@example.net' };
    const email = E.getOrElseW(fail)(Email.create(params));
    const email2 = E.getOrElseW(fail)(Email.create(params2));
    expect(email.equals(email2)).toBe(false);
  });

  it('throws when email is invalid', () => {
    const params = { email: 'invalid.email' };
    const email = Email.create(params);
    expect(E.isLeft(email)).toBe(true);
  });
});

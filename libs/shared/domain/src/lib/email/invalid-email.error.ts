import { BaseError } from '@shopon/shared/error';

export class InvalidEmailError extends BaseError {
  public error: 'ERR_INVALID_EMAIL';

  private constructor(email: string) {
    super(`Invalid email address: ${email}`);
    this.error = 'ERR_INVALID_EMAIL';
  }

  public static of(email: string): InvalidEmailError {
    return new InvalidEmailError(email);
  }
}

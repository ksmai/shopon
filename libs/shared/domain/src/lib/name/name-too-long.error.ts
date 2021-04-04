import { BaseError } from '@shopon/shared/error';

export class NameTooLongError extends BaseError {
  public error: 'ERR_NAME_TOO_LONG';

  private constructor(name: string) {
    super(`Name is too long: ${name}`);
    this.error = 'ERR_NAME_TOO_LONG';
  }

  public static of(name: string): NameTooLongError {
    return new NameTooLongError(name);
  }
}

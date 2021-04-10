import { BaseError } from '@shopon/shared/error';

export class SaveAccountError extends BaseError {
  public error: 'ERR_SAVE_ACCOUNT';

  private constructor(message: string) {
    super(`Error when saving account: ${message}`);
    this.error = 'ERR_SAVE_ACCOUNT';
  }

  public static of(message: string): SaveAccountError {
    return new SaveAccountError(message);
  }
}

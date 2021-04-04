import { BaseError } from '@shopon/shared/error';

export class EmptyNameError extends BaseError {
  public error: 'ERR_EMPTY_NAME';

  private constructor() {
    super('Name cannot be empty');
    this.error = 'ERR_EMPTY_NAME';
  }

  public static of(): EmptyNameError {
    return new EmptyNameError();
  }
}

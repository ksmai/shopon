import { BaseError } from '@shopon/shared/error';

export class HashPasswordError extends BaseError {
  public error: 'ERR_HASH_PASSWORD';

  private constructor() {
    super('Error in hashing password');
    this.error = 'ERR_HASH_PASSWORD';
  }

  public static of(): HashPasswordError {
    return new HashPasswordError();
  }
}

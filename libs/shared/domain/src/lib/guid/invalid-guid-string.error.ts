import { AppError } from '@shopon/shared/error';

export class InvalidGuidStringError extends AppError {
  error: 'ERR_INVALID_GUID_STRING';

  private constructor(guid: string) {
    super(`Invalid GUID: ${guid}`);
    this.error = 'ERR_INVALID_GUID_STRING';
  }

  public static of(guid: string): InvalidGuidStringError {
    return new InvalidGuidStringError(guid);
  }
}

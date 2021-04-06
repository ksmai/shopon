import { BaseError } from '@shopon/shared/error';

export class WeakPasswordError extends BaseError {
  public error: 'ERR_WEAK_PASSWORD';
  public failedTests: number[];
  public errors: string[];

  private constructor(failedTests: number[], errors: string[]) {
    super(
      'Password must contain at least 10 characters, including uppercase, lowercase, symbol and number'
    );
    this.error = 'ERR_WEAK_PASSWORD';
    this.failedTests = failedTests;
    this.errors = errors;
  }

  public static of(failedTests: number[], errors: string[]): WeakPasswordError {
    return new WeakPasswordError(failedTests, errors);
  }
}

import { AppError } from './app-error';

describe('AppError', () => {
  const error = 'ERR_TEST_ERROR';
  const message = 'Message for TestError';

  class TestError extends AppError {
    error: typeof error;

    private constructor() {
      super(message);
      this.error = error;
    }

    static of(): TestError {
      return new TestError();
    }
  }

  let testError: TestError;

  beforeEach(() => {
    testError = TestError.of();
  });

  it('can define a custom error in subclass', () => {
    expect(testError.error).toBe(error);
  });

  it('can define a custom message in subclass', () => {
    expect(testError.message).toBe(message);
  });

  it('can be serialized to JSON', () => {
    expect(JSON.parse(JSON.stringify(testError))).toEqual({
      error,
      message,
    });
  });
});

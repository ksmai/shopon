export abstract class AppError extends Error {
  abstract error: string;

  protected constructor(message = '') {
    super(message);
  }

  toJSON() {
    return {
      error: this.error,
      message: this.message,
    };
  }
}

export class AppError {
  error: string;
  message: string;

  constructor(error = 'ERR_UNKNOWN', message = '') {
    this.error = error;
    this.message = message;
  }
}

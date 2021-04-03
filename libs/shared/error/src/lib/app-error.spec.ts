import { AppError } from './app-error';

describe('AppError', () => {
  it('default to ERR_UNKNOWN', () => {
    const error = new AppError();
    expect(error.error).toBe('ERR_UNKNOWN');
  });

  it('can define a custom error', () => {
    const aCustomError = 'ERR_A_CUSTOM_ERROR';
    const error = new AppError(aCustomError);
    expect(error.error).toBe(aCustomError);
  });

  it('default to an empty message', () => {
    const error = new AppError();
    expect(error.message).toBe('');
  });

  it('can define a custom message', () => {
    const aCustomMessage = 'aCustomMessage';
    const error = new AppError('ERROR', aCustomMessage);
    expect(error.message).toBe(aCustomMessage);
  });

  it('can be serialized to JSON', () => {
    const data = {
      error: 'ERR_AN_ERROR',
      message: 'a message',
    };
    const error = new AppError(data.error, data.message);
    expect(JSON.parse(JSON.stringify(error))).toEqual(data);
  });
});

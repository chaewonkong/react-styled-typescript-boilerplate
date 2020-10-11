import { AxiosError } from 'axios';

export class NetworkError extends Error {
  public statusCode: number;

  constructor(statusCode: number, message?: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
  }
}

export const handleError = (error: AxiosError) => {
  if (error.response) {
    throw new NetworkError(error.response.status, error.message);
  }

  throw new Error('unexpected Error');
};

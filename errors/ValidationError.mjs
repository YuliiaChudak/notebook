export default class ValidationError extends Error {
  constructor(error) {
    super();
    const {
      details: [{ message }],
    } = error;

    this.status = 400;
    this.name = 'ValidationError';
    this.message = message;
  }
}

export default class NotPermittedParamsChangeError extends Error {
  constructor(field, ...args) {
    super(args);

    this.name = 'NotPermittedParamsChangeError';
    this.message = `It is not allowed to change ${field}`;
  }
}

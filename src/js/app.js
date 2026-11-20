export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    const regexp = /^(?![\d_-])(?!.*\d{4})[a-z\d_-]*[a-z]$/i;
    return regexp.test(this.username);
  }
}

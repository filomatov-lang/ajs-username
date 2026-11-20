import Validator from '../app.js';

describe('Validator', () => {
  describe('validateUsername: валидные имена', () => {
    test.each(['Daemon', 'user-name', 'Ali_Baba', 'A123A', 'Anton_123-JS'])(
      '"%s" - валидно',
      (username) => {
        expect(new Validator(username).validateUsername()).toBe(true);
      },
    );
  });

  describe('validateUsername: невалидные имена', () => {
    test.each([
      '1Daemon',
      '-user-name',
      '_Ali_Baba',
      'A123A1',
      'Anton_123-JS_',
      'Serg&ei',
      'Dimon-6666W',
      'Timon PumBa',
      'Лучник',
      '',
    ])('"%s" - невалидно', (username) => {
      expect(new Validator(username).validateUsername()).toBe(false);
    });
  });
});

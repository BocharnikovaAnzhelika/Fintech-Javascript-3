/* eslint-disable linebreak-style,no-trailing-spaces */
/**
 * Создайте класс, обладающий следующим поведением:
 * const values = ['hello', 'javascript', 'world'];
 * const instances = values.map(str => new NumberAndString(str));
 *
 * const resultConcatenation = instances.join(' '); // == 'hello javascript world'
 * const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20
 * @class NumberAndString
 * @param {String} str - initial value
 */
// eslint-disable-next-line linebreak-style
class NumberAndString {
  constructor(str) {
    this.str = str;
    this.len = str.length;
  }
  valueOf() {
    return this.len;
  }
  toString() {
    return this.str;
  }
}

module.exports = NumberAndString;

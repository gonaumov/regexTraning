/**
 * ^ (caret) - Matches at the start of the string the regex pattern is applied to.
 * $ (dollar)	Matches at the end of the string the regex pattern is applied to.
 */

console.log(/^[1-9]+$/.test('123456'));
console.log(/[1-9]+/.test('1234x56'));
``

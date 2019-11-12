/***
 * \d - Adds all digits to the character class. Matches a single digit if used outside character classes.
 * \w - Adds all word characters to the character class. Matches a single word character if used outside
 * character classes.
 * \s - Adds all whitespace to the character class. Matches a single whitespace character if used outside character classes.
 */
console.log(/^[\d]+$/.test('12345678'));
console.log(/^[\d]+$/.test('123456ssss78'));
console.log(/^[\w]+$/.test('abcdefgh'));
console.log(/^[\w]+$/.test('abcdefghssss1'));
console.log(/^[\s]+$/.test(' '));
console.log(/^[\s]+$/.test('a '));


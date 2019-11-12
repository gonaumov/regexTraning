const isFirstNameValidWithUnicodeSupport = (firstName, culture = 'LATIN') => {
  const cultures = {
    HEBREW: /^[\u0590-\u05FF]{2,}$/,
    CYRILLIC: /^[\u0410-\u042F\u0430-\u044F][\u0430-\u044F]+$/,
    LATIN: /^[A-Za-z][a-z]+$/,
  };
  return  cultures[culture].test(firstName);
}

// This returns true because is valid name in latin
// alphabet.
console.log(isFirstNameValidWithUnicodeSupport('Ivan'));
// This returns true because is valid name in cyrillic
// alphabet.
console.log(isFirstNameValidWithUnicodeSupport('Иван', 'CYRILLIC'));
// This returns false because is valid name in cyrillic
// alphabet but there is a space in the end.
console.log(isFirstNameValidWithUnicodeSupport('Иван ',  'CYRILLIC'));
// This returns true because is valid name in hebrew
// alphabet.
console.log(isFirstNameValidWithUnicodeSupport('אגרת',  'HEBREW'));
// This returns false because is valid name in hebrew
// but is whole name containing spaces. Not only first name.
console.log(isFirstNameValidWithUnicodeSupport('אגרת בת מחלת',  'HEBREW'));

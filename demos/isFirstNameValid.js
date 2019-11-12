const isFirstNameValid = (firstName) =>
	/^[a-zA-z][a-z]+$/.test(firstName)
console.log(isFirstNameValid('Ivan'));
console.log(isFirstNameValid('Ivan '));
console.log(isFirstNameValid('Todor Zhivkov'));
console.log(isFirstNameValid('Тодор Живков'));

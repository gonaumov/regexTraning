const getRequestParam = (urlString, paramName) => {
	const [,result] = (new RegExp(`${paramName}=([^&]+)`)).exec(urlString) || [,false]
	return result;
}

console.log(getRequestParam('http://www.somedomain.com/index.php?paramName=value', 'paramName'));
console.log(getRequestParam('http://www.somedomain.com/index.php?paramName=value', 'nonExistingParam'));

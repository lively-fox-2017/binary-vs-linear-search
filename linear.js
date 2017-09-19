'use strict'

const linearSearch = (target, values) => {
	for (let i = 0; i< values.length; i++) {
		if (values[i] === target) return i;
	}
	return -1;
}

const globalLinearSearch = (target, values) => {
	let result = [];
	for (let i = 0; i < values.length; i++) {
		if (values[i] === target) result.push(i);
	}
	return result.length > 0 ? result : -1;
}

module.exports = {
  linearSearch,
  globalLinearSearch
}
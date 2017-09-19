const Benchmark = require('benchmark');
const { linearSearch, globalLinearSearch } = require('./linear.js');
const { binarySearch } = require('./binary.js');

const getSortedArray = num => {
	let result = [];
	for (let i = 0; i < num; i++) {
		let randomNum = Math.round(Math.random() * (num - 1) + 1); // random number from 1 to num
		result.push(randomNum);
	}
	return result.sort();
}

const getRandomTarget = max => Math.round(Math.random() * (max - 1) + 1); // random number from 1 to max

const test = (input, searchValue, array) => {
	const suite = new Benchmark.Suite;
	suite
		.add('Linear Search (input: ' + input + ')', () => linearSearch(searchValue, array))
		.add('Binary Search (input: ' + input + ')', () => binarySearch(searchValue, array))
		.on('cycle', event => console.log(String(event.target)))
		.on('complete', () => console.log('Fastest is ' + suite.filter('fastest').map('name')))
		.run({ 'async': false });
}

(function runTest() {
	let input = [1000, 10000, 1000000];
	let testArrays = input.map(val => getSortedArray(val));
	let targets = input.map(val => getRandomTarget(val));
	
	for (let i = 0; i < input.length; i++) {
		test(input[i], targets[i], testArrays[i]);
	}
})();
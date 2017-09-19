let Benchmark = require('benchmark');

let suite1k = new Benchmark.Suite;
let suite10k = new Benchmark.Suite;
let suite1m = new Benchmark.Suite;

/**
 *
 * Linear Search function
 *
 */
let linearSearch = (target, values) => {
  for (let i = 0; i < values.length; i++) {

    // If found
    if (values[i] === target) {
      return i;
    }

  }

  // If not found
  return -1;
}

let binarySearch = (search, array) => {

  let start = 0;
  let stop = array.length - 1;

  let mid;

  while (start <= stop) {

    mid = Math.floor((start + stop) / 2);

    // If found
    if (array[mid] === search) {
      return mid;

    } else if (array[mid] < search ) {

      start = mid + 1;

    } else {

      stop = mid - 1;

    }

  }

  // If not found
  return -1;

}

let random_1k_numbers = [];
let random_10k_numbers = [];
let random_1m_numbers = [];


for (let i = 0; i < 1000; i++) {

  random_1k_numbers.push(i);

}

for (let i = 0; i < 10000; i++) {

  random_10k_numbers.push(i);

}

for (let i = 0; i < 1000000; i++) {

  random_1m_numbers.push(i);

}

let target1k = Math.floor(Math.random() * 1000);
let target10k = Math.floor(Math.random() * 10000);
let target1m = Math.floor(Math.random() * 1000000);

// add tests
suite1k.add('LinearSearch#test1k', function() {
  linearSearch(target1k, random_1k_numbers);
})
.add('BinarySearch#test1k', function() {
  binarySearch(target1k, random_1k_numbers);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': false });;


suite10k.add('LinearSearch#test10k', function() {
  linearSearch(target10k, random_10k_numbers);
})
.add('BinarySearch#test10k', function() {
  binarySearch(target10k, random_10k_numbers);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': false });;


suite1m.add('LinearSearch#test1m', function() {
  linearSearch(target1m, random_1m_numbers);
})
.add('BinarySearch#test1m', function() {
  binarySearch(target1m, random_1m_numbers);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': false });;

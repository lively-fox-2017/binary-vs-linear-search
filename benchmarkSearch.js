var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var suite1 = new Benchmark.Suite;
var suite2 = new Benchmark.Suite;

let random_numbers1K = [];

for(let i=0;i<1000;i++){
	random_numbers1K[i]=i+1
}

let random_numbers10K = [];

for(let i=0;i<10000;i++){
	random_numbers10K[i]=i+1
}

let random_numbers1KK = [];

for(let i=0;i<1000000;i++){
	random_numbers1KK[i]=i+1
}

let linearSearch = (target, values) => {
  //write your code here
  let counts=0;
  for(let i=0;i<values.length;i++){
  	if(target===values[i]){
  		return i;
  	}
  }

	return false;
}

function binary_search (search, array) {
  // Your searching code

  	var minIndex = 0;
    var maxIndex = array.length - 1;
    var curIndex;
    var curElement;
 
    while (minIndex <= maxIndex) {
        curIndex = (minIndex + maxIndex) / 2 | 0;
        curElement = array[curIndex];
 
        if(curElement<search) {
            minIndex = curIndex + 1;
        }else 
        	if (curElement>search) {
            	maxIndex = curIndex - 1;
        	}else{
            	return curIndex;
        	}
    }
 
    return -1;
}

// add tests
suite.add('linierSearch1', function() {
  linierSearch(500, random_numbers1K)
})
.add('binarySearch1', function() {
  binary_search(500, random_numbers1K);
})
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });


// add tests
suite1.add('linierSearch2', function() {
  linierSearch(5000, random_numbers10K)
})
.add('binarySearch2', function() {
  binary_search(5000, random_numbers10K);
})
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });


// add tests
suite2.add('linierSearch1', function() {
  linierSearch(500000, random_numbers1KK)
})
.add('binarySearch1', function() {
  binary_search(500000, random_numbers1KK);
})
// .add('String#match', function() {
//   !!'Hello World!'.match(/o/);
// })
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': false });
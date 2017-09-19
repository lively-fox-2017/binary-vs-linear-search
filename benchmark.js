var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
// add tests
var search = 999;
var arraySeribu = Array.apply(null, {length: 1001}).map(Number.call, Number);
var arraySepuluhribu = Array.apply(null, {length: 10001}).map(Number.call, Number);
var arraySejuta = [];
for (var i=1;i<=1000000;i++) {
  arraySejuta.push(i);
}
// binary search
function binarySearch (search, array) {
  // Your searching code
  var guess;
  var min = 0;
  var max = array.length - 1;

  while(min <= max){
    guess = Math.floor((min + max) /2);
     if(array[guess] === search)
      return guess;
      else if(array[guess] < search)
        min = guess + 1;
      else
        max = guess - 1;
   }
   return -1;
}

// linear search
function linearSearch(search, array){
  //write your code here
	 for (var i=0; i<array.length; i++) {
	    if (array[i] === search) {
	      return i;
	  	}
	} return -1;
}

suite.add('binarySearchSeribu#test', function(){
	binarySearch(search, arraySeribu);
})
.add('linear_searchSeribu#test', function(){
	linearSearch(search, arraySeribu);
})
// sepuluh ribu
.add('binarySearchSepuluhribu#test', function(){
	binarySearch(search, arraySepuluhribu);
})
.add('linear_searchSepuluhribu#test', function(){
	linearSearch(search, arraySepuluhribu);
})
// sejuta
.add('binarySearchSejuta#test', function(){
	binarySearch(search, arraySejuta);
})
.add('linear_searchSejuta#test', function(){
	linearSearch(search, arraySejuta);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

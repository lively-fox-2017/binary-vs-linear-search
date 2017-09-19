var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
// add tests
var search = 10;
var arraySeribu = Array.apply(null, {length: 1000}).map(Number.call, Number);
var arraySepuluhribu = Array.apply(null, {length: 10000}).map(Number.call, Number);
var arraySejuta = [];
for (var i=1;i<=1000000;i++) {
  arraySejuta.push(i);
}
// binary search
// function binary_search(search, array) {
//     var guess;
//     min = 0;
//     max = array.length - 1;	
  
//     while(min <= max){
//       guess = Math.floor((min + max) /2);
//     if(array[guess] === search)
//     return guess;
//     else if(array[guess] < search)
//     min = guess + 1;
//     else
//     max = guess - 1;	
//     }
//     return -1;
// }

function binary_search (search, array) {
  // Your searching code
  var min = 0;
  var max = array.length-1;
  var mid = Math.floor((max+min)/2);

  	if (array[mid] === search){
  		return mid;
    
    } else if (array[mid] < search) {
      // min = mid-1;
      // console.log(array.slice(mid, max))
      return binary_search(search, array.slice(mid, max))

    } else if (array[mid] > search) {
      // max = mid+1;
      // console.log(array.slice(min, mid))
      return binary_search(search, array.slice(min, mid))
    
    } else if (array[mid] !== search){

      return -1;
    }

}

// linear search
let linearSearch = (search, array) => {
  //write your code here
	 for (var i=0; i<array.length; i++) {
	    if (array[i] === search) {
	      return i;
	  	}
	} return -1;
}

suite
.add('binary_searchSeribu#test', function(){
	binary_search(search, arraySeribu);
})
.add('linear_searchSeribu#test', function(){
	linearSearch(search, arraySeribu);
})
// sepuluh ribu
.add('binary_searchSepuluhribu#test', function(){
	binary_search(search, arraySepuluhribu);
})
.add('linear_searchSepuluhribu#test', function(){
	linearSearch(search, arraySepuluhribu);
})
// sejuta
.add('binary_searchSejuta#test', function(){
	binary_search(search, arraySejuta);
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
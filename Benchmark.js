'use strict'

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests


function binary_search (search, array) {
  // Your searching code
  var iStart = 0 ;
  var iEnd = array.length -1 ;
  var iMid = Math.ceil((iStart + iEnd)/2);

  while (iStart<=iEnd){
    if (array[iMid]==search){
      return iMid;
    }
    else{
      if (array[iMid] < search){
        iStart = iMid + 1 ;
        iMid = Math.ceil((iStart + iEnd)/2) ;
      }
      else{
        iEnd = iMid - 1 ;
        iMid = Math.ceil((iStart + iEnd)/2) ;
      }
    }
  }
  return -1;
}

let linearSearch = (target, values) => {
  //write your code here
  for (var i=0 ; i< values.length ; i++){
    if (values[i]==target){
      return i;
    }
  }
  return -1 ;
}


var number_1k =[];
var number_10k =[];
var number_1m =[];

for (var i=1;i<=1000;i++){
  number_1k.push(i);
}
for (var i=1;i<=10000;i++){
  number_10k.push(i);
}
for (var i=1;i<=1000000;i++){
  number_1m.push(i);
}

// var random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

suite
.add('search#binary1k', function() {
  (binary_search(999,number_1k));
})
.add('search#linear1k', function() {
  (linearSearch(999,number_1k));;
})

.add('search#binary10k', function() {
  (binary_search(9999,number_10k));
})
.add('search#linear10k', function() {
  (linearSearch(9999,number_10k));;
})
.add('search#binary1m', function() {
  (binary_search(99999,number_1m));
})
.add('search#linear1m', function() {
  (linearSearch(99999,number_1m));;
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

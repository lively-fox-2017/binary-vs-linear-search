'use strict'

var Benchmark = require('benchmark');
var testSeribu = new Benchmark.Suite;
var testSepuluhRibu = new Benchmark.Suite;
var testSejuta = new Benchmark.Suite;

let linearSearch = (target, values) => {
    for(var i=0; i< values.length; i++){
      if(target === values[i]){
        return i;
      }
    }
    return -1;
  }
  
let binarySearch = (search, array)=> {
    var startIndex = 0;
    var highIndex = array.length-1;
    var midIndex = Math.floor((startIndex+highIndex)/2);
  while(startIndex <= highIndex){
    if(search === array[midIndex]){
      return midIndex;
    }else{
    if(search > array[midIndex]){
      startIndex = midIndex+1;
      midIndex  = Math.floor((highIndex+startIndex)/2)
    }else{
      highIndex = midIndex-1;
      midIndex = Math.floor((startIndex+highIndex)/2);
     }
    }
  }
  return -1;
  }

let seribu = [];
for(var i=1; i< 1000; i++){
    seribu.push(i);
}


let sepuluhribu = [];
for(var j=1; j< 10000; j++){
    sepuluhribu.push(j);
}

let sejuta = [];
for(var k=1; k< 1000000; k++){
   sejuta.push(k);
}

let angkaRandom1 = Math.floor(Math.random() * 1000);
let angkaRandom2 = Math.floor(Math.random() * 10000);
let angkaRandom3 = Math.floor(Math.random() * 1000000);


testSeribu.add('LinearSearch', function() {
  linearSearch(angkaRandom1, seribu)
})
.add('BinarySearch', function() {
  binarySearch(angkaRandom1, seribu)
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


testSepuluhRibu.add('LinearSearch', function() {
    linearSearch(angkaRandom2, sepuluhribu)
  })
  .add('BinarySearch', function() {
    binarySearch(angkaRandom2, sepuluhribu)
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


  testSejuta.add('LinearSearch', function() {
    linearSearch(angkaRandom3, sejuta)
  })
  .add('BinarySearch', function() {
    binarySearch(angkaRandom3, sejuta)
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
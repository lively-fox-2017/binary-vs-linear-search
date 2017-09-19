var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

let array1000 = [];
let array10000 = [];
let array1000000 = [];
let search = 888;

for(var i=0;i<1000;i++){
  array1000.push(getRandomIntInclusive(1,1000));
}
for(var i=0;i<10000;i++){
  array10000.push(getRandomIntInclusive(1,10000));
}
for(var i=0;i<1000000;i++){
  array1000000.push(getRandomIntInclusive(1,10000));
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function linearSearch(target, values) {
  //write your code here
  for(let i =0;i<values.length;i++){
    if(values[i] === target)
      return i;
  }
  return -1;
}


function binarySearch(search, array){
  let startIndex = 0;
  let endIndex = array.length;
  let midIndex;
  while(true){
    midIndex = Math.ceil((startIndex+endIndex)/2);
    if(array[midIndex]== search){
      return midIndex;
    }
    if(midIndex === startIndex && midIndex === endIndex){
      return -1;
    }
    if(search>array[midIndex]){
      startIndex=midIndex+1;
    }
    if(search<array[midIndex]){
      endIndex = midIndex-1;
    }
  }
}

// add tests

suite.add('linearSearch1000#test', function() {
  linearSearch(search, array1000);
})
.add('linearSearch10000#test', function(){
  linearSearch(search,array10000)
})
.add('linearSearch1000000#test', function(){
  linearSearch(search,array1000000)
})
.add('binarySearch1000#test', function(){
  binarySearch(search,array1000.sort())
})
.add('binarySearch10000#test', function(){
  binarySearch(search,array10000.sort())
})
.add('binarySearch1000000#test', function(){
  binarySearch(search,array1000000.sort())
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

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var suite1 = new Benchmark.Suite;
var suite2 = new Benchmark.Suite;

function binarySearch (search, array) {
  // Your searching code
  let front = 0
  let back = array.length-1
  while(front <= back){
    let mid = Math.ceil((front+back)/2)
    if(array[mid] < search){
      front = mid+1
    }else if(array[mid] > search){
      back = mid-1
    }else{
      return mid
    }
  }
  return -1;
}

function linearSearch(target, values) {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if(target === values[i]){
      return i;
    }
  }
  return -1;
}

// 1.000
var seribu = []
for (var i = 0; i <= 1000; i++) {
  seribu.push(i);
}

// 10.000
var sepuluhRb = []
for (var i = 0; i <= 10000; i++) {
  sepuluhRb.push(i);
}

// 1.000.000
var satuJt = []
for (var i = 0; i <= 1000; i++) {
  satuJt.push(i);
}


// add tests (1.000)
suite.add('BinarySearch#testSeribu', function() {
  binarySearch (125, seribu)
})
.add('LinearSearch#matchSeribu', function() {
  linearSearch (125, seribu)
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

// add tests (10.000)
suite1.add('BinarySearch#testSepuluhRb', function() {
  binarySearch (1250, sepuluhRb)
})
.add('LinearSearch#matchSepuluhRb', function() {
  linearSearch (1250, sepuluhRb)
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

// add tests (1.000.000)
suite2.add('BinarySearch#testSatuJt', function() {
  binarySearch (12500, satuJt)
})
.add('LinearSearch#matchSatuJt', function() {
  linearSearch (12500, serisatuJtbu)
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

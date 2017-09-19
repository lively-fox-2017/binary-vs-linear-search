var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function ownSort(arr) {
  // Your sorting code
  'use strict'
  let temp;
  for(var i=1; i<arr.length; i++){
    for(var j=0; j<i; j++){
      if(arr[i]<arr[j]){
        temp = arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
      }
    }
  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  'use strict'
  let awal= 0;
  let akhir = array.length;
  let mid ;
  while (akhir!=mid && awal!= mid){

    mid = Math.ceil((akhir+awal)/2);
    if(array[mid]== search){
      return mid;
    }else if(search>array[mid]){
      awal=mid+1;
    }else if(search<array[mid]){
      akhir = mid-1;
    }

    //console.log('awal ', awal);
    //console.log('mid ', mid);
    //console.log('akhir ', akhir);
  }
  return -1;
}

function linearSearch (target, values){
  //write your code here
  for (var i in values) {
    if (values[i] == target) {
      return i;
    }
  }
  return -1;
}

function generateRandNArr(n){
  var hasil = [];
  for(var i =0 ; i<n; i++){
    hasil.push(Math.round(Math.random()*n));
  }
  return hasil;
}


// add tests
function test(){
  var nArr= [1000,10000,1000000];
  var random_numbers;
  var testNum;
  var i =nArr[0];
//---------------------------------------
  random_numbers = generateRandNArr(i);
  random_numbers=ownSort(random_numbers);
  //console.log(random_numbers);
  testNum = random_numbers[Math.round(Math.random()*i)];
  suite.add('LinearTest', function() {
    linearSearch(testNum,random_numbers);
  })
  .add('BinaryTest', function() {
    binary_search(testNum, random_numbers);
  })

  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(i,' Testcase, Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': false });
//------------------------------------
  i=nArr[1];
//---------------------------------------
  random_numbers = generateRandNArr(i);
  random_numbers=ownSort(random_numbers);
  testNum = random_numbers[Math.round(Math.random()*i)];
  suite.add('LinearTest', function() {
    linearSearch(testNum,random_numbers);
  })
  .add('BinaryTest', function() {
    binary_search(testNum, random_numbers);
  })

  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(i,' Testcase, Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': false });
//------------------------------------
  i=nArr[2];
//---------------------------------------
  random_numbers = generateRandNArr(i);
  random_numbers=ownSort(random_numbers);
  testNum = random_numbers[Math.round(Math.random()*i)];
  suite.add('LinearTest', function() {
    linearSearch(testNum,random_numbers);
  })
  .add('BinaryTest', function() {
    binary_search(testNum, random_numbers);
  })

  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(i,' Testcase, Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': false });
//------------------------------------
}
test()

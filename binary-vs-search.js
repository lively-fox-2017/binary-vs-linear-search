'use strict';
var Benchmark = require('benchmark');

/**********************************************/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i =0; i < arr.length; i++){
    for(var j = 0; j<i; j++){
      if(arr[j] > arr[i]){
        var tampung = arr[i];
        arr[i] = arr[j];
        arr[j] = tampung;
      }
    }
  }
  return arr
}

function binarySearch (search, array, position = 0) {
  // Your searching code
  var low = 0;
  var high = array.length-1;
  var middle = Math.ceil((low+high)/2);

  if (search === array[middle]) {
    // console.log('search === array[middle]', middle);
    return middle + position
  } else if (low === high){
    // console.log('low === high', middle);
    return -1
  } else if (search < array[middle]) {

    var newArr = array.slice(0, middle)
    // console.log(middle, position, newArr);
    return binarySearch(search, newArr)
  } else if (search > array[middle]) {

    var newArr
    newArr = array.slice(middle, array.length)
    // console.log('masuk search > array[middle]', middle, position, newArr);
    return binarySearch(search, newArr, position = middle + position)
  }

}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//arrayGenapSorted = [8, 10, 10, 18, 22, 22, 32, 40, 90]
//arrayGanjilSorted = [3, 21, 31, 53, 53, 55, 77, 85, 89]

// Driver code
console.log(binarySearch(40, arrayGenapSorted)) // 0
console.log(binarySearch(10, arrayGenapSorted)) // 1
console.log(binarySearch(33, arrayGenapSorted)) // -1
console.log(binarySearch(90, arrayGenapSorted))
console.log(binarySearch(32, arrayGenapSorted))
// //
console.log(binarySearch(53, arrayGanjilSorted)) // 4
console.log(binarySearch(3, arrayGanjilSorted)) // 0
console.log(binarySearch(2, arrayGanjilSorted)) // -1

/**********************************************/

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  for (let i = 0; i < random_numbers.length; i++){
    while (target === random_numbers[i]){
      return i;
    }
  }
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1


/**********************************************/

var suite = new Benchmark.Suite;

// add tests
suite
  .add('linearSearch', function(){linearSearch(18, random_numbers)})
  .add('binarySearch', function(){binarySearch(53, arrayGanjilSorted)})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

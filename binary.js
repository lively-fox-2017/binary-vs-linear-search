'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  let swapped
  do {
        swapped = false;
        for (let i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  return arr
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

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// let test_array=[1,2,3,4,5];
// console.log(binary_search(3, test_array)===2)

// test_array=[13,19,24,29,32,37,43];
// console.log(binary_search(35, test_array)===-1)

// test_array=[100,120,130,135,150,170];
// console.log(binary_search(135, test_array)===3)

module.exports = {
  binary_search
}

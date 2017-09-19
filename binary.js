'use strict'

// var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
// [8, 10, 10, 18, 22, 22, 32, 40, 90]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];
// [3, 21, 31, 53, 53, 55, 77, 85, 89]

// test ke akuratan
// var testArray = [1, 2, 3, 4, 5];
// var testArray2 = [13, 19, 24, 29, 32, 37, 43];
// var testArray3 = [100, 120, 130, 135, 150, 170];



function ownSort(arr) {
  // Your sorting code
  for(var i=1;i<=arr.length-1;i++){
	for(var j=0;j<=i-1;j++){
		if(arr[i] < arr[j]){
			let sementara = arr[i];
			arr[i] = arr[j];
			arr[j] = sementara;
		}
	}
  }
  
  return arr;
}

function binarySearch(search, array) {
  // Your searching code
  let indexAwal = 0;
  let indexAkhir = array.length - 1;
  let indexTengah = Math.floor((indexAwal + indexAkhir)/2);
  
  while(indexAwal <= indexAkhir){
	if(array[indexTengah] === search){
		return indexTengah;
	}else{
		if(array[indexTengah] > search){
			indexAkhir = indexTengah - 1;
		}else{
			indexAwal = indexTengah + 1;
		}
		indexTengah = Math.floor((indexAwal + indexAkhir)/2);
	}
  }
  
  return -1;
}

// var arrayGenapSorted = ownSort(testArrayGenap)
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
// console.log(binarySearch(8, arrayGenapSorted))
// console.log(binarySearch(10, arrayGenapSorted))
// console.log(binarySearch(33, arrayGenapSorted))

// console.log(binarySearch(53, arrayGanjilSorted))
// console.log(binarySearch(3, arrayGanjilSorted))
// console.log(binarySearch(2, arrayGanjilSorted))

// test ke akuratan
// console.log(binarySearch(3, testArray) === 2) //true
// console.log(binarySearch(35, testArray2) === -1) //true
// console.log(binarySearch(135, testArray3) === 3) //true

module.exports = {
  binarySearch,
  ownSort
}

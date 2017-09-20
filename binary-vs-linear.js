'use strict'

let fs = require('fs');
let Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

let seribu = fs.readFileSync('1000.txt', 'utf8').split(',')
let sepuluhRibu= fs.readFileSync('10000.txt', 'utf8').split(',')
let sejuta= fs.readFileSync('1000000.txt', 'utf8').split(',')

// referensi web : http://textmechanic.com/text-tools/numeration-tools/generate-list-numbers/


// ==========Linear Search=============
let linearSearch = (target, values) => {
  //write your code here
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target) {
      return i;
    }
  }
  return -1;
}
// =======Binery Search========
function ownSort(arr) {
  // Your sorting code
  var temp = 0;
  for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr
}

function binary_search(search, array) {
  let awal = 0;
  let akhir = array.length

  while (awal <= akhir) {
    let mid = Math.floor((awal + akhir) / 2)
    if (search == array[mid]) {
      return mid;
    } else if (search > array[mid]) {
      awal = mid + 1
      mid = Math.floor((awal + akhir) / 2)
    } else if (search < array[mid]) {
      akhir = mid - 1
      mid = Math.floor((awal + akhir) / 2)
    }
  }
  return -1
}

var arraySeribu = ownSort(seribu)
var arraySepuluhRibu = ownSort(sepuluhRibu)
// var arraySatuJuta = ownSort(sejuta)

// add Test case
// ribuan
suite.add('Test linear seribu: ', () => {
  linearSearch(300, seribu)
})
suite.add('Test binary seribu: ', () => {
  binary_search(300, arraySeribu)
})
// puluhan ribu
suite.add('Test linear 10 Ribu ', () => {
  linearSearch(300, sepuluhRibu)
})
suite.add('Test binary 10 Ribu ', () => {
  binary_search(300, arraySepuluhRibu)
})
// sejuta
// suite.add('Test linear 10 Ribu ', () => {
//   linearSearch(300, sejuta)
// })
// suite.add('Test binary 10 Ribu ', () => {
//   binary_search(300, arraySatuJuta)
// })

// add listeners
suite.on('cycle', function(event) {
  console.log(String(event.target));
})
suite.on('complete', function() {
  console.log('Tercepat ' + this.filter('fastest').map('name'));
})
// run async
suite.run({ 'async': true });

var Benchmark = require('benchmark');
var binary = require('./binary');
var linier = require('./linear_search');

var arraySatuK = []
var arraySepuluhK = []
var arraySejuta = []

for (let i = 0; i < 1000; i++) {
  arraySatuK.push(Math.floor(Math.random() * 1000));
}
for (let i = 0; i < 10000; i++) {
  arraySepuluhK.push(Math.floor(Math.random() * 1000));
}
for (let i = 0; i < 1000000; i++) {
  arraySejuta.push(Math.floor(Math.random() * 1000));
}

// Sorting array
arraySatuK = binary.ownSort(arraySatuK);
arraySepuluhK = binary.ownSort(arraySepuluhK);
arraySejuta = binary.ownSort(arraySejuta);

let test = [arraySatuK, arraySepuluhK, arraySejuta];
let search = Math.floor(Math.random() * 1000)
let testNameBinary = ['Binary#test1K', 'Binary#test10K', 'Binary#testSejuta'];
let testNameLinier = ['Linier#test1K', 'Linier#test10K', 'Linier#testSejuta'];

for (let i = 0; i < 3; i++) {
  var suite = new Benchmark.Suite;
  suite.add(testNameBinary[i], function() {
      binary.binary_search(search, test[i]);
    })
    .add(testNameLinier[i], function() {
      linier.linearSearch(search, test[i]);
    })
    // add listeners
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({
      'async': false
    });
}

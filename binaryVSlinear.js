var Benchmark = require('benchmark');
var binary = require('./binary');
var linear = require('./linear_search');

var arrSeribu = [];
var arrSepuluhRibu = [];
var arrSejuta = [];
var arrTotal = [arrSeribu, arrSepuluhRibu, arrSejuta];
var arrNilai = [1000, 10000, 1000000];

for(let i=1;i<=1000;i++){
	arrSeribu.push(i);
}

for(let i=1;i<=10000;i++){
	arrSepuluhRibu.push(i);
}

for(let i=1;i<=1000000;i++){
	arrSejuta.push(i);
}

for(let i=0;i<3;i++){
	// add tests
	var suite = new Benchmark.Suite;
	console.log("------TEST UNTUK TOTAL ARRAY " +arrNilai[i]+" ANGKA------");
	suite.add('BinarySearch', function() {
	  binary.binarySearch(Math.random()*arrNilai[i], arrTotal[i]);
	})
	.add('LinearSearch', function() {
	  linear.linearSearch(Math.random()*arrNilai[i], arrTotal[i]);
	})
	// add listeners
	.on('cycle', function(event) {
	  console.log(String(event.target));
	})
	.on('complete', function() {
	  console.log('Fastest is ' + this.filter('fastest').map('name'));
	})
	// run async
	.run({ 'async': false });
	console.log("--------------------------------------------------");
}
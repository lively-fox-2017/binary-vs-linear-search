let Bench = require('benchmark');
let suite = new Bench.Suite;
let search = 9999;
let arr1k = Array.apply(null, {length: 1001}).map(Number.call, Number);
let arr10k = Array.apply(null, {length: 10001}).map(Number.call, Number);
let arr100k = [];
// for (var i=1;i<=1000001;i++) {
//   arraySejuta.push(i);
// }
let i=0;
while (i<=1000000) {
  arr100k.push(i);
  i++;
}

console.log(`sample 1k=${arr1k.length}`);
console.log(`sample 10k=${arr10k.length}`);
console.log(`sample 100k=${arr100k.length}`);

binarySearch = (search, array) => {
  // Your searching code
  var start=0,end=array.length,mod=0;
  //lakukan perulangan jika start <= end
  while (start<=end) {
    // console.log('tengah'+(start+end)/2);
    //ambil nilai tengah dengan rumus (start+end)/2 dan dibulatkan kebawah
    mod=Math.floor((start+end)/2);
    //cek jika search === array[mod]
    if (search===array[mod]) {
      //return jika mod sama dengan search===array[mod]
      return mod;
    } else
    //cek jika search memiliki nilai < searchArray[mod]
    if (search<array[mod]) {
      //assign nilai end=mod-1
      end=mod-1; //console.log('end '+end);
    }
    //jika nilai search nilainya > searchArray[mod]
    else {
      //assign start=mod+1
      start=mod+1; //console.log('start '+start);
    }
  }
  //return jika yang dicari tidak ditemukan
  return -1;
}

let linearSearch = (target, values) => {
  //lakukan perulangan dimulai dari 0 sebnyak panjang values
  let i=values.length;
  while (i>=0) {
    //cek jika values[i]===target maka return i
    if (values[i]===target){return i}
    i--;
  }
  //jika tidak ditemukan maka retun -1
  return -1;
}
//seribu
suite.add('binary_search1k_test', function(){
	     binarySearch(search, arr1k);
      })
      .add('linear_search1k_test', function(){
      	linearSearch(search, arr1k);
      })
      // sepuluh ribu
      .add('binary_search10k_test', function(){
      	binarySearch(search, arr10k);
      })
      .add('linear_search10k_test', function(){
      	linearSearch(search, arr10k);
      })
      // sejuta
      .add('binary_search_100k_test', function(){
      	binarySearch(search, arr100k);
      })
      .add('linear_search_100k_test', function(){
      	linearSearch(search, arr100k);
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

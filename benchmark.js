var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
// add tests
var search = 10;
var arraySeribu = Array.apply(null, {length: 1000}).map(Number.call, Number);
var arraySepuluhribu = Array.apply(null, {length: 10000}).map(Number.call, Number);
var arraySejuta = [];
for (var i=1;i<=1000000;i++) {
 arraySejuta.push(i);
}

// binary_search recursif
function binary_search (search, array) {
  let length = array.length
  let arrMid=Math.floor(length/2);
  let arrNew;
  if (array[arrMid]==search) {
    return arrMid
  }else if(array[arrMid] > search) {
    arrNew = array.slice(0, arrMid);
    return binary_search(search, arrNew);
  }else if (array[arrMid] < search) {
    arrNew = array.slice(arrMid + 1, length);
    return binary_search(search, arrNew);
  } else {
    return -1;
  }

}
//binary_search looping biasa
// function binary_search (search, array) {
//   // Your searching code
//   let arrMin= 0;
//   let arrMax= array.length-1;
//   let arrMid;
//
//   	for(let i=0; i<array.length; i++){
//   		arrMid=Math.floor((arrMax+arrMin)/2)
//   		if(search===array[arrMid]){
//   			return arrMid
//   		}else if(search < array[arrMid]){
//   			arrMax=arrMid - 1
//   		}else if(search > array[arrMid]){
//   			arrMin= arrMid + 1
//   		}
// 	}
//
//  return -1
// }

let linearSearch = (search, array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == search ){
      return i
    }
  }
  return -1
}

suite
.add('binary_searchSeribu#test', function(){
    binary_search(search, arraySeribu);
})
.add('linear_searchSeribu#test', function(){
    linearSearch(search, arraySeribu);
})
// sepuluh ribu
.add('binary_searchSepuluhribu#test', function(){
    binary_search(search, arraySepuluhribu);
})
.add('linear_searchSepuluhribu#test', function(){
    linearSearch(search, arraySepuluhribu);
})
// sejuta
.add('binary_searchSejuta#test', function(){
    binary_search(search, arraySejuta);
})
.add('linear_searchSejuta#test', function(){
    linearSearch(search, arraySejuta);
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

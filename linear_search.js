'use strict'

// Release 0
let linearSearch = (target, values) => {
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target)
      return i;
  }
  return -1;
}

let random_numbers = [6, 29, 18, 2, 72, 19, 18, 10, 37];

// Release 1
let globalLinearSearch = (target, values) => {
  let result = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] === target)
      result.push(i);
  }
  if (result.length === 0)
    return -1;
  else
    return (result.length === 1) ? result[0] : result;
}

let banana_arr = "banana".split("");


module.exports = {
  linearSearch,
  globalLinearSearch
}

'use strict'

const binarySearch = (search, array) => {
	let low = 0;
	let high = array.length - 1;
	let mid = Math.round((high + low) / 2);

	while (low <= high) {
		if (search === array[mid]) return mid;
		if (search > array[mid]) {
			low = mid + 1;
			mid = Math.round((high + low) / 2);
		} else {
			high = mid - 1;
			mid = Math.round((high + low) / 2);
		}
	}

	return -1;
}

module.exports = {
  binarySearch
}
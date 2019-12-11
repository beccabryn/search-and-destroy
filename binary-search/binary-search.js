'use strict';

// Complete this algo
const binarySearch = (arr, target) => {
	if (arr.length === 0){
		return false
	} else if (arr[arr.length] < target){
		return false
	} else if (arr[0] > target){
		return false
	} else if (arr[arr.length / 2] === target){
		return true
	}

	while (arr.length > 1){
		let mid = Math.floor(arr.length / 2)
		if (target < arr[mid]){
			arr = arr.slice(0, mid)
		} else {
			arr = arr.slice(mid)
		}
	}

	if (arr[0] === target){
		return true
	} else {
		return false
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

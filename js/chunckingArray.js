// best method is to slice the array and push it to the chunked array
function chunk(array,size){
	let chunked = [];
	let index = 0;
	while(index < array.length){
		chunked.push(array.slice(index,index + size));
		index += size
	}
	console.log(chunked);
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
/*
 Algorithm
 1. Create empty array to hold chunks(array) called 'chuncked'
 2. For each element in the 'unchuncked' array(given array);
 		-retrieve the last element in 'chuncked'
 		-if last element does not exist, or if its length is equal to
 		chunk size
 			-push a new chunck into 'chunked' with the current element
 		-else add the current element into the chunk. 
*/
function chunk(array,size){
	let chunked = [];
	// loop through array
	for(let element of array){
		// get the last array element in the chunked array
		let last = chunked[chunked.length - 1];
		if( !last || last.length === size){
			// push array element in the chunked array
			chunked.push([element]);
		}else{
			// push element in the last array element
			last.push(element);
		}
	}
	console.log(chunked);
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
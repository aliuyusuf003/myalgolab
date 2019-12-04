/**
//constant runtime or time complexities
//Big O Notation: "O(1)"

function log(array){
	console.log(array[0]);
	console.log(array[1]);
}

log([1,2,3])
log([1,2,3,4,5,6,7,8,9])
**/

/**
//Linear runtime 
// Big O Notation: "O(n)"

function logAll(array){
	for(let i=0;i<array.length;i++){
		console.log(array[i])
	}
	
}
logAll([1,2,3])
logAll([1,2,3,4,5,6,7,8,9])
**/

function addAndLog(array){

	for(let i=0;i<array.length;i++){

		for(let j=0;j<array.length;j++){
		// console.log(array[i]+' and '+array[j]+'='+ array[i] + array[j]);
		console.log( array[i] + array[j]);

		}
		
	}
}

addAndLog(['A','B']);
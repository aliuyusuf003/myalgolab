//Anagram-is when we have two strings having the same characters
// in the same quantity

function isAnagram(stringA,stringB){
	console.log(cleanString(stringA) === cleanString(stringB));
}

function cleanString(str){
	return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}


isAnagram('Hi there', 'Bye there');

// Another method

//Anagram-is when we have two strings having the same characters
// in the same quantity

function isAnagram(stringA,stringB){
	let objMapA = changeToObj(stringA);
	let objMapB = changeToObj(stringB);
	// looping through object
	for(let element in objMapA){
		if(objMapA[element] !== objMapB[element] ){
			return false;
		}
	}
	if(Object.keys(objMapA).length !== Object.keys(objMapB).length ){
		return false;
	}
	return true;
}

function changeToObj(str){
	let charObj = {};
	for(let element of str.replace(/[^\w]/g,'').toLowerCase()){
		charObj[element] = charObj[element] +1 || 1;

	}
	return charObj; 
}

//console.log(changeToObj('test'));

 // console.log(isAnagram('Hi there', 'Bye there'));
 console.log(isAnagram('RAIL! SAFETY!', 'fairy tales'));
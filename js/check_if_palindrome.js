//check if palindrome(same when reversed word)


function palindrome(str){
	let reversed = '';

	for(let element of str){
		reversed = element + reversed;
	}
	// console.log(reversed);
	if(reversed == str){
		console.log(true);
	}else{
		console.log(false);
	}
	
}


palindrome('madam');
/*
Algorithms
 1.Create an empty string
 2.loop through the given string
 3.append string element to the empty string to reverse the given string
 4.check if final reversed string is equal to the given string
 */
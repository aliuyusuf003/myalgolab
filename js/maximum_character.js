// check character with maximum number of occurence
function maxCharacter(str){
	let charObj = {};
	let max = 0;
	let maxChar = '';
// loop through the string to convert to object
for(let char of str){
	if(!charObj[char]){
		charObj[char] = 1;
	}else{
		charObj[char]++;
	}
}
// looping through the object
for(let key in charObj){
	if(charObj[key] > max){
		max = charObj[key];
		maxChar = key;
	}
}
	console.log(maxChar);

}

maxCharacter('abcccccccd');
maxCharacter('apple 1231111');
maxCharacter('Hello There!');


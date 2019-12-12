// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str){
	let words = [];
	for(let word of str.split(' ')){
		words.push(word[0].toUpperCase() + word.slice(1));
	}
	return words.join(' ');
}



console.log(capitalize('look, it is working!'));

// function capitalize(str){
// 	let capitalized = str[0].toUpperCase();
// 	for(var i=1;i<str.length; i++){
// 		if(str[i-1] === ' '){
// 			capitalized +=  str[i].toUpperCase();
// 		}else{
// 			capitalized +=  str[i];
// 		}
// 	}
// 	return capitalized;

// }



//console.log(capitalize('a lazy fox'));
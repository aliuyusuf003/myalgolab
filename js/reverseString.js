//reverse any string
function reverse_string(str){
 	reversed = '';
 	for(let element of str){
 		// console.log(element);
 		reversed =  element + reversed ;
 		// a + '' = 'a';
 		// b + 'a' = 'ba';
 		// c + 'ba' = 'cba';
 	}
 	console.log(reversed);
}


reverse_string('abcdef');
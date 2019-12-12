// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

function fizzBuzz(num){
	// loop through number
	

	for(let i = 1; i <= num; i++){
		// is i multiple of 15
		if(i%3===0  && i%5=== 0){
			console.log('fizzbuzz');

		}else if(i%3 === 0){
			// is number multiple of 3
			console.log('fizz');
		}else if(i%5 === 0){
			// is number multiple of 5
			console.log('buzz');
		}else{
			console.log(i);	
		}
		
	}	
	
}

fizzBuzz(17);

/*
Algorithms
 1.Loop through the given number
 2.check if element is divisible by 15 ,3 5 
 */
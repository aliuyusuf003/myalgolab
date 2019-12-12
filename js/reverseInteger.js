//reverse any interger

function reverseInt(num){
	let sign = Math.sign(num);
	num = num.toString();
	let reversed = ''
	for(let element of num){
		reversed = element + reversed;
	}
	reversed = parseInt(reversed) * sign;

	console.log(reversed);
}

reverseInt(-4782);
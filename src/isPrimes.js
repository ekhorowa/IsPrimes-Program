//program getPrimes

function getPrimes(numb){
	if(typeof (numb) == "number"){//conditional statement to check if the type of parameter passed is a number
		if(numb > 1){
			var array_1 =  [];// declaring a variable called array_1 and storing an empty array in it
			for(var i = 2; i < numb; i++){//iterating through the argument passed
				if(i == 3 || i == 2){
					array_1.push(i); // the push method is an array method that adds items to the end of an array in this program array_1.push(i) adds generated items after iteration to the end of the array 
				}
				else if (!( i % 2 === 0 || i % 3 === 0)){
					array_1.push(i);
				}
			}
			return array_1;//returns the prime number less than the argument passed
		}
		else{
			return "invalid number";//returns invalid number if a negative number e.g(-1) is passed as an argument
		}
	}
	else{
		return "argument must be a number";// returns argument must be number in string format if no argument is passed
	}
}
module.exports = getPrimes
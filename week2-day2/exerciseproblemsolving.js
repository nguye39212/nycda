//we need an array of numbers
//we need to reverse the array
//if/else statement that checks the number is greater or less than 10
//this should be inside of a for loop




var numbers = [0,20,56,678];

numbers.reverse();

for (var i = 0; i< numbers.length; i++){
		
		if (numbers[i] < 10){
		console.log('less is more');
	} else {
		console.log('more is better');
	} 
}

function numberTest(something) {
	// body...
	
	var numbers ='0,1,2,3';
	console.log('inside function local', numbers)
}
//local scope
//var z = 3;
//function someF(z){ 
//console.log(z); 
//} 
//someF(10) 
//>>10
//console.log(z); 
//>>3
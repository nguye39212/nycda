


Math.floor(Math.random() * 20) + 1;
//-create a varible that generates a random number between 1 and 10


//create a varible that holds the result of the prompt of 
//asking someone what number they want to guess

//-wrong (the guess does NOT equal the random number)
//-right (the guess DOES equal the random number)

function guessingGame(){

var randomNumber = Math.floor(Math.random() * 10) + 1;
//console.log(randomNumber);
var guess = prompt('guess a number between 1 and 10!');
console.log(guess);
if(guess=null){
	return
}

while(randomNumber !=guess){
	if(randomNumber > guess){
		alert('your guess is too low');
		} else{
			alert('your guess is too high')
		}
	 guess = prompt('Guess a number between 1 and 10!');
}
return alert('you are right!')}
//for(i=1; i<=3; i++){

//if(randomNumber == guess){
//	alert('your right');
//	return
//} else{
//	alert('Eher.')
//	}
//}

//guessingGame();
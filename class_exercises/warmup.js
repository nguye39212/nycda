Warm Up Week 2, Day 2
Let’s declare some variables:
- Define variable named pet, which is a *string* of the name of one of your pets (or the pet you wish you had)
- Define variable named toes, which is an *integer* of the number of toes you have
- Define a variable named tired, which is a *boolean* value of whether you feel tired or not right now!
Let’s create some arrays:
- Define a variable named fruits, which is an *array* of three of your favorite fruits
- Define a variable named friends, which is a *multi-dimensional array*, including the names of three friends and their favorite color (make it up!)
Let’s create some objects:
- Define a variable named person. Set it equal to an *object* with the attributes name, toeCount, and hairColor.
- Log to the console:
    - The person’s name
    - The person’s toeCount
    - The person’s hairColor
Let’s create some functions:
- Define a function named squared. This should take one argument and return the *square* of the passed in value.
- Define a function named area. This should take two arguments (length and width) and multiply them to give you the area of a rectangle.
EXTENSION:
We didn't learn these things in class. Use your new bff Google to see if you can figure out how to do these things in JS.
- Reverse your fruits array.

console.log(fruits.Reverse());

- Figure out how to generate a random number using javascript.

var pet = "boo";

var toes = 10;

var tired = false;

var fruits = ["orange", "grapes", "apples", "banana"]

var friends = [["mayra", "blue"], ["yoli", "yellow"], ["kate", "black"]]

var person = {name:friends[0][1],toeCount:toes, hairColor:"brown"}

console.log(person.name);
console.log(person.toeCount);
console.log(person.hairColor);
console.log(friends);

function squared(a){
	var answer= a * a;
	console.log(answer);
	return answer;
}

function squared(a){
	return a * a;
}

function area(length,width){
	return length * width;
}

squared(2);
area(10,5)
console.log(toes)

var selectdoor = prompt('which door do you choose? 1,2, or 3?');
if(selctdoor==1){
	alert('you have won a car')
}else if(selectdoor == 2){
	alert('you have won a horse')
}else if (selectdoor ==3);{
	alert('you have won a spaceship')
}else(selectdoor == 0){
	alert('you lose')
}

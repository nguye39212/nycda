function Family(dad, mom, kids = []){
	this.dad = dad;
	this.mom = mom;
	this.kids = kids;
	this.addNewChild = function(childObj){
	// Array
		this.kids.push(childObj);
	// create attributes on the object for the dad, mom, and kid
	}
}	

// function Album(photos = []){
// 	this.photos = photos; // Array
// 	this.addNewPhoto = function(photoObj){
// 		this.photos.push(photoObj);
// 	}
// }
function Adult(name, age, job){
	this.job = job;
	Person.apply(this, arguments);
}
Adult.prototype = Object.create(Person.prototype);

function Child(name, age, toy){
	this.toy = toy;
	Person.apply(this, arguments);
}
Child.prototype = Object.create(Person.prototype);

function Person(name, age){
	this.name = name
	this.age = age
}

var yourDad = new Adult ('Jimmy', 37, 'student!');
var yourMom = new Adult ('Kate', 27, 'some job');
var yourKid = new Child ('Alizne', 0, 'toy');
var childObj = new Child ('Nathaniel', 8, 'race car')
// pass in the objects as arguments so that your example works!
var jimmysFamily = new Family(yourDad, yourMom, kids[]);

Family.addNewChild(childObj);
//jimmysFamily.dad
//jimmysFamily.mom
//jimmysFamily.kid
// create a variable

// fix the problem

var a = "This is a string with a problem";
var b = ['this','should','be','a','seven','element','array'];
var c = {firstkey:'first', secondkey:'second', thirdkey:'third'};
function tellMeSomethingNice(){
	return 'you look great!';
}

//loops
//each student create an object
//create an array that includes each of the students object
//

var luke = {name: 'Luke', grade: 96};
var kate = {name: 'kate', grade: 78};
var kevin = {name: 'Kevin', grade: 46};
var amanda = {name: 'Amanada', grade: 84};

var students = [luke, kate, kevin, amanda];

for (var i = students.length - 1; i >= 0; i--) {
	var studentname = students[i].name;
	var studentgrade = students[i].grade;
	console.log(studentname,studentgrade);
	
	if (studentgrade<=59){
		console.log('F');
	}
		else if (studentgrade<=69){
			console.log('D');
		}
		else if (studentgrade<=79){
			console.log('C');
		}
		else if (studentgrade<=89){
			console.log('B');
		}
		else if (studentgrade>=90){
			console.log('A');
		}
}

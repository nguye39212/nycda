alert('is this working')

//for(var i=0; i<=10; i++){
//	console.log(i);}

for(var i = 2; i <= 12; i += 2){
	console.log(i);
}
for(var i = 2; i <= 12; i ++){
	if(i % 2 == 0){
	console.log(i);
	}
}

var friends = [["mayra", "blue"], ["yoli", "yellow"], ["kate", "black"]];

//console.log(`${friends[0][0]} likes color $(friends[0][1]}`);

for(var i=0; i<=2; i++){
	console.log(`${friends[i][0]} likes the color ${(friends[i][1]}`);
}

Math.random();

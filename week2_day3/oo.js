var letterGrade = null;
 var student = new Student("Luke", 96);   
// var luke = {name: 'Luke', grade: 96};
// var kate = {name: 'kate', grade: 78};
// var kevin = {name: 'Kevin', grade: 46};
// var amanda = {name: 'Amanada', grade: 84};

// var student = [luke, kate, kevin, amanda];

function Student(name, grade){
    this.name = name;
    this.grade = grade;
    this.letterGrade = function(){
        if(this.grade>=0 &this.grade<=59) {
            console.log(this.name+": got an F");
        } else if(this.grade>=60 & this.grade<=69) {
            console.log(this.name+": got an D");
        }    else if(this.grade>=70 & this.grade<=79) {
            console.log(this.name+": got an C");
        }    else if(this.grade>=80 & this.grade<=89) {
            console.log(this.name+": got an B");
        }    else if(this.grade>=90 & this.grade<=100) {
            console.log(this.name+": got an A");
        }
    };
}

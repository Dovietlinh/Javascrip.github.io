var readlineSync = require('readline-sync');
var fs=require('fs');
var students=[];
function loadData(){
	var content=fs.readFileSync('./data.json');
	students = JSON.parse(content);
}

function showAllStudents(){
	for (var student of students) {
		console.log(student.name, student.age);
	};
}
function createStudent(){
	var name=readlineSync.question('Name:');
	var age=readlineSync.question('Age:');
	var student={
		name:name,
		age:parseInt(age)
	};
	students.push(student);
}
function saveData(){
	var data = JSON.stringify(students);
	fs.writeFileSync('./data.json',data, {encoding:'utf8'} );
}
function showMenu() {
	console.log('1.Show all students.');
	console.log('2.Create a new student,');
	console.log('3.Save & Exit.');
	var option=readlineSync.question('>');
	switch(option){
		case '1': 
			showAllStudents();
			showMenu();
			break;
		case '2':
			createStudent();
			showMenu();
			break;
		case '3':
			saveData();
			showMenu();
			break;
		default:
			showMenu();
			break;
	}
}
function main() {
	loadData();
	showMenu();
}
main();
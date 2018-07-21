var fs=require('fs');
var readlineSync=require('readline-sync');
var text=fs.readFileSync('./data.json',{encoding: 'utf8'});
console.log(text);
do{
	console.log('1. Show all students');
	console.log('2. Create a new student');
	console.log('3. Save & Exit');
	var choice=readlineSync.question('Input choice:');
	if(choice==1){
		// console.log(JSON.parse(text));
		console.log(data);
	}
}while(choice!=3);
fs.writeFileSync('./data.json',text+'\n'+oject);
text=fs.readFileSync('./data.json',{encoding: 'utf8'});
console.log(JSON.stringify(text));
//Node-co
var fs=require('fs');
var co=require('co');
function readFilePromise(path){
	return new Promise(function(resolve,reject){
		fs.readFile(path,{encoding:'utf8'},function(err,data){
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
	});
}

// co(function*() {  //generator function vi sao co dau '*'
// 	var song1 = yield readFilePromise('./song1.txt');
// 	var song2 = yield readFilePromise('./song2.txt');
// 	var song3 = yield readFilePromise('./song3.txt');
// 	console.log(song1,song2,song3);
// });

// co(function*() {  //generator function vi sao co dau '*'
// 	var song = yield[
// 		readFilePromise('./song1.txt'),
// 		readFilePromise('./song2.txt'),
// 		readFilePromise('./song3.txt')
// 	] 
// 	return song;
// }).then(function(song){
// 	console.log(song);
// }).catch(function(err){
// 	console.log(err);
// });

var readFiles=co.wrap(function*(files){
	//[String] -> [Promise]
	var values=yield files.map(function(file){
		return readFilePromise(file);
	});
	return values;
});
readFiles(['song1.txt','song2.txt','song3.txt'])
	.then(function(values){
		console.log(values);
	});
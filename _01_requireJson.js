var data = require('./sevenDays/rowPaths');
//support: ./sevenDays/rowPaths		./sevenDays/rowPaths.json
//not support: 'sevenDays/rowPaths.json'
for( var i in data){
	console.log(i);
}

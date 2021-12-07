var fs = require('fs');
var FilePath = "";
var data = "てすと"

var existence = false;
try {
	fs.statSync(FilePath);
	existence = true;
} catch(err) {
	existence = false;
}

var content = new String();
content = fs.readFileSync(FilePath, 'utf8');

console.log(content)

fs.appendFileSync(FilePath,data)

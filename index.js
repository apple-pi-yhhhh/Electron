var fs = require('fs');
var FilePath = "";
var existence = false;
try {
	fs.statSync(FilePath);
	existence = true;
} catch(err) {
	existence = false;
}



  var content = new String();
  if(check(FilePath)) {
    content = fs.readFileSync(FilePath, 'utf8');
  };
  return content;

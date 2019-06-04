var path = require('path');
var express = require('express');
/*var exphbs = require('express-handlebars');
var fs = require("fs");*/



var app = express();
var port = process.env.PORT || 3000;

/*var data = fs.readFileSync("weponData.json");
  var arrWepon = JSON.parse(data);*/
/*app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');*/



app.use(express.static('public'));

app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  });
  
  app.listen(port, function () {
    console.log("== Server is listening on port", port);
  });

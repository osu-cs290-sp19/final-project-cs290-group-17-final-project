var path = require('path');
var express = require('express');

var MongoClient = require('mongodb').MongoClient;
var expressHB = require('express-handlebars');
var fs = require("fs");


var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', expressHB({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static('public'));


var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_butlenat";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_butlenat";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_butlenat";
var mongoURL = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
console.log(mongoURL);

var mongoDBDatabase;


app.get('/attack/', function(req, res){
	var weapons = mongoDBDatabase.collection('weapons');
    weapons.find({}).toArray(function (err, weaponDocs) {
        if (err) {
            res.status(500).send("Error fetching people from DB.");
           
        } else {
            
            res.status(200).render('attack', 
            {
                weapons: weaponDocs
            });
        }
    });
    
});


app.get('/characters', function(req, res){
	var chars = mongoDBDatabase.collection('characters');
    chars.find({}).toArray(function (err, charDocs) {
        if (err) {
            res.status(500).send("Error fetching people from DB.");
           
        } else {
            console.log(charDocs);
            res.status(200).render('character', 
            {
                chars: charDocs
            });
        }
    });
    
});


app.post('/characters', function(req, res, next){
    res.sendStatus(200);
    var data = req.body
    db.collection('characters').insertOne(
        data,
        function (err, result) {
            if (err) {
              res.status(500).send({
                error: "Error inserting  into DB"
              });
            } else {
              console.log("== update result:", result);
              if (result.matchedCount > 0) {
                res.status(200).send("Success");
              } else {
                next();
              }
            }
        });
    console.log(data);
});

app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  });

MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
      throw err;
    }
    db = mongoDBDatabase = client.db(mongoDBName);
    app.listen(3000, function () {
      console.log("== Server listening on port 3000");
    });
  });
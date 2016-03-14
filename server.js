var express = require('express')
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var db = mongojs('zooDB', ['animals']);
db.on('error', function(err) {
	console.log("database error:". err);
})

var app = express();



var PORT = process.env.PORT || 3000;

// Handlebar Layouts

// app.engine('handlebars', expressHandlebars({
//   defaultLayout: 'main'
// }));

// app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// Route to Public Folder

app.use(express.static("public"));

// Request made to reddit.com, displays the info in the body

// request('https://www.reddit.com', function (error, response, body) {
// 	var results = [];
//   if (!error && response.statusCode == 200) {
// 		$ = cheerio.load(body);

// 		$('p.title').each(function(i, elem) {
// 			results.push({
// 		 		title: $(this).text()
// 		 	})
// 		})
//   }
//   console.log(results)
// })

app.get("/", function(req,res) {
	res.send(index.html);
})

app.get("/all", function(req,res) {
	db.animals.find({}, function(err, records) {
		if(err){
			console.log(err);
		} else {
			res.json(records);
		}
	})
})

app.get("/weight", function(req,res) {
	db.animals.find().sort({weight: 1}, function(err, records) { //this sorts the animals by weight from least to greatest
		if(err){
			console.log(err);
		} else {
			res.json(records);
		}
	})
})

app.get("/name", function(req,res) {
	db.animals.find().sort({name: 1}, function(err, records) { 
		if(err){
			console.log(err);
		} else {
			res.json(records);
		}
	})
})




app.listen(PORT, function(){
  console.log("Server listening on " + PORT);
});
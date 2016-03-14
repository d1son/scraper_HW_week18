var express = require('express')
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');
var mongojs = require('mongojs');
var mongoose = require('mongoose');
var db = mongojs('scraper', ['collection name here']);
var app = express();


var PORT = process.env.PORT || 3000;

// Handlebar Layouts

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

// Route to Public Folder

app.use(express.static("public"));

// Request made to reddit.com, displays the info in the body

request('https://www.reddit.com', function (error, response, body) {
	var results = [];
  if (!error && response.statusCode == 200) {
		$ = cheerio.load(body);

		$('p.title').each(function(i, elem) {
			results.push({
		 		title: $(this).text()
		 	})
		})
  }
  console.log(results)
})

// request('https://www.reddit.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
// 	  app.get('/', function(req, res) {
// 	    res.send(body); //Sends the scrapped information of reddit to the home route
// 	  });
//   }
// })


app.listen(PORT, function(){
  console.log("Server listening on " + PORT);
});
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');

app.use(bodyParser.urlencoded({
  extended: false
}));

request('https://www.reddit.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  app.get('/', function(req, res) {
	    res.send(body); //Sends the scrapped information of reddit to the home route
	  });
  }
})


app.listen(3000, function() {
  console.log('App running on port 3000!');
});
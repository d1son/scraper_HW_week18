var express = require("express")
var app = express();
var request = require("request");
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;

//DB Config
var mongojs = require("mongojs");
var databaseUrl = "scraper";
var collections = ["redditScraped"];
var db = mongojs(databaseUrl, collections);
db.on("error", function(err) {
	console.log("Databse Error:", err);
});

app.get("/", function(req,res){
	res.send("hello");
})

app.get("/scraped", function(req,res){
	console.log("this works")
	//scrapped data
	request('https://www.reddit.com', function (error, response, body) {
		
	  if (!error && response.statusCode == 200) {
			$ = cheerio.load(body);

			$('p.title').each(function(i, elem) {
				var title = $(this).text();
				console.log(title)

				if(title) {
					db.redditScraped.save({
						title:title
					}), function(err, saved){
						if(err){
							console.log(err);
						} else {
							console.log(saved);
						}
					}
				}
			})
	  }
	})
	res.send("scrape completed");
})


app.listen(PORT, function(){
  console.log("Server listening on " + PORT);
});
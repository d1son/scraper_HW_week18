$(document).ready(function(){
	console.log("this works")

$.getJSON("/all", function(data){
			for(var i = 0; i < data.length; i++){
				$("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].weight + "</td><td>" + data[i].whatIWouldReallyCallIt +"</td></tr>")
			}
		});

	$("#weightSort").on("click", function(){
		//get and log the info from /weight
		$.getJSON("/weight", function(data){
			for(var i = 0; i < data.length; i++){
				data[i]
			}
			console.log(data);
		})
		console.log("weight button clicked")
	})
	$("#nameSort").on("click", function(){
		$.getJSON("/name", function(data){
			console.log(data)
		})
		console.log("name button clicked")
	})
})


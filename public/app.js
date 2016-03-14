$(document).ready(function(){
	console.log("this works")

$.getJSON("/all", function(data){
			for(var i = 0; i < data.length; i++){
				$("#results").append("<tr><td>" + data[i].name + "</td><td>" + data[i].numlegs + "</td><td>" + data[i].class + "</td><td>" + data[i].weight + "</td><td>" + data[i].whatIWouldReallyCallIt +"</td></tr>")
			}
		});

	$("button.sort").on("click", function(){
		//get and log the info from /weight
		$.getJSON("/" + $(this).val(), function(data){
			$("#results tbody").empty();
			for(var i = 0; i < data.length; i++){
				var newTr = "<tr>";
				newTr += "<td>" + data[i].name + "</td>";
				newTr += "<td>" + data[i].numlegs + "</td>";
				newTr += "<td>" + data[i].class + "</td>";
				newTr += "<td>" + data[i].weight + "</td>";
				newTr += "<td>" + data[i].whatIWouldReallyCallIt + "</td>";
				newTr += "</tr>";
				$("#results tbody").append(newTr);
			}
		})
	})
})


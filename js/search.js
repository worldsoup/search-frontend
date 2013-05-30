var ajaxOK = false;
var curScrollId = 0;

$('#frmSearch').submit(function() {
	$.ajax({
	   type: 'POST',
	   url:"http://50.56.188.4:9200/appstore/_search?scroll=10m&size=3",
	   data: JSON.stringify({"query":
			  {"bool":
			   {"must":
			     [{"query_string":
			        {
				      "default_field":"_all",
				      "query": $('#searchKeyword').val()
				    }
				  }],
			      "must_not":[],
				  "should":[]
				 }
				},
				"from":0,
				"sort":[],
				"facets":{}
			  }),
	    success: function (data) {
	       parsedData = JSON.parse(data);
		   curScrollId = parsedData._scroll_id;	
		   //console.log(JSON.stringify(data));
		   dust.render("searchResult", JSON.parse(data), function(err, out) {
	            	//console.log("out: " + out);
	            	//console.log("err: " + err);
	            	$("#searchResults").html(out);
	        	});
			ajaxOK = true;
	    },
	    error: function(data){
	    	console.log("Error occured: " + JSON.stringify(data));
	    }
	});
    return false;
});

function showMoreResults(){
	$.ajax({
	    type: 'GET',
	    url:"http://50.56.188.4:9200/appstore/_search?scroll=10m&size=3&scroll_id=" + curScrollId,
	    success: function (data) {
		   //console.log(JSON.stringify(data));
		   dust.render("searchResult", JSON.parse(data), function(err, out) {
	            	//console.log("out: " + out);
	            	//console.log("err: " + err);
	            	$("#searchResults").append(out);
	        	});
			ajaxOK = true;
	    },
	    error: function(data){
	    	console.log("Error occured: " + JSON.stringify(data));
	    }
	});
}

//Infinite Scroll
$(window).bind('scroll', function () {	
		//check if the user has scrolled within 200px of the bottom of the page
		if ($(this).scrollTop() + $(this).height() >= ($(document).height() - 600)) {
			if (ajaxOK === true) {
        		ajaxOK = false;
				//loading more items because the user is within 600px of the bottom of the page
				showMoreResults();
			}
	}
});
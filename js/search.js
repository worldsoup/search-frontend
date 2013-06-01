var ajaxOK = false;
var curScrollId = 0;
var pageHeight = $(window).height();
var container = $('.results-container');

$('#frmSearch').submit(function() {
	//hide keyboard
    $('.search-box').blur();
	$.ajax({
		type: 'POST',
		url:"http://50.56.188.4:9200/appstore/_search?scroll=10m&size=3",
		data: JSON.stringify({
							"query" : {
							"multi_match" : {
							"query" : $('#searchKeyword').val(),
							"fields" : [ "appCategory^3", "appDescription^2","appFullDescription^2","appTitle" ]
							}
							}
							}),	
		success: function (data) {
			parsedData = JSON.parse(data);
			curScrollId = parsedData._scroll_id;	
		   //console.log(JSON.stringify(data));
		   curHits = parsedData.hits.hits;
		   if (curHits.length > 0) {
		   	dust.render("searchResult", JSON.parse(data), function(err, out) {
		            	//console.log("out: " + out);
		            	//console.log("err: " + err);
		            	$("#searchResults").html(out);
		            	//size the first results container
		            	container.css('height', pageHeight);
		            	//hide the prompt if results are served
		            	$('.search-prompt').animate({
			            		height: '0px',
			            	}, 350, 'ease-out');
		            });
		   	ajaxOK = true;
		   } else {
		   	$("#searchResults").html('<p><b>&nbsp;&nbsp; No results found</b></p>');			
		   }
		},
		error: function(data){
			console.log("Error occured: " + JSON.stringify(data));
		}
	});
return false;
});

function showMoreResults(){
	$('#loader').show();
	$.ajax({
		type: 'GET',
		url:"http://50.56.188.4:9200/_search/scroll?scroll=10m&size=3&scroll_id=" + curScrollId,
		success: function (data) {
		   //console.log(JSON.stringify(data));
		   parsedData = JSON.parse(data);
		   curHits = parsedData.hits.hits;
		   //console.log(curHits.length);
		   if (curHits.length > 0) {
		   		dust.render("scrollSearchResult", JSON.parse(data), function(err, out) {
		            	//console.log("out: " + out);
		            	//console.log("err: " + err);		            	
		            	$("#searchResults").append(out);
		         });
		   	     ajaxOK = true;
		   }
		   $('#loader').hide();
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
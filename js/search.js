var ajaxOK = false;
var curScrollId = 0;
var pageHeight = $(window).height();

$('#frmSearch').submit(function() {
	getResults($('#searchKeyword').val());
    //hide keyboard
    $('#searchKeyword').blur();
	$('#pageHome').hide();   
	$('#pageResults').show();
    return false;
});

$('#frmSecondSearch').submit(function() {
	getResults($('#secondSearchKeyword').val());
	//hide keyboard
    $('#secondSearchKeyword').blur();
    return false;
});

function getResults(searchKeyword){
	$.ajax({
		type: 'POST',
		url:"http://50.56.206.133:9200/appstore/_search?scroll=10m&size=3",
		data: JSON.stringify({
							"query" : {
							"multi_match" : {
							"query" : searchKeyword,
							"fields" : [ "appCategory^3", "appDescription^2","appFullDescription^2","appTitle" ]
							}
							}
							}),	
		success: function (data) {
			parsedData = JSON.parse(data);
			curScrollId = parsedData._scroll_id;	
		   //console.log(JSON.stringify(data));
		   curHits = parsedData.hits.hits;
		   //console.log('Length: ' + curHits.length);
		   if (curHits.length > 0) {
		   	dust.render("searchResult", JSON.parse(data), function(err, out) {
		            	//console.log("out: " + out);
		            	//console.log("err: " + err);
		            	$("#searchResults").html(out);
		            	$("#scrollSearchResults").html('');
		            	//first results stretch to bottom of screen
						$('.results-container').css('height', pageHeight);
						//remove .fill when results are returned
						$('.fill').hide();
		            	//hide the header if results are served
		            	$('header').hide();
		            	window.scrollTo(1, 0);
		            });
		   	 ajaxOK = true;
		   } else {
		   	//console.log('No results');
		   	$("#searchResults").html('<p><b>&nbsp;&nbsp; No results found</b></p>');
		   	$("#scrollSearchResults").html('');			
		   }
		},
		error: function(data){
			//console.log("Error occured: " + JSON.stringify(data));
			$("#searchResults").html("<p><b>&nbsp;&nbsp; Sorry, can't contact server. Please try again later.</b></p>");
		   	$("#scrollSearchResults").html('');	
		}
	});
}

function showMoreResults(){
	$('.spinner-container').show();
	$.ajax({
		type: 'GET',
		url:"http://50.56.206.133:9200/_search/scroll?scroll=10m&size=4&scroll_id=" + curScrollId,
		success: function (data) {
		   //console.log(JSON.stringify(data));
		   parsedData = JSON.parse(data);
		   curHits = parsedData.hits.hits;
		   //console.log(curHits.length);
		   if (curHits.length > 0) {
		   		dust.render("scrollSearchResult", JSON.parse(data), function(err, out) {
		            	//console.log("out: " + out);
		            	//console.log("err: " + err);		            	
		            	$("#scrollSearchResults").append(out);
		         });
		   	     ajaxOK = true;
		   }
		   $('.spinner-container').hide();
		},
		error: function(data){
			console.log("Error occured: " + JSON.stringify(data));
		}
	});
}

/*
$('#searchResults').swipeUp(function(){
    if (ajaxOK === true) {
		ajaxOK = false;
		showMoreResults();
	}
})
*/

//Infinite Scroll
$(window).bind('scroll', function () {	
		//check if the user has scrolled within 650px of the bottom of the page
		if ($(this).scrollTop() + $(this).height() >= ($(document).height() - 650)) {
			if (ajaxOK === true) {
				ajaxOK = false;
				//loading more items because the user is within 650px of the bottom of the page
				showMoreResults();
			}
		}
	});

$('#frmLogin').submit(function() {
	$.ajax({
		type: 'POST',
		url:"//api.mobozi.com/v1/searchlogin",
		data: $('form').serialize(),	
			    success: function(data) { 
			        serverdata = JSON.parse(data);
			        if (serverdata.status == 201){
						$('#pageLogin').hide();   
						$('#pageHome').show();
						setCookie('searchizobom', 'izobomhcr', 30); 
						window.scrollTo(1, 0);     
				     } else {
				        $('#errormessage').html('<font color="red">' + serverdata.error + '</font>') 		          
				    }                       
			    },
				error: function(jqXHR, textStatus, errorThrown){
				        $('#errormessage').html('<font color="red"> Error: ' + textStatus + '</font>') 
				}
	});
return false;
});

$(function() {
	if( /Android|webOS|windows phone|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
	  checkCookie();
	} else {
		$('#pageLogin').hide();   
		$('#pageDesktop').show();
	}    
});

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + c_name + "=");
	if (c_start == -1)
	 {
	  	c_start = c_value.indexOf(c_name + "=");
	 }
	if (c_start == -1)
	{
	  c_value = null;
	}
	else
	{
	  c_start = c_value.indexOf("=", c_start) + 1;
	  var c_end = c_value.indexOf(";", c_start);
	  if (c_end == -1)
	  {
		c_end = c_value.length;
	  }
	  c_value = unescape(c_value.substring(c_start,c_end));
	}
	return c_value;
}

function checkCookie()
{
	var betauser=getCookie("searchizobom");
  	if (betauser!=null && betauser!="")
  	{
  		$('#pageLogin').hide();   
		$('#pageHome').show();
		window.scrollTo(1, 0);
  	}
}

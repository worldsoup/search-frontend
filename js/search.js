var ajaxOK = false;
var curScrollId = 0;
var pageHeight = $(window).height();

$('#frmSearch').submit(function() {
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
		            	//first results stretch to bottom of screen
						$('.results-container').css('height', pageHeight)
		            	//hide the prompt if results are served
		            	$('.search-prompt').animate({
			            		height: '0px',
			            	}, 350, 'ease-out');
		            	window.scrollTo(1, 0);
		            });
		   	 ajaxOK = true;
		   	 //hide keyboard
             $('.search-box').blur();
		   } else {
		   	$("#searchResults").html('<p><b>&nbsp;&nbsp; No results found</b></p>');
		   	//hide keyboard
            $('.search-box').blur();			
		   }
		},
		error: function(data){
			console.log("Error occured: " + JSON.stringify(data));
		}
	});
return false;
});

function showMoreResults(){
	$('#floatingBarsG').show();
	$.ajax({
		type: 'GET',
		url:"http://50.56.188.4:9200/_search/scroll?scroll=10m&size=4&scroll_id=" + curScrollId,
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
		   $('#floatingBarsG').hide();
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
						$('#partiallogin').hide();   
						$('#partialSearch').show(); 
						setCookie('searchizobom', 'izobomhcr', 30);      
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
		$('#partiallogin').hide();   
		$('#partialNonMobile').show();
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
  		$('#partiallogin').hide();   
		$('#partialSearch').show();
  	}
}

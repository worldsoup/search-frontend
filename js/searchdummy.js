var ajaxOK = false;
var curScrollId = 0;
var pageHeight = $(window).height();

var dummyData = '{"_scroll_id":"cXVlcnlUaGVuRmV0Y2g7NTsyOTY1OjFqVll1bUh0UnVDSWViTW5CNWJNX2c7Mjk2MzoxalZZdW1IdFJ1Q0llYk1uQjViTV9nOzI5NjQ6MWpWWXVtSHRSdUNJZWJNbkI1Yk1fZzsyOTYyOjFqVll1bUh0UnVDSWViTW5CNWJNX2c7Mjk2MToxalZZdW1IdFJ1Q0llYk1uQjViTV9nOzA7","took":8,"timed_out":false,"_shards":{"total":5,"successful":5,"failed":0},"hits":{"total":748,"max_score":2.942896,"hits":[{"_index":"appstore","_type":"mobozi","_id":"mahjongshanghaihtml5games","_score":2.942896, "_source" : {"_id":"mahjongshanghaihtml5games","appCategory":"Games","appFullDescription":"-** This game is optimized for use on mobile devices **Mahjong Shanghai is a cool mahjong game created with HTML5.Â  Your goal is to eliminate all the mahjong tiles by selecting two tiles with the same picture.Â  However, the tile cannot be covered by other tiles, and the horizontal sides cannot be blocked by other tiles. Â  The game seems to run flawlessly on mobile touch devices.","appId":"mahjongshanghai","appImages":["http://html5games.com/wp-content/uploads/2011/01/mahjongshanghai-150x150.png"],"appLanguage":"en","appRatings":4.75,"appSupportPlatform":["all"],"appTitle":"Mahjong Shanghai","appUpdateUrl":"http://html5games.com/2011/01/mahjongshanghai/","appUrl":"http://m.gamesgames.com/game/html5/mahjong-shanghai/index.html","crawledSite":"html5games","isTwitterEnabled":"false"}},{"_index":"appstore","_type":"mobozi","_id":"memory-3d-iphone-gamehtml5games","_score":2.942896, "_source" : {"_id":"memory-3d-iphone-gamehtml5games","appCategory":"Games","appFullDescription":"Quick Note: you need an iPhone or iPod touch to play this game.. it will NOT work on a computerMemory 3D is an HTML5 puzzle-matching game.Â  The game board is a 3D box with 24 different panels.Â  Clicking a panel reveals a college sports logo, which will remain visible until you select another panel.Â  Your goal is to find and match each pair of logos- unless you have a good memory, itâ€™s not easy!Â  You can rotate the box using your finger.Author: Bruno Garcia","appId":"memory-3d-iphone-game","appImages":["http://html5games.com/wp-content/uploads/2010/06/memory3d-150x150.png"],"appLanguage":"en","appRatings":3.27,"appSupportPlatform":["all"],"appTitle":"Memory 3D","appUpdateUrl":"http://html5games.com/2010/06/memory-3d-iphone-game/","appUrl":"http://aduros.emufarmers.com/memory3d/","crawledSite":"html5games","isTwitterEnabled":"false"}},{"_index":"appstore","_type":"mobozi","_id":"4d578828bfdce766930001b7openappmkt","_score":2.942896, "_source" : {"_id":"4d578828bfdce766930001b7openappmkt","appCategory":"Games","appDeveloper":{"devName":"jailbr0kenize"},"appFullDescription":"A puzzle for anyone who celebrates christmas!","appId":"4d578828bfdce766930001b7","appImages":["http://static.openappmkt.com/dev_apps/4d55fdb8d445855c01000054/4d578828bfdce766930001b7_10725_48x48.png","http://s3.amazonaws.com/openapp/dev_apps/4d55fdb8d445855c01000054/1297582124925/image.png"],"appLanguage":"en","appPrice":"FREE","appRatings":5,"appSupportPlatform":["iOS","all"],"appTitle":"christmaspicspuzzle","appUpdateUrl":"http://www.openappmkt.com/app/4d578828bfdce766930001b7/christmaspicspuzzle","appUrl":"http://christmaspicspuzzle.iapps4free.com/?app_id=4d578828bfdce766930001b7&uid=4&purchased=1371452787&accessed=1371452787&sig=fe6a47549271d8adba31fc05e0c93d59","crawledSite":"openappmkt","isTwitterEnabled":"true"}},{"_index":"appstore","_type":"mobozi","_id":"4e231a4e362b790001000348openappmkt","_score":2.942896, "_source" : {"_id":"4e231a4e362b790001000348openappmkt","appCategory":"Games","appDeveloper":{"devName":"boobah"},"appFullDescription":"Free HTML5 Games","appId":"4e231a4e362b790001000348","appImages":["http://static.openappmkt.com/dev_apps/4e230efb362b790001000318/4e231a4e362b790001000348_55155_48x48.png"],"appLanguage":"en","appPrice":"FREE","appRatings":3.5,"appSupportPlatform":["Android","iOS","all"],"appTitle":"HTML5 Games","appUpdateUrl":"http://www.openappmkt.com/app/4e231a4e362b790001000348/HTML5%20Games","appUrl":"http://html5games.com/category/iphoneipadmobile/?app_id=4e231a4e362b790001000348&uid=4&purchased=1371452687&accessed=1371452687&sig=e4e41786e2c5d2a88760ee6b5771be7e","crawledSite":"openappmkt","isTwitterEnabled":"false"}},{"_index":"appstore","_type":"mobozi","_id":"4ed5bfc5ca61e000010016d8openappmkt","_score":2.942896, "_source" : {"_id":"4ed5bfc5ca61e000010016d8openappmkt","appCategory":"Games","appDeveloper":{"devName":"idestroy"},"appFullDescription":"A website to download cracked apps. You will need Installous, ifile, and safari download manager to make this work, but sometimes this works without all of these.","appId":"4ed5bfc5ca61e000010016d8","appImages":["http://static.openappmkt.com/dev_apps/4d6b0fbdee0dd81c4f000218/4ed5bfc5ca61e000010016d8_92629_48x48.png"],"appKeywords":"free apps, free iphone apps, iTouch, itunes, ipod touch, downloads, angry birds, appstore, app store, grand theft auto","appLanguage":"en","appPrice":"FREE","appRatings":3.5,"appSupportPlatform":["iOS","all"],"appTitle":"iPA God","appUpdateUrl":"http://www.openappmkt.com/app/4ed5bfc5ca61e000010016d8/iPA%20God","appUrl":"http://m.freemyapps.com/share/url/cadc407d?app_id=4ed5bfc5ca61e000010016d8&uid=4&purchased=1371452593&accessed=1371452593&sig=4220159af6b6cd70bd841fc3fb063a11","crawledSite":"openappmkt","isTwitterEnabled":"true"}},{"_index":"appstore","_type":"mobozi","_id":"4ee94782067f620001000e3bopenappmkt","_score":2.942896, "_source" : {"_id":"4ee94782067f620001000e3bopenappmkt","appCategory":"Games","appDeveloper":{"devName":"ipod helper"},"appFullDescription":"its Addicting games It should work now and if it doesnt work try resting your device","appId":"4ee94782067f620001000e3b","appImages":["http://static.openappmkt.com/dev_apps/4ee9403a75e91500010000b6/4ee94782067f620001000e3b_88688_48x48.png"],"appLanguage":"en","appPrice":"FREE","appRatings":4,"appSupportPlatform":["Android","iOS","all"],"appTitle":"Fun Games","appUpdateUrl":"http://www.openappmkt.com/app/4ee94782067f620001000e3b/Fun%20Games","appUrl":"http://addictinggames.com?app_id=4ee94782067f620001000e3b&uid=4&purchased=1371452586&accessed=1371452586&sig=e8f01a7861cb3f38f4fdc83472bf7a4d","crawledSite":"openappmkt","isTwitterEnabled":"true"}}]}}';
var obj = JSON.parse(dummyData);

$('#frmSearch').submit(function() {
	getResults($('#searchKeyword').val());
	$searchKeyword = $('#searchKeyword').val();
    //hide keyboard
    $('#searchKeyword').blur();
	$('#pageHome').hide();   
	$('#pageResults').show();
	$('#secondSearchKeyword').val($searchKeyword);
    return false;
});

$('#frmSecondSearch').submit(function() {
	getResults($('#secondSearchKeyword').val());
	//hide keyboard
    $('#secondSearchKeyword').blur();
    return false;
});

function getResults(searchKeyword){
					dust.render("scrollSearchResult", obj, function(err, out) {
				            	//console.log("out: " + out);
				            	//console.log("err: " + err);
				            	$("#searchResults").html(out);
				            	//first results stretch to bottom of screen
								$('.results-container').css('height', pageHeight);
								//remove .fill when results are returned
								$('.fill').hide();
				            	//hide the header if results are served
				            	$('header').hide();
				            	window.scrollTo(1, 0);
				        });
					ajaxOK = true;
}

function showMoreResults(){
	$('.spinner-container').show();
	dust.render("scrollSearchResult", obj, function(err, out) {	            	
    	$("#searchResults").append(out);
    });
	ajaxOK = true;
	$('.spinner-container').hide();
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
			        	$('#frmLogin').blur();
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
	  $('#pageLogin').hide();   
	  $('#pageHome').show();
	  window.scrollTo(1, 0);   
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

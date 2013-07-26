// scroll away address bar
MBP.hideUrlBarOnLoad();
MBP.startupImage();
var boolScroll = true;

function showSearch(){

    if (boolScroll) {
		//implement search view when search is tapped
		//setTimeout(function(){window.scrollTo(0,63)},100);
		setTimeout(function(){document.getElementById('focusSearchPrompt').scrollIntoView();},100);
		
		boolScroll = false;
	}
	//hide the carot
	$('.search-box').css('background', '#fff') 
	//hide placeholder text
	$('.search-box').prop('placeholder', '') 
	//add the x button
	$('.search-box-container').append('<div class="x-btn"></div>')
	//add functionality to x button
	$(document).on('tap', '.x-btn', function(e){
		e.preventDefault();
		//this will hide the keyboard
		// $('.search-box').blur()
		//clear the form
		$('.search-box').val('')
	})
}

$('.search-box') .focus(function(){
	showSearch()
}) 

function hideSearch(){
//return to normal when search is closed
$('header').animate({
	height: '63px',
	background: '#fff',
}, 250, 'ease-in')
var carotImg="../img/carot.png'"
$('.search-box').css('background', 'url('+ carotImg +') no-repeat') 
$('.x-btn').hide(function() {
})
}

function barTop(){
	$('.search-prompt').css('top', '0')
}

$('#secondSearchKeyword') .focus(function(){
	barTop() 
}) 
// $('.search-box') .blur(function(){
// 	hideSearch()
// }) 


//make fill stretch to botoom
$('.fill').css('height', pageHeight - 17)





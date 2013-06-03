// scroll away address bar
MBP.hideUrlBarOnLoad();
MBP.startupImage();

function showSearch(){
	//implement search view when search is tapped
	$('header').animate({
		//scroll the search field up
		height: '20px',
		//hide the excess
		background: '#231f20',
	}, 350, 'ease-out')
	//hide the carot
	$('.search-box').css('background', '#fff') 
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
}, 350, 'ease-in')
var carotImg="../img/carot.png'"
$('.search-box').css('background', 'url('+ carotImg +') no-repeat') 
$('.x-btn').hide(function() {
})
}

// $('.search-box') .blur(function(){
// 	hideSearch()
// }) 


//make fill stretch to botoom
$('.fill').css('height', pageHeight - 80)





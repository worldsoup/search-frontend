// scroll away address bar
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});


$('#search-box') .focus(function(){
	// $('.search-prompt') .hide()
	// $('header') .hide()
	$('header').animate({
		height: '20px',
		background: '#231f20',
	}, 350, 'ease-out')
	$('#search-box').css('background', '#fff') 
	$('.search-box-container').append('<div class="x-btn"></div>')

}) 

// $('#search-box') .focus(function(){
// 	// $('.search-prompt') .hide()
// 	// $('header') .hide()
// 	window.scrollTo(0, 3)
// 	setTimeout(function(){
// 		$('header').animate({
// 			height: '0px',
// 		}, 400, 'ease-out')
// 	},30)
// }) 
$('#search-box') .blur(function(){
	// $('.search-prompt') .hide()
	// $('header') .hide()
	$('header').animate({
		height: '63px',
		background: '#fff',
	}, 350, 'ease-in')
	var carotImg="../img/carot.png'"
	$('#search-box').css('background', 'url('+ carotImg +') no-repeat') 
	$('.x-btn').hide()
}) 


// $('#search-box') .blur(function(){
// 	$('.search-prompt') .show() 
// 	$('header') .show()  
// })   

$(function(){ 

	// homepage, section 'Shop smarter' [+] buttons animation
	var $expandBtn = $('.showP');
	var $collapseBtn = $('.hideP');

	$($expandBtn).on('mouseover',  function(event) {
		event.preventDefault();
		$(this).hide().next('p').slideToggle(300);
		$(this).siblings('div').animate({ 
			marginTop: '20px' 
		}, 300);
	});

	$($collapseBtn).on('click',  function(event) {
		event.preventDefault();
		$(this).parent('p').slideToggle(300, function(){
			$(this).siblings('a').show(300);
			$(this).siblings('div').animate({ 
			marginTop: '50px' 
		}, 300);
		});
	});

});
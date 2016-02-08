$(function(){ 
	//jQuery code here 
	var $expandBtn = $('.showP');
	var $collapseBtn = $('.hideP');

	$($expandBtn).on('mouseover',  function(event) {
		event.preventDefault();
		/* Act on the event */
		// console.log('abc');
		// $(this).toggleClass('hide').next('p').toggle(300);
		$(this).hide().next('p').slideToggle(300);
		// $(this).fadeOut().next('p').slideToggle(300);
		$(this).siblings('div').animate({ 
			marginTop: '20px' 
		}, 300);
	});

	$($collapseBtn).on('click',  function(event) {
		event.preventDefault();
		/* Act on the event */
		// console.log('abc');
		// $(this).parent('p').toggleClass('hide').siblings('a').toggleClass('hide');
		// $(this).parent('p').toggle(300).siblings('a').toggleClass('hide');
		$(this).parent('p').slideToggle(300, function(){
			$(this).siblings('a').show(300);
			$(this).siblings('div').animate({ 
			marginTop: '50px' 
		}, 300);
		});
	});
});
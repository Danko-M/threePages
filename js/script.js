/* 
Author: Danko Milutinovic
Desctiption: script for www.stylekey.com
Contact:  
        http://danko-m.github.io/
        dankomilutinovic@gmail.com 
        skype: danko.milutinovic
        https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778         
*/

$(function(){ 

	// homepage, section 'Shop smarter' [+] buttons animation
	var $expandBtn = $('.showP');
	var $collapseBtn = $('.hideP');
	var $box = $('.section-03').find('.col-sm-6');

	// console.log(window.innerWidth);
	if(window.innerWidth >= 992) {

		$box.on('mouseenter',  function(event) {
			$(this).find($expandBtn).hide();
			$(this).find('p').slideToggle(300);
			$(this).find('div').animate({ 
				marginTop: '20px' 
			}, 300);
		}); 

		$box.on('mouseleave',  function(event) {
			$(this).find($expandBtn).show(300);
			$(this).find('p').slideToggle(300);
			$(this).find('div').animate({ 
				marginTop: '50px' 
			}, 300);
		}); 
		
	}

	// Uber like menu
	var iScrollPos = 0;
	var $menu = $('.navbar-fixed-top');

	$(window).scroll(function () {

	    var iCurScrollPos = $(this).scrollTop();
	    if (iCurScrollPos > iScrollPos) {
	        $menu.addClass('nav-hide');
	    } else {
	        $menu.removeClass('nav-hide');
	    }
	    iScrollPos = iCurScrollPos;
	});

	// Uber like menu opt no.2
	/*	$(window).scroll(function () {

		    var iCurScrollPos = $(this).scrollTop();
		    if (iCurScrollPos > iScrollPos) {
	        $menu.animate({ 
						top: '-81px' 
					}, 300);					
		    } else {
	        $menu.animate({ 
						top: '0px' 
					}, 300);					 
		    }
		    iScrollPos = iCurScrollPos;
		});
	*/
	
});
$(document).ready(function($) {
	$('.search-popup-open').click(function() {
		$('.search-popup-fade').fadeIn();
		return false;
	});	
	
	$('.search-popup-close').click(function() {
		$(this).parents('.search-popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.search-popup-fade').fadeOut();
		}
	});
	
	$('.search-popup-fade').click(function(e) {
		if ($(e.target).closest('.search-popup').length == 0) {
			$(this).fadeOut();					
		}
	});
	$('.mobile-popup-open').click(function() {
		$('.mobile-popup-menu').fadeIn();
		return false;
	});	
	$('.search-popup-close').click(function() {
		$(this).parents('.mobile-popup-menu').fadeOut();
		return false;
	});	
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.mobile-popup-menu').fadeOut();
		}
	});	
});

$( document ).ready(function() {
	var menu = $('.nav-mnu'); 
	var lines = $('.switch');
	var header = $('.bcg_head');
	var heightMenu = header.height();
	var widthMenu = header.width();

	console.log(header.width());

	if(header.width() < 1200 ) {
		menu.height(heightMenu);
		menu.width(widthMenu);
	}

	$('#menu_switcher').click(function(){
		if(menu.css("opacity") == "1") {
			menu.css({
				'opacity':'0',
				'right':'-100%'
			});	
			lines.removeClass('sw_closed');
		}
		else {
			menu.css({
				'opacity':'1',
				'right':'0'
			});
			lines.addClass('sw_closed');
		}
	});
});
jQuery(document).ready(function($){
	
	var $window = $(window),
        $menu = $('div.menu');
	
	function menuSize() {
		var width = $window.width();
		if ( width < 824 ) {
			return $menu.addClass('nav-mobile');
		}
		$menu.removeClass('nav-mobile');
	}
	
	$window
        .resize(menuSize)
        .trigger('menuSize');
		
	menuSize();
	
	
	var width = $(window).width();
	
	if (width > 1000) {
		var colWidth = 240;
	} else if ((width > 961) && (width < 1000)) {
		var colWidth = 232;
	} else if ((width > 930) && (width < 961)) {
		var colWidth = 226;
	} else if ((width > 780) && (width < 900)) {
		var colWidth = 252;
	} else if ((width > 730) && (width < 770)) {
		var colWidth = 244;
	} else if ((width > 700) && (width < 721)) {
		var colWidth = 228;
	} else if ((width > 601) && (width < 641)) {
		var colWidth = 305;
	} else if ((width > 577) && (width < 601)) {
		var colWidth = 284;
	} else if ((width > 500) && (width < 577)) {
		var colWidth = 273;
	} else if ((width > 400) && (width < 481)) {
		var colWidth = 226;
	} else if ((width > 321) && (width < 361)) {
		var colWidth = 320;
	} else if ((width > 290) && (width < 321)) {
		var colWidth = 290;
	} else if ((width > 0) && (width < 241)) {
		var colWidth = 290;
	}
	

	var $container = $('#grid-wrap').masonry({
  		  itemSelector: '.grid-box',
		  columnWidth: colWidth,
	  });
	// layout Masonry again after all images have loaded
	$container.imagesLoaded( function() {
	  $container.masonry({
  		  itemSelector: '.grid-box',
		  columnWidth: colWidth,
	  });
	});
	
	$(window).resize(function() {
	  var width = $(window).width();
	  
		if (width > 1000) {
			var colWidth = 240;
		} else if ((width > 961) && (width < 1000)) {
			var colWidth = 232;
		} else if ((width > 930) && (width < 961)) {
			var colWidth = 226;
		} else if ((width > 780) && (width < 900)) {
			var colWidth = 252;
		} else if ((width > 730) && (width < 770)) {
			var colWidth = 244;
		} else if ((width > 700) && (width < 721)) {
			var colWidth = 228;
		} else if ((width > 601) && (width < 641)) {
			var colWidth = 305;
		} else if ((width > 577) && (width < 601)) {
			var colWidth = 284;
		} else if ((width > 500) && (width < 577)) {
			var colWidth = 273;
		} else if ((width > 400) && (width < 481)) {
			var colWidth = 226;
		} else if ((width > 321) && (width < 361)) {
			var colWidth = 320;
		} else if ((width > 290) && (width < 321)) {
			var colWidth = 290;
		} else if ((width > 0) && (width < 241)) {
			var colWidth = 290;
		}
	
	  $container.masonry({
  		  itemSelector: '.grid-box',
		  columnWidth: colWidth,
	  });
	});
	
	/* toggle search box */
	$("#search-icon").on("click", function(){
		$("#search-box-wrap").slideToggle();
	});
	
	$("#close-x").on("click", function(){
		$("#search-box-wrap").slideUp();
	});

	/* prepend menu icon */
	$('div.menu').prepend('<div id="menu-icon">Menu</div>');
	
	/* toggle nav */
	$("#menu-icon").on("click", function(){
		$("div.menu > ul").slideToggle();
		$(this).toggleClass("active");
	});
	

});
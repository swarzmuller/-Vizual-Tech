		$(function(){
  
		  var smallBP = 768; // should match the small breakpoint in CSS
		  var $hasSub = $( '.main-navigation > div > ul > li:has(ul)' );
		  var $subHasSub = $( '.main-navigation .sub-menu li:has(ul)' );
		  var isMobile = false;
		  if ($(window).width() <= smallBP) {
		    isMobile = true;
		  }
		  
		  // Display submenus on hover of parent menu item
		  $hasSub.hover(function() {
		    var width = $(window).width();
		    if (width > smallBP) {
		      $('> ul',this).stop().slideToggle( 200 );
		    };
		  });  
		  
		  // Assign submenu items with further submenus a unique class
		  $subHasSub.children( 'a' ).addClass( 'sub-has-sub' );
		  // Display the sub-submenu on hover
		  $subHasSub.hover(function() {
		    var width = $(window).width();
		    if (width > smallBP) {
		      $('ul',this).stop().slideToggle( 200 );
		    };
		  });  
		  
		  // For narrow screens, display submenu on click of parent item
		  $hasSub.children('a').click(function(event) {
		    var width = $(window).width();
		    if (width < smallBP) {
		      event.preventDefault();
		      $(this).parent().children('ul').stop().slideToggle( 200 );
		    };
		    $(this).toggleClass( 'open-menu' );
		  });  
		  
		  $( '.menu-toggle' ).click(function() {
		    $('.main-navigation ul').first().stop().slideToggle( 300 );
		  });

		    // Reset visibility on window resise (to prevent menus from sticking open or closed
		  $(window).resize(function() {
		    var width = $(window).width();
		    if (width > smallBP) {
		      $( '.main-navigation > div > ul').show();
		      $( '.menu-toggle, .main-navigation ul ul' ).hide();
		    } else {
		      $( '.main-navigation > div > ul').hide();
		      $( '.menu-toggle' ).show();
		    };
		  });
		  
		});
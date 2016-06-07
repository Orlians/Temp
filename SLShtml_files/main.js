$( document ).ready(function() {

	// var $selected = $('#langselector li.active');
	// var $parent = $('#langselector ul');
	// $selected.remove();
	// $parent.prepend($selected);


	// $('#langselector ul').hover(
		// function()
		// {
			// $('#langselector li').show();
		// },
		// function()
		// {
			// $('#langselector li a').parent().hide();
		// }
	// );
	 
		var bindingsIniPushHeight;
		var fixgeometry = function() {
			
			var headHeight = $(".head").outerHeight( true );
			var footerHeight = $(".footer").outerHeight( true );
			var bindingsHeight =  $(".articleBindings").outerHeight( true );			
			var articleHeight = $(".article .content").outerHeight( true );
			
			if(bindingsIniPushHeight == undefined) bindingsIniPushHeight = $(".articleBindings #bindingsPush").outerHeight( true );
		
			var delta = $(window).height() - headHeight - footerHeight- bindingsHeight - articleHeight;
			var bindingsPadding=0;
			
			$(".articleBindings #bindingsPush").height(delta + bindingsIniPushHeight);
			
			
			// contentWidth = 1200;
			// var windowWidth =  $(window).width()-20;
			
			// if(windowWidth<1200)
					// $('body').css('zoom', windowWidth / contentWidth);
			// else
					// $('body').css('zoom', 1);
							
		  }; /* fixgeometry */

		  $(document).ready(function() {
			$(window).bind("orientationchange resize pageshow ", fixgeometry);
		  });	  
		 
})
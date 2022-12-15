(function($){
$(".navbar-burger").on("click" , function(){
	$("nav.nav").toggle();
});
$(window).resize(function(){
	if (window.innerWidth >=920) {
		$("nav.nav").css('display'  , 'flex');
	}else{
		$("nav.nav").css('display'  , 'none');
	}
})
})(jQuery);
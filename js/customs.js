/* write script to toggle class on scroll */
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
$('.logo').addClass("sticky");
}
else{
$('header').removeClass("sticky")
$('.logo').removeClass("sticky")
}
});


/* og-expander */
$('body').click(function(evt){
if(evt.target.class== "og-expander")
return;
// For descendants of menu_content being clicked, remove this
// check if you do not want to put constraint on descendants.
if($(evt.target).closest('.og-expander').length)
return;
$(".og-close").trigger("click");
});
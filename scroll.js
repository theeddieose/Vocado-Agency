var h = $(window).height();
var x = "";

function height(){
    if (h <= 320) {
        x = 160;
    } else if (h <= 360){
        x = 380;
    } else {
        x = 200;
    }
};



$(window).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() >= x/2);
	$('.action-button').toggleClass('btn-scrolled', $(this).scrollTop() >= x/2);
});

height();
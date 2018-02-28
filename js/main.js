$(document).ready(function(){
    // Mobile Navigation
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-window-close');
        $('.nav-links-mobile').toggleClass('expanded');
    });

    // Slick Slider
    $('.testimonial-wrapper').slick({
        adaptiveHeight: true,
        dots: true
    });
});

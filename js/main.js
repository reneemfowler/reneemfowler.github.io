$(document).ready(function(){
    // Slick Slider
    $('.testimonial-wrapper').slick({
        dots: true
    });

    // Mobile Navigation
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-window-close');
        $('.nav-links-mobile').toggleClass('expanded');
    });
});

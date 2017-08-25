$(document).ready(function() {

    $(".wrapper").hide();
    $(".loader").css("zoom","150%").fadeOut(5000, function() {
        $(".wrapper").fadeIn(1000);
    });

    $('.gallery').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        centerMode: true,
    });
    $('#fullpage').fullpage({
        menu: '.menu',
        anchors:['about', 'services', 'tech', 'works', 'contacts'],
        navigation: true,
        navigationPosition: 'left',
        keyboardScrolling: true,
        scrollHorizontally: true,
        fadingEffect: true,
        verticalCentered: true,
        css3: true,
        scrollingSpeed: 500,
        fitToSection: false
    });

    $(".share-button").click(function(){
       $(".share-block").toggleClass("hide");
       $(".share-button").children("i").toggleClass("icon-share icon-close");
    });


    $(".menu-toggle").click(function(){
        $(".menu").show();
    });
    $(".close-menu").click(function(){
       $(".menu").hide();
    });
    $(".nav__link").click(function(){
        if($(window).width() < 900){
            $(".menu").hide();
        }

    });

    $(".modal").fadeOut();
    $(".view-gallery").click(function(){
        $(window).trigger('resize');
        $(".modal").fadeIn(1000);
    });
    $(".close-modal").click(function(){
        $(".modal").fadeOut();
    });
});
$(document).ready(function() {


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
        scrollingSpeed: 500
    });
    $(".wrapper").fadeOut();
    $(".loader").css("zoom","150%").fadeOut(5000, function() {
        $(".wrapper").fadeIn(1000);
    });

});
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
        scrollingSpeed: 500,
        fitToSection: false
    });
    $(".wrapper").fadeOut();
    $(".loader").css("zoom","150%").fadeOut(5000, function() {
        $(".wrapper").fadeIn(1000);
    });

    $(".share-button").click(function(){
       $(".share-block").toggleClass("hide");
       $(".share-button").children("i").toggleClass("icon-share icon-close");
    });


});
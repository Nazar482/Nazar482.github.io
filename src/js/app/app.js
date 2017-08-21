$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '.menu',
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        navigation: true,
        navigationPosition: 'left',
        keyboardScrolling: true,
        scrollHorizontally: true,
        fadingEffect: true,
        verticalCentered: true,
        css3: true,
        scrollingSpeed: 500,
    });


});
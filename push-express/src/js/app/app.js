$(document).ready(function() {


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

    $(".button-submit").click(function(){
        $(".form__success").fadeIn(1000).delay(3000).fadeOut(1000);
        $(".section__main-content").fadeOut().delay(4500).fadeIn(1000);
    })


});

// Cache selectors

var lastId,
    sideMenu = $("#side-menu"),
    sideMenuHeight = 200;
    // All list items
    menuItems = sideMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-sideMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+sideMenuHeight + 60;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#"+id+"']").parent().addClass("active");
    }
});
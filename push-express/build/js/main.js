$(document).ready(function(){$(".loader").css("zoom","150%").fadeOut(5e3,function(){$(".wrapper").fadeIn(1e3)}),$(".share-button").click(function(){$(".share-block").toggleClass("hide"),$(".share-button").children("i").toggleClass("icon-share icon-close")}),$(".menu-toggle").click(function(){$(".menu").show()}),$(".close-menu").click(function(){$(".menu").hide()}),$(".nav__link").click(function(){$(window).width()<900&&$(".menu").hide()}),$(".modal").fadeOut(),$(".view-gallery").click(function(){$(window).trigger("resize"),$(".modal").fadeIn(1e3)}),$(".close-modal").click(function(){$(".modal").fadeOut()}),$(".button-submit").click(function(){$(".form-sent").fadeIn(1e3).delay(3e3).fadeOut(1e3),$(".section__main-content").fadeOut().delay(4500).fadeIn(1e3)})});var lastId,sideMenu=$("#side-menu"),sideMenuHeight=200;menuItems=sideMenu.find("a"),scrollItems=menuItems.map(function(){var e=$($(this).attr("href"));if(e.length)return e}),menuItems.click(function(e){var t=$(this).attr("href"),n="#"===t?0:$(t).offset().top-sideMenuHeight+1;$("html, body").stop().animate({scrollTop:n},300),e.preventDefault()}),$(window).scroll(function(){var e=$(this).scrollTop()+sideMenuHeight+60,t=scrollItems.map(function(){if($(this).offset().top<e)return this}),n=(t=t[t.length-1])&&t.length?t[0].id:"";lastId!==n&&(lastId=n,menuItems.parent().removeClass("active").end().filter("[href='#"+n+"']").parent().addClass("active"))}),$(".carousel").carousel({interval:2e3});
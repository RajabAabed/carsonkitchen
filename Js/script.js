$(function () {

    $('.loading').fadeOut();
    /*loading*/

    new WOW().init();
    /*wow Js*/

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    /*carousel*/


    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 100) {
            $('header').addClass('scroll');
            $('.cl').css("color", "#343a40");
        } else {
            $('header').removeClass('scroll');
            $('.cl').css("color", "#fff");
        }
    });
    /*header fixd*/



})

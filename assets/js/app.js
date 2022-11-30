
$(function() {
    // Change min-width ul child equal li parent width
    $('.mainmenu ul li').each(function () {
        $(this).find('ul').css("min-width", $(this).outerWidth(true));
    });

    $(".danhgia-movie-slider").owlCarousel({
        autoplay: false,
        loop: true,
        margin: 20,
        touchDrag: true,
        mouseDrag: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            600: {
                items: 1
            },
            750: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
})

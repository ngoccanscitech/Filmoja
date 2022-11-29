
$(function() {
    // Change min-width ul child equal li parent width
    $('.mainmenu ul li').each(function () {
        $(this).find('ul').css("min-width", $(this).outerWidth(true));
    });
})

jQuery(function ($) {
    $('.rarr').click(function () {
        $('.product_section').eq(0).animate({'margin-left' : '+=-100%'}, 1000);
    });
    $('.larr').click(function () {
        $('.product_section').eq(0).animate({'margin-left' : '+=100%'}, 1000);
    });
});
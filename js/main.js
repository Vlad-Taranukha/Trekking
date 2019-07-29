jQuery(function ($) {

    //mens products slider
    let men_section_number = $('.men_products .product_section').length;
    $('#men_sections_number').text(men_section_number);
    let men_counter = 1;


    $('.men_slider .rarr').click(function (event) {

            if (men_counter == men_section_number){
                event.preventDefault();
            }else{
                men_counter++;
                $('#men_current_section').text(men_counter);
                $('.men_products .product_section').eq(0).animate({'margin-left' : '+=-100%'}, 1000);
            }
    });
    
    $('.men_slider .larr').click(function (event) {
        if (men_counter == 1){
            event.preventDefault();
        }else{
            men_counter--;
            $('#men_current_section').text(men_counter);
            $('.men_products .product_section').eq(0).animate({'margin-left' : '+=100%'}, 1000);
        }
    });

    //women products slider
    let women_section_number = $('.women_products .product_section').length;
    $('#women_sections_number').text(women_section_number);
    let women_counter = 1;

    $('.women_slider .rarr').click(function (event) {
        if (women_counter == women_section_number){
            event.preventDefault();
        }else{
            women_counter++;
            $('#women_current_section').text(women_counter);
            $('.women_products .product_section').eq(0).animate({'margin-left' : '+=-100%'}, 1000);
        }

    });
    $('.women_slider .larr').click(function (event) {
        if (women_counter == 1){
            event.preventDefault();
        }else{
            women_counter--;
            $('#women_current_section').text(women_counter);
            $('.women_products .product_section').eq(0).animate({'margin-left' : '+=100%'}, 1000);
        }
    });
});
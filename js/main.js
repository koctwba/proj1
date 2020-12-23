$(function(){
    $('.close').click(function(){
        $('#top_popup img').fadeOut(500);
    })
    var slide;
    slide = setInterval(function(){
        $('.notice_list > li:nth-child(1)').animate({
            'margin-top':'-4rem'},800,function(){
                $('.slide_box .notice_list').append($('.notice_list > li:nth-child(1)'));
                $('.slide_box .notice_list > li:nth-child(3)').css({'margin-top':0});
            })
    },1200)
    $('.clinic_img').hover(function(){
       $(this).css({'transform':'scale(1.1)'})
    },function(){
       $(this).css({'transform':'scale(1)'})
    })
    $('.news img').hover(function(){
        $(this).css({'transform':'scale(1.1)'})
    },function(){
        $(this).css({'transform':'scale(1)'})
    })
    $('.nav_close').click(function(){
        $('#nav_pop').fadeOut(400);
    })
})//jq end
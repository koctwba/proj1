$(function(){
    $('.close').click(function(){
        $('#top_popup img').fadeOut(500);
    })
    $('.all_nav').click(function(){
        $('#nav_pop').fadeIn();
    })
    $(window).scroll(function(){
        if($(document).scrollTop() >= 800 && $(document).scrollTop
        () <= $('#footer').offset().top - 1000){
            $('#quickmenu').fadeIn(200)
        }else{$('#quickmenu').fadeOut(200)}
      })
    $('.home').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })
    $('.top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })

    var slide;
    slide = setInterval(function(){
        //BES .notice_list가 양쪽에 두개라서 오류가 보입니다
        // 코드를 복사해서 이름을 다르게 주고 쓰든지 each를 추가할 필요가 있습니다 
        $('.notice_list').each(function(){
        
            var this_notice = $(this);
            var find_first = this_notice.find('li:first-child')
             find_first.animate({'margin-top':'-2.5rem'},800,function(){
               this_notice.append(find_first);
               this_notice.find('li:last-child').css({'margin-top':0});   
              }) 
         })
        },2500) 
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
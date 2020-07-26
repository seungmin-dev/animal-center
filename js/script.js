$(document).ready(function () {
    
    var $gnb = $('.gnb'),
        $gnb_bot = $('.gnb-bot');
        $gnb_inner = $('.gnb-inner'),
        $gnb_menu = $('.gnb-menu'),
        $slide_wrap = $('.slide-wrap'),
        $slide_long = $('.slide-long'),
        $lost_img = $('.lost-img'),
        $info_box = $(".info-box"),
        $info_color = $('.info-color'),
        $familybox = $('.familybox'),
        $familysite = $('.familysite'),
        i = 0,
        q = 0;
    
    
    
   /* var i,a,b;*/
    
    
    //gnb interaction
    $gnb.mouseenter(function () {
        $gnb_bot.css('display', 'block');
        $(this).css('background-color', 'rgba(255,255,255,1)');
        $gnb_menu.css('display', 'block');
    });
    $gnb.mouseleave(function () {
        $gnb_bot.css('display', 'none');
        $(this).css('background-color' , 'rgba(255,255,255,0.4)');
        $gnb_menu.css('display', 'none');
    });
    /*$gnb_menu.mouseenter(function () {
        $(this).css('background-color', '#fff');
    });
    $gnb_menu.mouseleave(function () {
        $(this).css('background-color', 'rgba(255,255,255,0)');
    });*/
    
    //scroll menu
    
    var win_h = $(window).height();
    var win_w = $(window).width();

    $(window).scroll(function () {
        var scrollH = $(window).scrollTop();
        if(win_w < 1199) {
            $('.gnb-pop').css('display', 'none');
        } else if (1200 < win_w) {
            console.log(win_w);
            if (scrollH >= 300) {
                $gnb.stop().slideUp(300);
                $('.gnb-pop').stop().animate({'opacity' : '1', 'top' : '0px'}, 300);
            } else if (scrollH < 300) {
                $gnb.stop().slideDown(300);
                $('.gnb-pop').stop().animate({'opacity' : '0', 'top' : '-100px'}, 300);
            }
        }
    });
     
    //mobile menu
    
    $('.gnb-mo .menubtn').click(function() {
        $('.menupage-mo').animate({'left' : '0'}, 400);
    });
    $('.fa-times').click(function() {
        $('.menupage-mo').animate({'left' : '-100%'}, 400);
    });
    
    
    $('.menupage-mo>ul>li>a').click(function () {
        $('.gnb-menu-mo').slideUp();
        $(this).next().slideToggle();
    })
    
    //slide img
    
    var si;
    for (si = 1; si < 5; si++) {
        $('.slide').eq(si - 1).css('background-image', 'url(./img/slide' + si + '.jpg');
    }
    
    
    //slide Interval
    
   // $('.slide').eq(1).css('opacity', '0');
    var intv = setInterval(function () { replaceAni(); }, 4000);
    
    function fadeAni() {
        $('.slide').eq(0).fadeIn(500);
        $('.slide').eq(0).fadeOut(500, function () {
            $('.slide').eq(0).appendTo('.slide-long');
        });
        
        //$('.slide').eq(0).fadeIn(500);
    };
    
    function replaceAni() {
        //$('.slide').eq(1).fadeIn(300, function() {
            //$(this).animate({backgroundSize : '120% auto'}, 400);
            
       // });
        
        /*$('.slide').eq(1).animate({backgroundSize : '120% auto'}, 400);
        $('.slide').eq(0).appendTo('.slide-long', function() {
            $(this).css('background-size', '100% auto');
        });*/
        $('.slide').eq(2).addClass('slide-scale');
        $('.slide').eq(0).appendTo('.slide-long');
        $('.slide').eq(3).removeClass('slide-scale');
        
        /*$('.slide').eq(3).removeClass('slide-scale');*/
    }
    
    //magnify interaction
    
    $('.fa-search').click(function () {
        
        if (i == 0) {
            $('.search-box').animate({'top' : '0'}, 300);
            $gnb.animate({'top' : '60px'}, 300);
            $('.gnb-mo').animate({'top' : '60px'}, 300);
            i = 1;
            console.log(i);
        } else {
            $('.search-box').animate({'top' : '-60px'}, 300);
            $gnb.animate({'top' : '0px'}, 300);
            $('.gnb-mo').animate({'top' : '0px'}, 300);
            i = 0;
        }
    });
    
    
    //lost animals photos
    var b;
    for (b = 1; b < 10; b++) {
        $('.lost-img').eq(b - 1).css('background-image', 'url(./img/lost' + b + '.jpg');
    }
    
    
    //lost animals buttons

    var boxWd = parseInt($('.lost').width());
    var boxCnt = $('.lost').length;
    var boxMax = (boxWd * (boxCnt - 1) * -1);
    
    $('.right-btn').click(function() {
        $('.lost-long').not(':animated').animate({'margin-left': -1 * boxWd + 'px'}, 500, function() {
            $('.lost').eq(0).appendTo('.lost-long');
            $('.lost-long').delay(300).css('margin-left', '0px');
        });
    })
    
    $('.left-btn').click(function() {
        $('.lost-long').not(':animated').animate({'margin-left': boxWd + 'px'}, 500, function() {
            $('.lost').eq(8).prependTo('.lost-long');
            $('.lost-long').css('margin-left', '0px');
        });
    })
    
    // info-box hover interaction
    
    $info_box.mouseover(function () {
        $(this).find('.info-color').stop().animate({top : '0'}, 300);
    });
    $info_box.mouseleave(function () {
        $(this).find('.info-color').stop().animate({top : '100%'}, 300);
    });
    
    
    

    for (i = 1; i < 4; i++) {
        $info_box.eq(i - 1).css('background-image', 'url(./img/info' + i + '_1.jpg)');
    }

    
    //family site click interaction
    $familybox.click(function () {
        
        if (q == 0) {
            $familysite.animate({'top' : '-200%', 'z-index' : '0', 'opacity' : '1'}, 500);
            q = 1;
            
            
        } else {
            $familysite.animate({'top' : '0%', 'z-index' : '-10', 'opacity' : '0'}, 500);
            
            q = 0;
        }
    });
    
    
    
});
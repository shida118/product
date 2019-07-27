// JavaScript Document
$(function(){
	$('.zhao_right ul li').hover(function(){
		$(this).children('p').stop().slideDown().parents('li').siblings().find('p').stop().slideUp();
	})
	var a=$('.kk').index();
	
	//$('.zheng_left2>ul>li').hover(function(){
//		$(this).children('ul').stop(true,false).slideDown();
//		$(this).siblings('li').children('ul').stop(true,false).slideUp();
//		$(this).addClass('kk');
//		$(this).siblings('li').removeClass('kk');
//	},function(){
//		$(this).children('ul').stop(true,false).slideUp();
//		$(this).removeClass('kk');
//		})

	//$('.zheng_left2').mouseout(function(){
//		$('.zheng_left2>ul>li').eq(a).addClass('kk');
//		})
	
	$('.zheng_left2>ul>li').each(function(){
			$(this).attr('kg','0');
		})
	$('.zheng_left2>ul>li').click(function(){
		var kg=$(this).attr('kg');
		if(kg==0){
			$(this).children('ul').stop(true,false).slideDown();
			$(this).siblings('li').children('ul').stop(true,false).slideUp();
			$(this).addClass('kk');
			$(this).siblings('li').removeClass('kk');
			kg=1;
			$('.zheng_left2>ul>li').attr('kg','0');
			$(this).attr('kg','1');
			}
		else{
			$(this).children('ul').stop(true,false).slideUp();
 			$(this).removeClass('kk');
			kg=0;
			$('.zheng_left2>ul>li').attr('kg','0');
			$('.zheng_left2>ul>li').eq(a).addClass('kk');
			}
		
	})
	$("#back-to-top").click(function(){  
                $('body,html').animate({scrollTop:0},1000);  
                return false;  
            });
    $('.qk-1 ul li').click(function(){
		var oUl = $(this).find('ul')
		if(oUl.is(":hidden")) {
			$(this).find('ul').slideDown();
			$(this).siblings().find('ul').slideUp();
		}else {
			$(this).find('ul').slideUp();
		}
		
	})        
}) 
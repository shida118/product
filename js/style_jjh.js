// JavaScript Document
$(function(){
	$('.zhao_right ul li').hover(function(){
		$(this).children('p').stop().slideDown().parents('li').siblings().find('p').stop().slideUp();
	})
	


}) 
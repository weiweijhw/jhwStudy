		$(function(){
			// 点击顶部的登录，出现一个登录框
			$(".denglu").click(function(){
				// $(".bigboxB").css({"display":"block"});
				$(".bigbox").css({"margin":"0 auto","display":"block","position":"fixed","top":"20","left":"0","right":"0","bottom":"0","z-index":"3"});
				
			})
			$(".bigbox-close").click(function(){
				$(".bigbox").css("display","none");
			})
			// 动画
			$(window).scroll(function(){
				if($(window).scrollTop()>10){
					// alert(3)
					$(".nav").css({"position":"fixed","top":"0"});
				}
				if($(window).scrollTop()<10){
					$(".nav").css({"position":"relative"})
				}
				if($(window).scrollTop()>30){
					$(".banner div").animate({"left":"944px"});
				}
			})

			

		})
		



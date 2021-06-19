

//获取商品名称
$('.box-ul li').on('mouseenter',function(){
	var name = $(this).children().children().eq(1).text();
	$(this).children().eq(0).attr('href',`http://127.0.0.1/php/xiaomi/shopping.html?wupian=${name}`);
})



// http://127.0.0.1/php/xiaomi/list.html
		
//导航轮播图
		var swiper = new Swiper('.swiper-container-zhu', {
			loop: true,
			autoplay: {
				delay: 4000,
				// disableOnInteraction: false,
			},
			spaceBetween: 30,
			centeredSlides: true,
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		
		//秒杀轮播图
		var mySwiper = new Swiper ('.swiper-container-miaosha', {
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			autoplay: {
				delay: 4000,
				// disableOnInteraction: false,
			},
		  // 如果需要前进后退按钮
		  navigation: {
		    nextEl: '.swiper-button-xia',
		    prevEl: '.swiper-button-shang',
		  }
		})


		// 秒杀倒计时
		// var i = 0;
		// var date=new Date('2021/5/13 22:00:00');
		var allTime = [12, 14, 18, 20, 23];
		$('body').everyTime('1s', 'A', function() {
			var date = new Date();
			var nowHours = date.getHours();
			var dateOver = new Date(date.toLocaleDateString('zh-cn'));
			var shijian = getDiff(date, dateOver, nowHours);
			$('.jisq span:nth-of-type(1)').html(shijian.hours);
			$('.jisq span:nth-of-type(2)').html(shijian.minutes);
			$('.jisq span:nth-of-type(3)').html(shijian.seconds);
			$('.round').html(shijian.fTime + ':00场');
			if (shijian.yuxia > 0) {
				$('.jieshu').html('距离结束还有');
			} else {
				$('.jisq span').html('00');
				$('body').stopTime('A');
			}

		});

		// getDiff可以计算任意两个时间对象now和future距离的时间
		function getDiff(now, future, nowHours) {
			var fTime;
			var obj = {};
			for (var i = 0; i < allTime.length; i++) {
				if (nowHours < allTime[i]) {
					//目标时间点
					fTime = allTime[i];
					obj.fTime = fTime;
					break;
				}
			}
			if (fTime == undefined) {
				fTime = allTime[allTime.length - 1];
				obj.fTime = fTime;
				obj.yuxia = 0
				return obj;
			}
			var difference = future - now + fTime * 60 * 60 * 1000;
			// console.log(difference)
			difference = Math.ceil(difference / 1000);
			var day = parseInt(difference / (24 * 60 * 60));
			difference = difference - day * 24 * 60 * 60;
			var hours = Math.floor(difference / 3600);
			difference = difference - hours * 3600;
			var minutes = parseInt(difference / 60);
			var seconds = difference - minutes * 60;

			if (hours < 10) {
				hours = '0' + hours
			}
			if (minutes < 10) {
				minutes = '0' + minutes
			}
			if (seconds < 10) {
				seconds = '0' + seconds
			}

			obj.hours = hours;
			obj.minutes = minutes;
			obj.seconds = seconds;
			obj.yuxia = difference;
			return obj;
		}
		
$.ajax({
	url:'js/shuju.json',
	method:'get',
	success:function(data){
		// console.log(data);
		
		$('.ul5 li').hover(function(){
			$('.daohanglingjie').css('display','block')
			var str='';
			$.each(data,function(i,item){
				str=str+`
					<div>
						<img src="${item.img}" alt="">
						<span>${item.name}</span>
					</div>
				`;
			})
			$('.daohanglingjie').html(str);
		},function(){
			$('.daohanglingjie').css('display','none')
		})
	}
})

$('#banner').find('li').click(function(){
	location.href = 'shopping.html'
})
// console.log($('#banner').find('li'));
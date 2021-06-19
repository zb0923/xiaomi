// 获取url内的中文参数
function UrlSearch() {
	var name, value;
	var str = decodeURI(location.href); //取得解码后的地址栏
	var num = str.indexOf("?")
	str = str.substr(num + 1);

	var arr = str.split("&"); //各个参数放到数组里
	for (var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if (num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}
	}
}

var obj = new UrlSearch();
//获取物品名称
wupianname = obj.wupian;
// console.log(wupianname);

var img;

$.ajax({
	url: "js/shuju.json",
	success: function(data) {
		$.each(data, function(index, item) {
			if (item.name == wupianname) {
				$('.body-cont h2').html(`<h2>${item.name}</h2>`);
				$('.left').text('');
				$('.shopping-right h2 h2').text(`${item.name}`);
				// $('.shoujia').html(`${item.shoujia}元 <span>${item.dazheshoujia}元</span>`).next().eq(0).text(`总计：${item.shoujia}元`);
				$('.xqing').text(`${item.miaoshu}`);
				$('.price-right span:nth-of-type(2)').text(`预售价:${item.shoujia}`);
				$('.sj-price p:nth-child(1)').text(`${item.name}`);
				$('.sj-price p:nth-child(2)').text(`${item.shoujia}元`);
				$('.price-left span:nth-of-type(2)').text(`预售价:${item.shoujia}`)
				$('.shopping-left img').attr('src',`${item.img}`);
				img=item.img;
				// console.log($('#mainRight div:nth-of-type(5)'))
			}
		})
	}
})



//点击加入购物车
$('.jiaru').click(function() {
	//获取物品价格
	var shoujia = parseFloat($('.shoujia').text());
	//获取图片路径
	img=img;
	$.ajax({
		url: "php/buy.php",
		data: {
			"img": img,
			"wupian": wupianname,
			"shoujia": shoujia
		},
		success: function(data) {
			if (data == 1) {
				alert('加入购物车成功')
			} else {
				alert('加入失败')
			}
		}
	})
})



//获取商品名称
$('.buy-btn').click(function(){
	$(this).children().eq(0).attr('href',`http://127.0.0.1:8848/xiaomi-project/xiaomi-project/cart.html?wupian=${name}`);
	alert('加入购物车成功');
	// console.log($(this).children()[0].href)
	// console.log(name)
})
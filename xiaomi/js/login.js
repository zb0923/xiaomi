
// 页面一刷新/打开，就应该给用户名的文本框放上以前记住的用户名
var rememberusername = getCookie('rememberusername');
var user = document.querySelector("[name='username']")
if(rememberusername){
    user.value = rememberusername;
}
$('.loginForm').validate({
    rules:{
        username:'required',
        password:'required'
    },
    messages:{
        username:'用户名不能为空',
        password:'密码不能为空'
    },
    submitHandler:function(form){
        var loadindex = layer.load(1, {
            shade: [0.5,'#333'] //0.1透明度的白色背景
        });
        $('.submit').prop('disabled',true);
        $.ajax({
            url:'./php/login.php',
            data:$(form).serialize(),
            dataType:'json',
            method:'post',
            success:res=>{
                console.log(res);
                // 解构赋值
                var {meta:{status,msg}} = res;     
                           
                layer.close(loadindex)
                var msgindex = layer.msg(msg)
                if(status===0){
                    // 设置cookie
                    setCookie('username',$('[name="username"]').val())
                    if($("[name='remember']").prop('checked')){
                        setCookie('rememberusername',$('[name="username"]').val(),7*24*3600)
                    }
                    // 应该跳转
                    setTimeout(()=>{
                        layer.close(msgindex)
                        $('.submit').prop('disabled',false)
                        // var url = localStorage.getItem('url')
                        // if(!url){
                            location.href = 'index.html';
                        // }else{
                            // localStorage.removeItem('url')
                            // location.href = url
                        // }
                        
                    },2000)
                    
                }else{
                    $('.submit').prop('disabled',false)
                    return false;
                }
            }
        })
        return false;
    }
})













// 登录按钮
// $('.denglubtn').click(function() {
// 	var name = $('#name').val();
// 	var pwd = $('#pwd').val();
// 	$.ajax({
// 		url:"php/login.php",
// 		data:{
// 			"username":name,
// 			"password":pwd
// 		},
// 		success:function(data){
// 			if(data==1){
// 				alert('登录成功');
// 					//返回上一页
// 					location.href = 'index.html';
				
// 			}else{
// 				alert('登录失败，请重新输入')
// 			}
// 		}
// 	})
// })
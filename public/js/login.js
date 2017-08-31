define(['jquery'],function($){
	    $('#loginBtn').click(function () {
    $.ajax({
        type : 'post',
        url : '/api/login',
        data: $('#loginForm').serialize(),
        dataType : 'json',
        success : function (data) {
            //成功登陆
            if(data.code == 200){
                location.href = '/main/index';
            }else{
                alert('用户名和密码错误');
            }
        }
    });
    return false;
});
})
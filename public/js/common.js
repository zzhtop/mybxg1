define(['jquery','template','cookie'],function($,template) {
    // 控制左侧导航菜单的折叠展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    // 实现退出功能
    $('#logoutBtn').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function (data) {
                //退出成功
                if (data.code == 200) {
                    location.href = '/main/login';
                }
            }
        });
        return false;
    });

    // NProgress.start();

    // NProgress.done();
//验证是否登录
    var sessionId = $.cookie('PHPSESSID');
    if (!sessionId && location.pathname != '/main/login') {
        location.href = '/main/login';
    }
    ;
//获取用户登录信息，并填充页面
    var cookie = $.cookie('loginInfo');
    var loginInfo = cookie ? JSON.parse(cookie) : {};
    $('.profile img').attr('src', loginInfo.tc_avatar);
    $('.profile h4').html(loginInfo.tc_name);
    //var tpl='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>'
    //var html=template.render(tpl,loginInfo);
    //$('.profileId').html(html);

});





  

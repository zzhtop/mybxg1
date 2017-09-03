define(['jquery','template','util','datepicker','language','validate'], function ($,template,util) {
    util.setMenu('/teacher/list');
    //获取编辑讲师 的id
    var tcId=util.qs('tc_id');
    if(tcId){
        $.ajax({
            type:'get',
            url:'/api/teacher/edit',
            data:{tc_id:tcId},
            dataType:'json',
            success: function (data) {
                //渲染数据页面
                data.result.operate='讲师编辑';
                var html=template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
                //绑定添加的提交事件
                submitForm('/api/teacher/update')
            }

        });
    }else{
        //添加讲师
        var html=template('teacherTpl',{operate:'讲师添加',tc_gender:1});
        $('#teacherInfo').html(html);
        //绑定添加的提交事件
        submitForm('/api/teacher/add');
    }
    //根据id查询对应的讲师详细信息
    function submitForm(url){
        $('#formId').validate({
            sendForm:false,
            valid: function () {
                console.log(123);
            },
            description:{
                tc_name:{
                    required:'用户名不能为空',
                    valid:'√'
                },
                tc_pass:{
                    required:'密码不能为空',
                    pattern:'必须是6位数字',
                    valid:'√'
                },
                tc_join_date:{
                    required:'出生日期不能为空',
                    valid:'√'
                }
            }
        })
    //function submitForm(url) {
    //    $('#formBtn').click(function () {
    //
    //
    //        $.ajax({
    //            type: 'post',
    //            url: url,
    //            data: $('#formId').serialize(),
    //            dataType: 'json',
    //            success: function (data) {
    //                console.log(data);
    //                if (data.code == 200) {
    //                    location.href = '/teacher/list';
    //                }
    //            }
    //
    //        })
    //
    //    })
    }
    })


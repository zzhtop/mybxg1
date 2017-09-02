/**
 * Created by Administrator on 2017/8/31.
 */

define(['jquery','template','bootstrap'], function ($,template) {
    //console.log(111111111);
    //请求后台接口获取列表数据
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success: function (data) {
            //console.log(data)
            //渲染页面
            var html=template('teacherTpl',{list:data.result});

            $('#teacherInfo').html(html);
            //绑定预览的事件
            $('.preveiw').click(function () {
                //console.log(123);
                //通过接口获取数据
            var tcId=$(this).closest('td').attr('data-tcId');
                //console.log(tcId);
                $.ajax({
                    type:'get',
                    url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success: function (data) {
                        console.log(data)
                        var html=template('modalTpl',data.result);

                        $('#modalInfo').html(html);
                        $('#teacherModal').modal();
                    }

                })
            })

            $('.eod').click(function () {
                var td=$(this).closest('td');
                  var tcId=  td.attr('data-tcId');
                var tcStatus=td.attr('data-status');
                var that=this;//点击的按钮

                $.ajax({
                    type:'post',
                    url:'/api/teacher/handle',
                    data:{tc_id:tcId,tc_status:tcStatus},
                    dataType:'json',
                    success: function (data) {
                        td.attr('data-status',data.result.tc_status);
                        if(data.result.tc_status==0){
                            $(that).html('注 销');
                        }else{
                            $(that).html('启 用');
                        }
                    }

                })
            })
        }
    });

})
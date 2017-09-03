define(['jquery'], function ($) {
    //工具函数
    return {
        setMenu: function (path) {
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        qs: function (key) {
            //获取URL参数中指定 的参数值
            //例如(param是所有的参数)uname=list&age=12;
            var param=location.search.substring(1);//删除location得到的问号后面（删除参数的第一个问号）
            var result=null;
            if(param){
                var kvs=param.split('&');
                $.each(kvs, function (i,item) {
                    var kv=item.split('=');//得到的键值对
                    if(key==kv[0]){//得到的键值对，如果key和第一个参数相同，把对应的参数后面的数值给result
                        //找到对应参数
                        result=kv[1];
                        return false;//终止循环

                    }
                })
            }
            return result
        }
    }
})

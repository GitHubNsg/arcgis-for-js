(function () {
    InitEvent();
})();
function InitEvent() {
    $("#login").bind("click", function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username != "" && password != "") {
            var params = "";
            params = "username=" + username + "&password=" + password;
            $.ajax({
                type: "get",
                dataType: "json",
                url: "./handler/Users.ashx",
                data: params,
                async: false,//同步
                success: function (data, textStatus) {
                    if (data == 1) {
                        location.href = "map.html?username=" + username;//location.href实现客户端页面的跳转 
                    }
                    else {
                        //alert("验证用户不通过,请重新输入用户名或者密码");
                        promptdialog("提示信息", "验证用户不通过,请重新输入用户名或者密码");
                    }
                },
                error: function (e) {
                }
            });
        }
        else {
            //alert("用户名或者密码不能为空");
            promptdialog("提示信息", "用户名或者密码不能为空");
        }
    });
}
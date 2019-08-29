$(document).on('click','.btn',function(){
    var telephone = $('.telephone').val();
    var password = $('.password').val();
     ajax({
            path: `${location.orgin}/1907/0808/smartisan/login.php`,
            data: {
                telephone,
                password
            },
            successCB: ({ code, msg }) => {
                // {
                //   code: 0,
                //   msg: '登录失败',
                //   data: false
                // }

                if (code == 0) {
                    //alert(msg);
                    layer.msg('登陆失败')
                } else {
                    // 成功
                    
                    setCookie('login_user', telephone, 7);

                    layer.msg('登录成功')
                    location.href = 'smartisan1.html';
                }
            }
        })
})
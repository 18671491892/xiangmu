$(document).on('click','.btn2',function(){
    var username = $('.username').val()
    var telephone = $('.telephone').val();
    var password = $('.password').val();
    var pwd_ag = $('.repwd-ag').val();

    var reg_username =  /^[a-zA-Z_$][a-zA-Z0-9_$]{5,9}$/;///请输入由数字字母_$组成的长度6到10位不能以数字开头
    var tag_username = reg_username.test(username);
    
    var reg_phone = /^1\d{10}$/;///请输入常用的手机号
    var tag_phone = reg_phone.test(telephone);
   
    var reg_pwd = /^[0-9a-zA-Z]{6,12}$/;//请输入长度6到12位的数字和字母组成
    var tag_pwd = reg_pwd.test(password);

    var tag_check = $('.checkbox').is(':checked')
    if (tag_pwd == true && password == pwd_ag) {
        if (tag_phone) {
            if (tag_username) {
                if(tag_check){
                    $.ajax({
                        type: 'GET',
                        url: `//${location.hostname}/1907/0808/smartisan/register.php`,
                        data: {
                            username,
                            telephone,
                            password,
                        },
                        success: data => {
                            data = JSON.parse(data)

                            if (data.code == 0) {
                                layer.msg(data.msg);
                            }
                            if (data.code == 1) {
                                layer.msg(data.msg);
                                location.href='login.html';
                            }
                        }
                    })
                }else{
                    layer.msg('请阅读法律声明和隐私条款')
                }
               
            } else {
                layer.msg('请输入正确的用户名');
            }
        } else {
            layer.msg('请输入正确的手机号码');
        }
    } else {
        layer.msg('请输入正确的密码');
    }
})




// $(document).on('click','.copyright',function(){
//     location.href='login.html';
// })

///图标点击跳转//////////////////////
$(".person").click(function () {
    location.href = "register.html";
})
$(".cart").click(function () {
    location.href = "login.html";
})

//////////////////////////放大镜////////////////////////////////////////

///////////////////////////////////js.ajax//////////////////////////////////////////

function queryString(name) {
    var search = location.search;
    search = search.replace('?', '');
    var arr = search.split('&');

    var list = [];

    arr.forEach(item => {
        var [key, value] = item.split('=');
        list.push(
            {
                key,
                value
            }
        );
    });

    console.log(list);

    var obj = list.filter(item => item.key === name)[0];

    console.log(obj.value);

    return obj.value;
}


var goods_id = queryString('id');

$.ajax({
    type: 'GET',
    url: `//${location.hostname}/1907/0808/smartisan/goodsDeatils.php`,

    data: {
        goods_id
    },
    dataType: 'json',
    success: data => {


        //console.log(data.goods_id)
        var html = '';


        html +=
            `
          <div id="content" id=${data.goods_id}>
            <div class="content-center">
                <div class="imgbox">
                    <div class="small_box">
                        <span class="mask"></span>
                        <span class="float_layer"></span>
                        <img class="goods_imgs_small" src="./src/img/${data.goods_imgs_small}" alt="">
                    </div>
                    <div class="big_box">
                        <img class="goods_imgs_big" src="./src/img/${data.goods_imgs_small}" alt="">
                    </div>
                </div>
                <div class="detils">
                    <div class="one">
                        <h1 class="goods_name">${data.goods_name}</h1>
                        <h2 class="goods_desc">${data.goods_desc}</h2>
                    </div>
                    <div class="two">
                        <div class="left">
                            <span>促销活动</span>
                        </div>
                        <div class="right">
                            <span class="fir-span">领券</span>
                            <p class="fir-p">100 元${data.goods_name}直降券 <a href="">现在领取</a></p>
                            <span class="sec-span">领券</span>
                            <p class="sec-p">全场通用&nbsp;66&nbsp;元优惠券&nbsp;已抢完</p>
                        </div>
                    </div>
                    <div class="three">
                        <div class="left">
                            <span>颜色选择</span>
                        </div>
                        <div class="right">
                            <div class="box1">
                                <img src="./src/img/gray.gif" alt="">
                                <span>银色</span>
                            </div>
                            <div class="box2">
                                <img src="./src/img/deepgray.gif" alt="">
                                <span>枪灰色</span>
                            </div>
                        </div>
                    </div>
                    <div class="four">
                        <div class="left">
                            <span>版本选择</span>
                        </div>
                        <div class="right">
                            <div class="version">非开门版</div>
                        </div>
                    </div>
                    <div class="five">
                        <span>服务说明</span>
                        <span class="sec-span">*满99包邮</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="skill">
            <h1>技术规格</h1>
        </div>
        <div class="imgbox1">
            <img src="./src/img/5ed8000c7d854cdecc9cf0de8ac94979(1).jpg" alt="">
        </div>
        <div class="imgbox2">
            <img src="./src/img/5ed8000c7d854cdecc9cf0de8ac94979(2).jpg" alt="">
        </div>
        <div class="imgbox3">
            <img src="./src/img/5ed8000c7d854cdecc9cf0de8ac94979.jpg" alt="">
        </div>
        <div class="recommend">
            <h1>相关推荐</h1>
        </div>
        <div class="goods">
            <ul>
                <li>
                    <div class="small">
                        <div class="block">
                            限时秒杀
                        </div>
                        <div class="ph">
                            <img src="./src/img/phone.png" alt="">
                        </div>
                        <div class="text">
                            <h4>坚果&nbsp;Pro&nbsp;2S</h4>
                        </div>
                        <div class="text2">
                            <h6>双系统，无限屏</h6>
                        </div>
                        <div class="foot">
                            ￥1998.00
                        </div>
                    </div>
                </li>
                <li>
                    <div class="small">
                        <div class="block">
                            限时秒杀
                        </div>
                        <div class="ph">
                            <img src="./src/img/phone.png" alt="">
                        </div>
                        <div class="text">
                            <h4>坚果&nbsp;Pro&nbsp;2S</h4>
                        </div>
                        <div class="text2">
                            <h6>双系统，无限屏</h6>
                        </div>
                        <div class="foot">
                            ￥1998.00
                        </div>
                    </div>
                </li>
                <li>
                    <div class="small">
                        <div class="block">
                            限时秒杀
                        </div>
                        <div class="ph">
                            <img src="./src/img/phone.png" alt="">
                        </div>
                        <div class="text">
                            <h4>坚果&nbsp;Pro&nbsp;2S</h4>
                        </div>
                        <div class="text2">
                            <h6>双系统，无限屏</h6>
                        </div>
                        <div class="foot">
                            ￥1998.00
                        </div>
                    </div>
                </li>
            </ul>
        </div>


        <!-- tips ------------------------------------------------>
        <div class="tips">
            <div class="center">
                <div class="content">
                    <span>* 其他说明</span>
                    <ul>
                        <li> “前开门”、“备忘标签”、“内置电源”功能仅旗舰版独有。</li>
                        <li>拆封使用后不支持 7 日无理由退货</li>
                    </ul>
                </div>

            </div>
        </div>

        <!------------------------- 购物篮 ---------------------------->
        <div class="bug">
            <div class="center">
                <div class="choose">
                    <h1>您已选择了</h1>
                </div>
                <div class="content">
                    <span class="f-span">${data.goods_name}</span>
                    <span class="s-span">￥${data.goods_price}</span>
                    <span class="t-span">银色&nbsp;|&nbsp;非开门版</span>
                </div>
                <div class="right">
                    <span class="goods_price">￥${data.goods_price}</span>
                    <button class="buynow">现在购买</button>
                    <button class="addcart">加入购物车</button>
                </div>

            </div>

        </div>
          `
        $('#boss').html(html)


        $(".mask").mouseover(function () {
            $(".float_layer").show()
            $(".big_box").show()
        })
        $(".mask").mouseout(function () {
            $(".float_layer").hide()
            $(".big_box").hide()
        })


        $(".mask").mousemove(function (e) {
            var l = e.pageX - $(".small_box").offset().left - ($(".float_layer").width() / 2)
            var t = e.pageY - $(".small_box").offset().top - ($(".float_layer").height() / 2)
            if (l < 0) {
                l = 0
            }
            if (l > $(this).width() - $(".float_layer").width()) {
                l = $(this).width() - $(".float_layer").width()
            }
            if (t < 0) {
                t = 0
            }
            if (t > $(this).height() - $(".float_layer").height()) {
                t = $(this).height() - $(".float_layer").height()
            }

            $(".float_layer").css({
                "left": l,
                "top": t
            })
            var pX = l / ($(".mask").width() - $(".float_layer").width())
            var pY = t / ($(".mask").height() - $(".float_layer").height())
            $(".big_box img").css({
                "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
                "top": -pY * ($(".big_box img").height() - $(".big_box").height())
            })
        })

        var goods_price = data.goods_price;
        var goods_id = data.goods_id;
        var goods_imgs_small = data.goods_imgs_small;
        var goods_name = data.goods_name;
        $('.addcart').click(function () {

            $.ajax({
                type: 'GET',
                url: `//${location.hostname}/1907/0808/smartisan/cart.php`,

                data: {
                    goods_price,
                    goods_id,
                    goods_imgs_small,
                    goods_name
                },
                success: data => {
                    location.href = "cart.html"
                }

            })
        })

        $('.buynow').click(function () {
            //console.log(222)

            location.href = `cart.html?id=${goods_id}`
        })


    }
})




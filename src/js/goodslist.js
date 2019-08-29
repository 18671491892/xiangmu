$(".person").click(function () {
    location.href = "register.html";
})
$(".cart").click(function () {
    location.href = "login.html";
})

layui.use('laypage', function () {
    var laypage = layui.laypage;

    var order = 'goods_id'
    var sort = 'ASC'

    renderList(1, true);
   

    $('#down').click(function () {
        order = 'goods_price';
        renderList(1,false);
    })

    $('#up').click(function () {
        order = 'goods_id';
        sort = 'DESC'
        renderList(1,false);
    })

    function renderList(page = 1,tag) {
        $.ajax({
            type: 'GET',
            url: `${location}/1907/0808/smartisan/goodslist.php`,
            data: {
               page,
               size:3,
               order,
               sort

            },
            dataType: 'json',
            success: data => {
                //console.log(data);
                var { data,total} = data;

                var html = '';
                data.forEach(({ goods_id, goods_imgs_small, goods_name, goods_price, goods_desc }) => {
                    html += `
                <li class="goods" id="${goods_id}">
                    <div class="small">
                        <div class="block">
                            限时秒杀
                        </div>
                        <div class="ph">
                            <img class="goods_imgs_small" src="./src/img/${goods_imgs_small}" alt="">
                        </div>
                        <div class="text">
                            <h4 class="goods_name">${goods_name}</h4>
                        </div>
                        <div class="text2">
                            <h6 class="goods_desc">${goods_desc}</h6>
                        </div>
                        <div class="goods_price">
                            ￥${goods_price}
                        </div>
                    </div>
                </li>
                `
                });
                $('#big').html(html);
                $('.goods').click(function () {
                    var id = $(this).attr('id')
                    location.href = `goodsDeatils.html?id=${id}`
                })


                if (tag) {
                    laypage.render({
                        elem: 'test1',//注意，这里的 test1 是 ID，不用加 # 号
                        limit: 3,
                        count: total * 1, //数据总数，从服务端得到
                        jump: function (obj, first) {
                            //obj包含了当前分页的所有参数，比如：
                            // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
                            // console.log(obj.limit); //得到每页显示的条数

                            //首次不执行
                            if (!first) {
                                renderList(obj.curr, false);

                            }
                        }
                    });
                }
            }
        })
    }
});


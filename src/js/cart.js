$(".person").click(function () {
    location.href = "register.html";
})
$(".cart").click(function () {
    location.href = "login.html";
})


$.ajax({
    type: 'GET',
    url: `${location}/1907/0808/smartisan/cart2.php`,


    dataType: 'json',
    success: data => {
        var { data } = data;
        var html = '';
        data.forEach(({ goods_id, goods_imgs_small, goods_name, goods_price }) => {
            html += `
                    <tr class="tr_id" id=${goods_id}>
                    <td class="checkbox">
                      <input class="check-one check" type="checkbox" />
                    </td>
                    <td class="goods">
                      <img class="goods_imgs_small" src="./src/img/${goods_imgs_small}" alt="" /><span class="goods_name">${goods_name}</span>
                    </td>
                    <td class="goods_price">${goods_price}</td>
                    <td class="count">
                      <span class="reduce"></span>
                      <input class="count-input" type="text" value="1" />
                      <span class="add">+</span>
                    </td>
                    <td class="subtotal">${goods_price}</td>
                    <td class="operation">
                      <span class="delete">删除</span>
                    </td>
                  </tr>
              `
        });
        $('.tbody').html(html)



         //单选全选
         $(".check-all").on("click", function () {
            var flag = $(this).prop("checked")
            $(".check-one").prop("checked", flag);
            getTotal();
        });

        $(".check-one").on("click", function () {
            setCheckAll();
            getTotal();

        });

        //加数量
        $(".add").on("click", function () {
            var countInput = $(this).prev()
            countInput.val(countInput.val() * 1 + 1);
            var reduceSpan = countInput.prev();
            reduceSpan.html("-");

            var priceTd = $(this).parent().prev();
            var price = priceTd.html();

            var totalTd = $(this).parent().next();
            totalTd.html((price * countInput.val()).toFixed(2));
            getTotal();
        });

        //减数量
        $(".reduce").on("click", function () {
            var countInput = $(this).next();
            if (countInput.val() == 1) { //减之前的
                return false;
            }
            countInput.val(countInput.val() - 1);

            if (countInput.val() == 1) { //减之后的
                $(this).html("");
            }

            var priceTd = $(this).parent().prev();
            var price = priceTd.html();
            var totalTd = $(this).parent().next();
            totalTd.html((price * countInput.val()).toFixed(2));
            getTotal();
        });


        $(".delete").on("click", function () {///删除
            $(this).parent().parent().remove();
            getTotal();
            setCheckAll();
        });
        //计算单行价格

        function getTotal() {
            var sum = 0;
            var price = 0;
            $('.check-one:checked').each(function () {
                var tr = $(this).parent().parent();
                var countInput = tr.find(".count-input");
                //console.log(countInput);
                var subtotalTd = tr.find(".subtotal");
                //console.log(subtotal);
                sum += countInput.val() * 1;
                price += subtotalTd.html() * 1;
            });
            $("#selectedTotal").html(sum);
            //console.log(selectedTotal);
            $("#priceTotal").html(price.toFixed(2));
            //console.log(priceTotal);
        }


        //删除全部
        $('#deleteAll').on("click", function () {
            $(".check-one:checked").each(function () {
                var tr = $(this).parent().parent();
                tr.remove();
                getTotal();
                setCheckAll();
            })
        });
        function setCheckAll() {//
            var allCount = $(".check-one").length;
            var allCheckedCount = $(".check-one:checked").length;
            if (allCount == allCheckedCount) {
                $(".check-all").prop("checked", true);
            } else {
                $(".check-all").prop("checked", false);

            }
        }

        $(".closing").on("click", function () {
            if ($(".check-one:checked").length == 0) {
                layer.msg("请选择一件商品");
            } else {
                location.href = "address.html";
            }
        });
    }

})
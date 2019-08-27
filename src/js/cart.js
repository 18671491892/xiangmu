
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
            var subtotalTd = tr.find(".subtotal");
            sum += countInput.val() * 1;
            price += subtotalTd.html() * 1;
        });
        $("#selectedTotal").html(sum);
        $("#priceTotal").html(price.toFixed(2));
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

    $("#pay").on("click", function () {
        if ($(".check-one:checked").length == 0) {
            alert("请选择一件商品");
        } else {

        }
    });

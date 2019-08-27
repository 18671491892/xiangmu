$(".person").click(function(){
    location.href="register.html";
})
$(".cart").click(function(){
    location.href="login.html";
})



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
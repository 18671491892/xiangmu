
$(".cancel").click(function () {
    $(".shadow").hide();
})

$(".person").click(function () {
    location.href = "register.html";
})
$(".cart").click(function () {
    location.href = "login.html";
})




//三级联动
$(function () {
    var current_prov;
    var current_city;
    var current_country;
    /* 自动加载省份列表 */
    showPro();
});
function showPro() {
    $(".btn").disabled = true;
    var len = province.length;
    for (var i = 0; i < len; i++) {
        var provOpt = document.createElement("option");
        provOpt.innerText = province[i]['name'];
        provOpt.value = i;
        prov.appendChild(provOpt);
    }
};
/*根据所选的省份来显示城市列表*/
function showCity(obj) {
    var val = obj.options[obj.selectedIndex].value;
    current_prov = val;
    if (val >= 0) {
        city.style.display = 'inline-block';
        country.style.display = 'none';
    } else {
        city.style.display = 'none';
        country.style.display = 'none';
    }
    if (val != null) {
        city.length = 1;
        if (province[val]) {
            var cityLen = province[val]["city"].length;
        }
        for (var j = 0; j < cityLen; j++) {
            var cityOpt = document.createElement('option');
            cityOpt.innerText = province[val]["city"][j].name;
            cityOpt.value = j;
            city.appendChild(cityOpt);
        }
    }
};
/*根据所选的城市来显示县区列表*/
function showCountry(obj) {
    var val = obj.options[obj.selectedIndex].value;
    if (val >= 0) {
        country.style.display = 'inline-block';
    } else {
        country.style.display = 'none';
    }
    current_city = val;
    if (val != null) {
        country.length = 1;
        if (province[current_prov]["city"][val]) {
            var countryLen = province[current_prov]["city"][val].districtAndCounty.length;
        }
        if (countryLen == 0) {
            addrShow.value = province[current_prov].name + '-' + province[current_prov]["city"][val].name;
            return;
        }
        for (var n = 0; n < countryLen; n++) {
            var countryOpt = document.createElement('option');
            countryOpt.innerText = province[current_prov]["city"][val].districtAndCounty[n];
            countryOpt.value = n;
            country.appendChild(countryOpt);
        }
    }
};
function selectCountry(obj) {
    current_country = obj.options[obj.selectedIndex].value;
    $(".btn").disabled = false;

};
function showAddr() {
    var ss = province[current_prov].name + "|" +
        province[current_prov]['city'][current_city].name + "|" +
        province[current_prov]['city'][current_city]['districtAndCounty'][current_country];
    $("#addr-show").val(ss);
}





$(".choose").click(function () {
    $(".shadow").show();
    var username = $("#username").val();
    var telephone = $("#telephone").val();
    var prov1 = $("#prov1").val();
    var city1 = $("#city1").val();
    var country1 = $("#country1").val();



 
    ///console.log(username);



    $(".save").click(function () {
        $(".shadow").hide();
        $(".choose2").show();
        $.ajax({
            type: 'GET',
            url: `//${location.hostname}/1907/0808/smartisan/address.php`,
            data: {
                username,
                telephone,
                prov1,
                city1,
                country1
            },

            success: data => {
                layer.msg('添加地址成功')
            }
        })
    })

    $.ajax({
        type: 'GET',
        url: `//${location.hostname}/1907/0808/smartisan/address2.php`,
        datatype: 'json',
        success: data => {

            //console.log(data);
            data = JSON.parse(data);
            console.log(data)
            var { data } = data;
            //console.log(data);
            var html = '';
            data.forEach(({ username, telephone, prov1, city1, country1 }) => {
                html += `
                <div class="choose">
                    <p class="p1">+</p>
                    <p class="p2">使用新地址</p>
                </div>
                <div class="choose2">
                    <p class="p1">收货人:${username}</p>
                    <p class="p2">联系电话:${telephone}</p>
                    <p class="p3">地址:${prov1}${city1}${country1}</p>
                    <p class="p4"></p>
                </div>
                `
                $('.choose2').show();
            }),
                $(".address").html(html);

        }
       
    })
    
})











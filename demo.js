/**
 * Created by wei on 2017/9/4.
 */
//头部二维码

$(function (){

    $("#s-h").mouseenter(function () {
        $(" #s-h img").hide();
    });
    $("#s-h").mouseleave(function () {
        $("#s-h img").show();
    })

})



$(function () {
    //固定导航栏

    $(window).scroll(function (){

        if($(this).scrollTop() >= 690){
            $("#fixed-nav").addClass("fixed")
            $("#topPart").css("margin-bottom",10)
        }else {
            $("#fixed-nav").removeClass("fixed")
            $("#topPart").css("margin-bottom","")
        }
    })
})



$(function () {

    // 图片缩放
    $(".fl-p").mouseenter(function (){
        $(this).find("img").animate({
            width:320,
            height:385,
            opacity:1,
        },300)
    })
    $(".fl-p").mouseleave(function (){
        $(this).find("img").animate({
            width:305,
            height:375,
            opacity:1,
        },300)
    })

})


// 下方二维码显示

$(function () {

    $("#p-e").mouseenter(function() {
        $("#erweima").fadeIn(500);
    })
    $("#p-e").mouseleave(function() {
        $("#erweima").fadeOut(500);
    })

})


//下拉菜单 我的京东

$(function () {
    $("#mjd").mouseenter(function (){
        $(".my-jd").show();
    })
    $("#mjd").mouseleave(function (){
        $(".my-jd").hide();
    })


})



// 动态文字

$(function (){
    var str = "减减减,减到最低点;降降降,降到你心动";
    core(str);

    function core(str){
        var timer = null;
        var newStr = "";
        var num = 0;
        timer =  setInterval(function () {
            if(num < str.length){
                $(".typed-cursor").show();
                newStr += str[num];
                $(".word").text(newStr);
                num++;
            }else {

                clearInterval(timer);
                $(".typed-cursor").hide();
            }
        },500)
    }

    $("#btnSay").click(function(){
        var str = $("#inValue").val();
        core(str);
        $("#inValue").val("");
    })

})


// 推荐与全球优品切换

$(function (){

$("#global-good").click (function (){
        $(".global").show();
        $(".haha").hide();
    })

    $("#commend").click (function (){
        $(".global").hide();
        $(".haha").show();
    })

})

// 返回顶部

$(function () {
        $(window).scroll(function(){
            var sc=$(window).scrollTop();
            var rwidth=$(window).width()+$(document).scrollLeft();
            var rheight=$(window).height()+$(document).scrollTop();
            if(sc>500){
                $("#goTop").css("display","block");
                $("#p-e").css("display","block");
                $("#goTop").css("left",(rwidth-80)+"px");
                $("#goTop").css("top",(rheight-120)+"px");
            }else{
                $("#goTop").css("display","none");
                $("#p-e").css("display","none");
            }
        });
    $("#goTop").click(function(){
        $('body,html').animate({scrollTop:0},300);
    });
})






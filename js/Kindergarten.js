

//获取年月日
var meDate=new Date();
var myTxt;
if((meDate.getMonth()+1)<10){
    myTxt=meDate.getFullYear()+".0"+(meDate.getMonth()+1)+"."+meDate.getDate();
}else{
    myTxt=meDate.getFullYear()+"."+(meDate.getMonth()+1)+"."+meDate.getDate();
}
if(meDate.getDate()<10){
    myTxt=meDate.getFullYear()+""+(meDate.getMonth()+1)+".0"+meDate.getDate();
}else{
    myTxt=meDate.getFullYear()+"."+(meDate.getMonth()+1)+"."+meDate.getDate();
}
var myWeek=meDate.getDay();
switch (myWeek){
    case 0:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期天");break;
    case 1:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期一");break;
    case 2:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期二");break;
    case 3:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期三");break;
    case 4:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期四");break;
    case 5:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期五");break;
    case 6:$(".myDateTxt").html(myTxt+"&nbsp;&nbsp;&nbsp;&nbsp;"+"星期六");break;
}

//获取时钟
$(function(){
    console.log("000");
    setInterval(function(){
        var meDate=new Date();
        var hour=meDate.getHours();
        var minutes=meDate.getMinutes();
        var seconds=meDate.getSeconds();
        //myTxt=hour+":"+minutes+":"+seconds;
        $(".myTimeTxt").html(hour+":"+minutes+":"+seconds);
    },1000)
});

//点击显示二级菜单
$(".menuLeft>div").click(function(){
    //判断媒体查询
    var result=window.matchMedia("(max-width: 1200px)");
    if(result.matches){
    //console.log("页面小于1200px");
        var count=$(this).children("ul").children().length;
        $(this).css({
            "backgroundColor":"#242148",
            "width":"100%"
        }).siblings().css("width","36%");

        $(this).siblings().css("backgroundColor","rgba(255, 246, 246, 0.1)");
        //一级菜单的高度增加，显示二级菜单
        //if(count>0){
        $(this).css("height","7%");
        //}
        $(this).animate({
            "height":(count+1)*35+"px"
        }).siblings().animate({
            "height":"7%"
        });

        //二级菜单的边框线
        $(this).children("ul").children("li").css({
            "background-color": "#242148",
            "border-top": "1px solid rgba(255, 246, 246, 0.1)",
            "border-bottom": "1px solid rgba(255, 246, 246, 0.1)",
            "padding-left":"33%",
            "display":"block"
        });
        $(".menuLeft ul>li:last-child").css("border-bottom","1px");
        $(this).siblings().children("ul").children("li").css({
            "background-color":"rgba(255, 246, 246, 0)",
            "display":"none"
        });
        //一级菜单文字显示、隐藏
        $(this).children(".menuTxt").css("display","block");
        $(this).siblings().children(".menuTxt").css("display","none");

    }else{
        //console.log("页面大于1200px");
        var count=$(this).children("ul").children().length;
        $(this).css({
            "backgroundColor":"#242148",
            "width":"100%"
        }).siblings().css("width","100%");
        $(this).siblings().css("backgroundColor","rgba(255, 246, 246, 0.1)");
        //一级菜单的高度增加，显示二级菜单
        $(this).animate({
            "height":(count+1)*41+"px"
        }).siblings().animate({
            "height":"40px"
        });
        /*var myHeight=parseInt($(this)[0].style.height)*count;
        console.log(parseInt($(this)[0].style.height)*count);
        if(myHeight!=0){
            $(this).css("height","0px");
        }*/
        //if(count>0){
        //    $(this).css("height","0px");
        //}


        //二级菜单的边框线
        $(this).children("ul").children("li").css({
            "background-color": "#242148",
            "border-top": "1px solid rgba(255, 246, 246, 0.1)",
            "border-bottom": "1px solid rgba(255, 246, 246, 0.1)",
            "padding-left":"33%",
            "display":"block"
        });
        $(".menuLeft ul>li:last-child").css("border-bottom","1px");
        $(this).siblings().children("ul").children("li").css({
            "background-color":"rgba(255, 246, 246, 0)",
            "display":"none"
        });

        //一级菜单文字显示、隐藏
        //$(this).children(".menuTxt").css("display","block");
        //$(this).siblings().children(".menuTxt").css("display","none");
    }

});

//获取登录页面的用户名
var getName=localStorage.getItem("useName");
//console.log(getName);
$("#useCopy").html(getName);

//点击logo返回首页
$(function(){
    $(".logo").click(function(){
        window.location.href="Kindergarten.html";
    });
});


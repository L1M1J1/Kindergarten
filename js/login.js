document.write("<script src='../js/data.js'><\/script>");
$(".forgetPw").click(function(){
    $(".forgetBox").css({
        "display":"block"
    });
});
$(".next").click(function(){
    $(".forgetBox").css({
        "display":"none"
    });
});
$(".iconD").click(function(){
    $(".forgetBox").css({
        "display":"none"
    });
});
//    获取用户名 密码 并本地存储
function login(){
    var useName=$("#useN").val();
    var usePw=$("#useP").val();


//        判断用户名密码是否正确
    if(account != useName || password != usePw){
        alert("请重新输入用户名和密码");
    }else{
        $("form").attr("action","../Kindergarten.html");
//            localStorage.setItem("usePw",usePw);
        localStorage.setItem("useName",useName);
//            var getName=localStorage.getItem(useName);
//            var getPw=localStorage.getItem(usePw);
    }
}

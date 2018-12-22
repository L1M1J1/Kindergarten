
$(".span1").eq(0).click(function () {
    $("input[name='chose']:checked").each(function() { // 遍历选中的checkbox
        n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
        $("table").find("tr:eq(" + n + ")").remove();
        });
    });


$(".span0").click(function () {
    $("input").prop("checked",true);
})



$("table").find("tr").hide()
$(".show").show()
$(".colsTr").show();
$(".span8").click(function () {
    $(".show").hide();
    $(".noShow").show()
    $(".span7").css("display","inline")
    $(".span5").html("2/2")
});
$(".span7").click(function () {
    $(".show").show();
    $(".noShow").hide()
    $(".span7").css("display","none")
    $(".span5").html("1/2")
})
$("table").find(".secondTd").click(function () {
    $("#emailD").css({
        "opacity":"1",
        "zIndex":"2",
    })
})
$(".returnSpan").click(function () {
    $("#emailD").css({
        "opacity":"0",
        "zIndex":"-1",
    })
})
$(".deSpan").click(function () {
    $("#emailD").css({
        "opacity":"0",
        "zIndex":"-1",
    })
    $("table").find("tr:eq(" + 3 + ")").remove();
});
// $("#search button").click(function () {
//
//    if ($("#search input").val()==$(".span4").html()) {
//        $("#searchD").append($(".span4").parent().parent())
//    }
// })
var span=document.getElementsByClassName("span4");
var button=document.getElementsByTagName("button");
var boom=document.getElementById("boom");
var search=document.getElementById("searchD");
button[0].onclick=function () {



    for (var i=0;i<14;i++){
       if (span[i].innerText==boom.value){
           var a=span[i].parentNode
           var b=a.parentNode
           search.style.opacity="1";
           search.style.zIndex="2";
          search.appendChild(b.cloneNode(true))
       }else{
            alert("没有该信息");
            break;
       }
    }
}

$(".returnSpan2").click(function () {
    $("#searchD").css({
        "opacity":"0",
        "zIndex":"-1",
    })
    $("#searchD tr").remove()
})

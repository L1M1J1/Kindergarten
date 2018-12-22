/**
 * Created by shu on 2018/9/27.
 */
//显示和隐藏弹框
$(".kaoZuo").click(function () {
    $(".beiJin").show();
    // console.log($(".beiJin"));
});
$(".zi7").click(function () {
    $(".beiJin").hide()
});
//删除选中的邮件
$(function(){
    $(".zi1").click(function() {
        $("input[name='test']:checked").each(function() { // 遍历选中的checkbox
            n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
            $("table#test_table").find("tr:eq("+n+")").remove();
            // $("table#test_table").find("tr:eq("+n+")").children().next().next().next().next().empty();
        });
    });
});
//删除选中行的星星
// $(function(){
//     $("#yin").click(function() {
//         console.log(1111);
//         $("input[name='test']:checked").each(function() { // 遍历选中的checkbox
//             n = $(this).parents("tr").index();  // 获取checkbox所在行的顺序
//             $("table#test_table").find("tr:eq("+n+")").children().next().next().next().next().empty();
//         });
//     });
// });
$(".yin").click(function () {
   $(".div").fadeToggle(200);
});
$(".yin1").click(function () {
    $(".div1").fadeToggle(200);
});
$(".yin2").click(function () {
    $(".div2").fadeToggle(200);
});
$(".yin3").click(function () {
    $(".div3").fadeToggle(200);
});
$(".yin4").click(function () {
    $(".div4").fadeToggle(200);
});
$(".yin5").click(function () {
    $(".div5").fadeToggle(200);
});
$(".yin6").click(function () {
    $(".div6").fadeToggle(200);
});

//发送成功
$(".anNiu3").click(function () {
    console.log($("1111"));
    $(".chenGong").show();
    // console.log($("1111"));
});
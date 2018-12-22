/**
 * Created by lsdn on 2018/9/27.
 */

$(".xian1").click(function(){
    $("#bg").css("display","block");
});
$(".xian1-1").click(function(){
    $("#bg-1").css("display","block");
});
$(".xian1-2").click(function(){
    $("#bg-2").css("display","block");
});
$(".xian1-3").click(function(){
    $("#bg-3").css("display","block");
});
$(".xian1-4").click(function(){
    $("#bg-4").css("display","block");
});
$(".xian1-5").click(function(){
    $("#bg-5").css("display","block");
});
$(".xian1-6").click(function(){
    $("#bg-6").css("display","block");
});
$(".xian1-7").click(function(){
    $("#bg-7").css("display","block");
});
$(".xian1-8").click(function(){
    $("#bg-8").css("display","block");
});
$(".xian2").click(function(){
    $("#bg1").css("display","block");
    $(".chakan").text($("#tr-5").text());
    $(".chakan1").text($("#tr-4").text());
    $(".chakan3").text($("#tr-6").text());
    $(".chakan4").text($("#tr-3").text());
    $(".chakan5").text($("#tr-2").text());
    $(".chakan2").text($("#tr-1").text());
});
$(".xian2-1").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-1").text($("#tr-5-1").text());
    $(".chakan1-1").text($("#tr-4-1").text());
    $(".chakan3-1").text($("#tr-6-1").text());
    $(".chakan4-1").text($("#tr-3-1").text());
    $(".chakan5-1").text($("#tr-2-1").text());
    $(".chakan2-1").text($("#tr-1-1").text());
});
$(".xian2-2").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-2").text($("#tr-5-2").text());
    $(".chakan1-2").text($("#tr-4-2").text());
    $(".chakan3-2").text($("#tr-6-2").text());
    $(".chakan4-2").text($("#tr-3-2").text());
    $(".chakan5-2").text($("#tr-2-2").text());
    $(".chakan2-2").text($("#tr-1-2").text());
});
$(".xian2-3").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-3").text($("#tr-5-3").text());
    $(".chakan1-3").text($("#tr-4-3").text());
    $(".chakan3-3").text($("#tr-6-3").text());
    $(".chakan4-3").text($("#tr-3-3").text());
    $(".chakan5-3").text($("#tr-2-3").text());
    $(".chakan2-3").text($("#tr-1-3").text());
});
$(".xian2-4").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-4").text($("#tr-5-4").text());
    $(".chakan1-4").text($("#tr-4-4").text());
    $(".chakan3-4").text($("#tr-6-4").text());
    $(".chakan4-4").text($("#tr-3-4").text());
    $(".chakan5-4").text($("#tr-2-4").text());
    $(".chakan2-4").text($("#tr-1-4").text());
});
$(".xian2-5").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-5").text($("#tr-5-5").text());
    $(".chakan1-5").text($("#tr-4-5").text());
    $(".chakan3-5").text($("#tr-6-5").text());
    $(".chakan4-5").text($("#tr-3-5").text());
    $(".chakan5-5").text($("#tr-2-5").text());
    $(".chakan2-5").text($("#tr-1-5").text());
});
$(".xian2-6").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-6").text($("#tr-5-6").text());
    $(".chakan1-6").text($("#tr-4-6").text());
    $(".chakan3-6").text($("#tr-6-6").text());
    $(".chakan4-6").text($("#tr-3-6").text());
    $(".chakan5-6").text($("#tr-2-6").text());
    $(".chakan2-6").text($("#tr-1-6").text());
});
$(".xian2-7").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-7").text($("#tr-5-7").text());
    $(".chakan1-7").text($("#tr-4-7").text());
    $(".chakan3-7").text($("#tr-6-7").text());
    $(".chakan4-7").text($("#tr-3-7").text());
    $(".chakan5-7").text($("#tr-2-7").text());
    $(".chakan2-7").text($("#tr-1-7").text());
});
$(".xian2-8").click(function(){
    $("#bg1").css("display","block");
    $(".chakan-8").text($("#tr-5-8").text());
    $(".chakan1-8").text($("#tr-4-8").text());
    $(".chakan3-8").text($("#tr-6-8").text());
    $(".chakan4-8").text($("#tr-3-8").text());
    $(".chakan5-8").text($("#tr-2-8").text());
    $(".chakan2-8").text($("#tr-1-8").text());
});
$(".zhuti-2").click(function(){
    $("#bg").css("display","none");
    $("#bg1").css("display","none");
    $("#bg-1").css("display","none");
    $("#bg-2").css("display","none");
    $("#bg-3").css("display","none");
    $("#bg-4").css("display","none");
    $("#bg-5").css("display","none");
    $("#bg-6").css("display","none");
    $("#bg-7").css("display","none");
    $("#bg-8").css("display","none");
    $("#bg-9").css("display","none");
    $(".xue-bg").css("display","none");
    $(".xue-bg1").css("display","none");
    $(".xue-bg2").css("display","none");
});
$(".btn1").click(function(){
    $("#bg").css("display","none");
    $("#bg-1").css("display","none");
    $("#bg-2").css("display","none");
    $("#bg-3").css("display","none");
    $("#bg-4").css("display","none");
    $("#bg-5").css("display","none");
    $("#bg-6").css("display","none");
    $("#bg-7").css("display","none");
    $("#bg-8").css("display","none");
    $("#bg-9").css("display","none");
});
$(".btn2").click(function(){
    if( $(".ren").val().length!=7){
        $("#tr-1").text($(".ren").val());
    }
    if( $(".ren1").val().length!=8){
        $("#tr-3").text($(".ren1").val());
    }
    if( $(".ren2").val().length!=8){
        $("#tr-2").text($(".ren2").val());
    }
    $("#bg").css("display","none");
    $("#tr-4").text($(".shenban-1 option:selected").text());
});
$(".btn2-1").click(function(){
    if( $(".ren-1").val().length!=7){
        $("#tr-1-1").text($(".ren-1").val());
    }
    if( $(".ren1-1").val().length!=8){
        $("#tr-3-1").text($(".ren1-1").val());
    }
    if( $(".ren2-1").val().length!=8){
        $("#tr-2-1").text($(".ren2-1").val());
    }
    $("#bg-1").css("display","none");
    $("#tr-4-1").text($(".shenban-1-1 option:selected").text());
});
$(".btn2-2").click(function(){
    if( $(".ren-2").val().length!=7){
        $("#tr-1-2").text($(".ren-2").val());
    }
    if( $(".ren1-2").val().length!=8){
        $("#tr-3-2").text($(".ren1-2").val());
    }
    if( $(".ren2-1").val().length!=8){
        $("#tr-2-1").text($(".ren2-2").val());
    }
    $("#bg-2").css("display","none");
    $("#tr-4-2").text($(".shenban-1-2 option:selected").text());
});
$(".btn2-3").click(function(){
    if( $(".ren-3").val().length!=7){
        $("#tr-1-3").text($(".ren-3").val());
    }
    if( $(".ren1-3").val().length!=8){
        $("#tr-3-3").text($(".ren1-3").val());
    }
    if( $(".ren2-3").val().length!=8){
        $("#tr-2-3").text($(".ren2-3").val());
    }
    $("#bg-3").css("display","none");
    $("#tr-4-3").text($(".shenban-1-3 option:selected").text());
});
$(".btn2-4").click(function(){
    if( $(".ren-4").val().length!=7){
        $("#tr-1-4").text($(".ren-4").val());
    }
    if( $(".ren1-4").val().length!=8){
        $("#tr-3-4").text($(".ren1-4").val());
    }
    if( $(".ren2-4").val().length!=8){
        $("#tr-2-4").text($(".ren2-4").val());
    }
    $("#bg-4").css("display","none");
    $("#tr-4-4").text($(".shenban-1-4 option:selected").text());
});
$(".btn2-5").click(function(){
    if( $(".ren-5").val().length!=7){
        $("#tr-1-5").text($(".ren-5").val());
    }
    if( $(".ren1-5").val().length!=8){
        $("#tr-3-5").text($(".ren1-5").val());
    }
    if( $(".ren2-5").val().length!=8){
        $("#tr-2-5").text($(".ren2-5").val());
    }
    $("#bg-5").css("display","none");
    $("#tr-4-5").text($(".shenban-1-5 option:selected").text());
});
$(".btn2-6").click(function(){
    if( $(".ren-6").val().length!=7){
        $("#tr-1-6").text($(".ren-6").val());
    }
    if( $(".ren1-6").val().length!=8){
        $("#tr-3-6").text($(".ren1-6").val());
    }
    if( $(".ren2-6").val().length!=8){
        $("#tr-2-6").text($(".ren2-6").val());
    }
    $("#bg-6").css("display","none");
});
$(".btn2-7").click(function(){
    if( $(".ren-7").val().length!=7){
        $("#tr-1-7").text($(".ren-7").val());
    }
    if( $(".ren1-7").val().length!=8){
        $("#tr-3-7").text($(".ren1-7").val());
    }
    if( $(".ren2-7").val().length!=8){
        $("#tr-2-7").text($(".ren2-7").val());
    }
    $("#bg-7").css("display","none");
});
$(".btn2-8").click(function(){
    if( $(".ren-8").val().length!=7){
        $("#tr-1-8").text($(".ren-8").val());
    }
    if( $(".ren1-8").val().length!=8){
        $("#tr-3-8").text($(".ren1-8").val());
    }
    if( $(".ren2-8").val().length!=8){
        $("#tr-2-8").text($(".ren2-8").val());
    }
    $("#bg-8").css("display","none");
});

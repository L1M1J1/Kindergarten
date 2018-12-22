
/*添加选中的节点*/
function fun(){
    var obj = document.getElementsByName("test");
    var check_val = [];
    for(var k in obj){
        if(obj[k].checked){
            check_val.push(obj[k].value);
        }else if(obj[k].checked=="false"){

        }
        obj[k].checked=false;
    }
    /* alert(check_val);*/
    $(".master").append("<lable><input type=\"checkbox\" name=\"test1\" value="+check_val+">"+check_val+"</lable>"+"</br>");
}
/*删除选中后的节点*/
function fun1() {
    var obj1 = document.getElementsByName("test1");
    var check_val1 = [];
    for(var k1 in obj1){
        if(obj1[k1].checked){
            var node=obj1[k1].parentNode;
            /*console.log(node.remove());*/
            node.remove();
        }
    }
}
/*保存修改的权限
 $(".btn-primary").click(function () {
 var obj1 = document.getElementsByName("test1");
 var check_val1 = [];
 for(var k1 in obj1){
 if(obj1[k1].checked){
 $(".quanxian").text(obj1[k1].value);
 }
 }
 console.log( $(".quanxian").text());
 });
 */
/*添加人员*/
$(document).ready(function(){
    /*    $(".Name").text(workers[0].name);
     console.log(workers[0].name);*/
    console.log(workers.length);
    for(var i=0;i<workers.length;i++){
        $(".table-bordered").append("<tr onclick=\"getNode(this)\">\n" +
        "                    <td>"+i+"</td>\n" +
        "                    <td class=\"Name\">"+workers[i].name+"</td>\n" +
        "                    <td class=\"zhiwei\">"+workers[i].job+"</td>\n" +
        "                    <td class=\"bumen\">"+workers[i].department+"</td>\n" +
        "                    <td  class=\"quanxian\">查看公告</td>\n" +
        "                    <td class=\"IsNo\">启用</td>\n" +
        "                    <td class=\"setJur\"  data-toggle=\"modal\" data-target=\".bs-example-modal-lg\"><u>设置权限</u></td>\n" +
        "                </tr>");
    }
});

/*获取点击到的该行*/
function getNode(element) {
    var teacher=document.getElementById("teacher");
    var teacher1=document.getElementById("teacher1");
    var yuanzhang=document.getElementById("yuanzhang");
    var yuanzhang1=document.getElementById("yuanzhang1");
    /*alert(element.children[2].innerText);*/
    teacher.style.display="block";
    yuanzhang.style.display="";

    if(element.children[2].innerText=="园长"){

        if(yuanzhang.style.display=="none"){
            yuanzhang.style.display="";
            yuanzhang1.style.display="";
        }
        $("#teacher").css("display","none");
        $("#teacher").next().css("display","none");
        $("#teacher1").css("display","none");
    }
    else{
        if(teacher.style.display=="none"){
            teacher.style.display="";
            teacher1.style.display="";
            teacher1.nextElementSibling.style.display="";
        }
        $("#yuanzhang").css("display","none");
        $("#yuanzhang1").css("display","none");
        $("#yuanzhang1").prev().css("display","none");
        $(".jiantou").css("margin-top","0px");
    }
    $(".zhangsan")[0].innerText=element.children[1].innerText;
    $(".zhangTea")[0].innerText=element.children[2].innerText;
    $(".model_save").click(function () {
        var obj1 = document.getElementsByName("test1");
        var val_payPlatform = $('.radio-inline input[name="inlineRadioOptions"]:checked ').val();
        element.children[5].innerText=val_payPlatform;
        for(var k1 in obj1){
            if(obj1[k1].checked){
                element.children[4].innerText=obj1[k1].value;
            }
        }
        console.log(element.children[4].innerText);
    });

}

$(".model_save").click(function () {
    alert("修改成功！");
});
$(".increas").click(function (e) {
    var Na=$(".name").val();
    var Jo=$(".job").val();
    var De=$(".department").val();
    if(Na!=""&Jo!=""&&De!=""){
        var num=$(".table-bordered tbody tr:last-child")[0].childNodes[1].innerText;
        console.log(num);
        var j=parseInt(num)+1;
        $(".table-bordered").append("<tr onclick=\"getNode(this)\">\n" +
        "                    <td class=\"num\">"+j+"</td>\n" +
        "                    <td class=\"Name\">"+Na+"</td>\n" +
        "                    <td class=\"zhiwei\">"+Jo+"</td>\n" +
        "                    <td class=\"bumen\">"+De+"</td>\n" +
        "                    <td  class=\"quanxian\">查看公告</td>\n" +
        "                    <td class=\"IsNo\">启用</td>\n" +
        "                    <td class=\"setJur\"  data-toggle=\"modal\" data-target=\".bs-example-modal-lg\"><u>设置权限</u></td>\n" +
        "                </tr>");
        alert("添加人员成功！");
    }
    else{
        e.stopPropatation = true;
    }

});

/*职位查询*/
$(".search_form").change(function () {
    /*console.log($(".form-control").val());*/
    var zhiW=$(".search_form").val();
    for(var m=0;m<$(".zhiwei").length;m++){
        if(zhiW==""){
            $(".table-bordered")[0].childNodes[1].childNodes[2].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[3].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[4].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[5].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[6].style.display="";
        }
        else{
            if($(".zhiwei")[m].innerText!=zhiW){
                $(".zhiwei")[m].parentNode.style.display="none";
            }
            else{
                $(".zhiwei")[m].parentNode.style.display="";
            }
        }
    }
});

/*职位状态查询*/
$(".job_state").change(function () {
    var jos=$(".job_state option:selected").val();
    for(var p=0;p<$(".IsNo").length;p++){
        if($(".IsNo")[p].innerText!=jos){
            $(".IsNo")[p].parentNode.style.display="none";
        }
        else{
            $(".table-bordered")[0].childNodes[1].childNodes[2].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[3].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[4].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[5].style.display="";
            $(".table-bordered")[0].childNodes[1].childNodes[6].style.display="";
        }
    }
});

/*分页代码*/
$(function(){
    var $table = $('table');
    var currentPage = 0;//当前页默认值为0
    var pageSize = 6;//每一页显示的数目
    $table.bind('paging',function(){
        $table.find('tbody tr').hide().slice(currentPage*pageSize,(currentPage+1)*pageSize).show();
    });
    var sumRows = $table.find('tbody tr').length;
    var sumPages = Math.ceil(sumRows/pageSize);//总页数

    var $pager = $('<div class="page"></div>'); //新建div，放入a标签,显示底部分页码
    for(var pageIndex = 0 ; pageIndex<sumPages ; pageIndex++){
        $('<a href="#" rel="external nofollow" id="pageStyle" onclick="changCss(this)"><span>'+(pageIndex+1)+'</span></a>').bind("click",{"newPage":pageIndex},function(event){
            currentPage = event.data["newPage"];
            $table.trigger("paging");
            //触发分页函数
        }).appendTo($pager);
        $pager.append(" ");
    }
    $pager.insertAfter($table);
    $table.trigger("paging");

    //默认第一页的a标签效果
    var $pagess = $('#pageStyle');
    console.log($pagess[0]);
    $pagess[0].style.backgroundColor="#242148";
    $pagess[0].style.color="#ffffff";
    $pagess[0].style.display="inline-block";
    $pagess[0].style.width="28px";
    $pagess[0].style.height="28px";
    $pagess[0].style.lineHeight="28px";
    $pagess[0].style.textAlign="center";
});

//a链接点击变色，再点其他回复原色
function changCss(obj) {
    var arr = document.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        obj.style.display="inline-block";
        obj.style.width="28px";
        obj.style.height="28px";
        obj.style.lineHeight="28px";
        obj.style.textAlign="center";
        if (obj == arr[i]) { //当前页样式
            obj.style.backgroundColor = "#242148";
            obj.style.color = "#fff6f6";
        }
        else {
            arr[i].style.color = "#242148";

            arr[i].style.backgroundColor = "#fff6f6";
        }
    }
}

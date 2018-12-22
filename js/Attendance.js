$(document).ready(function(){
    for(var i=0;i<kaoqinArray.length;i++){
        $(".table-bordered tbody").append(" <tr>\n" +
            "                        <td class=\"date\">"+kaoqinArray[i].time+"</td>\n" +
            "                        <td class=\"teacher\">"+kaoqinArray[i].name+"</td>\n" +
            "                        <td class=\"StartTime\">"+kaoqinArray[i].starttime+"</td>\n" +
            "                        <td class=\"EndTime\">"+kaoqinArray[i].endtime+"</td>\n" +
            "                        <td class=\"zhuangtai\">"+kaoqinArray[i].state+"</td>\n" +
            "                        <td class=\"job\">"+kaoqinArray[i].job+"</td>\n" +
            "                        <td class=\"department\">"+kaoqinArray[i].department+"</td>\n" +
            "                    </tr>");
    }

  /*  if($(".zhuangtai").text()=="异常"){
        $(".zhuangtai").css("background-color","red");
    }
    console.log($(".zhuangtai").text());*/
  var zhuangT=document.getElementsByClassName("zhuangtai");
  var zhuangT_lenght=document.getElementsByClassName("zhuangtai").length;
  for(var j=0;j<zhuangT_lenght;j++){
      if(zhuangT[j].innerText=="异常"){
          zhuangT[j].style.backgroundColor="red";
      }
  }
});

$(".select_form").change(function () {
    var he=$(".select_form option:selected").val();
   /* console.log($(".job")[0].parentNode);*/
   console.log(he.length);
   console.log(typeof (he));
   for(var n=0;n<$(".job").length;n++){
       if($(".job")[n].innerText!=he){
           $(".job")[n].parentNode.style.display="none";
       }
       else {
           $(".job")[n].parentNode.style.display="";
       }
   }
});
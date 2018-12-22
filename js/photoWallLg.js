/**
 * Created by Administrator on 2018/9/27 0027.
 */

//班级照片墙默认封面为班级照片第一张
$('.duoCover').attr('src',imgWall[6][0]);
$('.miaoCover').attr('src',imgWall[7][0]);
$('.huaCover').attr('src',imgWall[8][0]);
$('.newCover').attr("src","../images/blankImg.png");
var nowPicArray;
var uploadCover = '../images/blankImg.png';
var upCreate = '../images/pic20.jpg';
/*=======================创建相册======================*/

function album(){
    //出现创建相册弹框
    $('.showCreate').click(function(){
        event.stopPropagation();
        $('.classPhoto').css({
            'display':'none'
        })
        $('.createAlbum').css({
            'display':'block'
        })
    })

    getNum();

    //确认创建
    $('.createBtn').click(function(){
        //创建相册节点
        $('.add').before($(' <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 huahua classContainer"> <img class="newCover"/> <div class="touM" src=""> <p>'+name+'</p> </div> </div>'));
        $('.classPhoto').css({
            'display':'block'
        });
        $('.createAlbum').css({
            'display':'none'
        });

        //清空弹框里面填写的内容
        $('#albumName').text('');
        $('#albumDes').text('');

    })

    //关闭，取消创建
    $('.myClose').click(function(){
        event.stopPropagation();
        $('.classPhoto').css({
            'display':'block'
        })
        $('.createAlbum').css({
            'display':'none'
        })

        //清空弹框里面填写的内容
        $('#albumName').text('');
        $('#albumDes').text('');
    })
}

//改变创建相册弹框输入字符数字
function getNum(){
setInterval(function(){

    $("#albumName").keyup(function(){
       if(event.keyCode == 32){
           //这就是输入值的个数
           var nameLength=this.value.length;
           name = this.value;
           console.log(nameLength);
           $('.nameNum').text(nameLength+'/30');
       }

    });
    $("#albumDes").keyup(function(){
        if(event.keyCode == 32||event.keyCode==188||event.keyCode==190) {
            var desLength = this.value.length;
            console.log(desLength);
            $('.desNum').text(desLength+'/200');
        }
    });
},50)
}

//班级照片详情图片渲染
function showClassDetail() {
    var myClass = document.querySelectorAll('.classContainer');
    for (var i = 0; i < myClass.length - 1; i++) {
        myClass[i].index = i;
        myClass[i].onclick = function () {
            console.log('点击了第' + (this.index + 1) + '个班级');
            var classNum = this.index + 1;
            nowPicArray = classNum+6;
            var picLength = imgWall[classNum].length;
            console.log('班级照片数' + picLength);
            for (var j = 0; j < picLength; j++) {
                $('.detailPhoto').append('<div class="col-lg-3 col-md-3  col-sm-3 col-xs-3 photoContainer"><img class="duoCover" src=' + imgWall[classNum][j] + '/><div class="touM"><div class="icon"><span class="iconfont lookUp" onclick="detailLook();">&#xe606;</span><span class="iconfont delete" onclick="deletePic();">&#xe6cf;</span> </div> </div> </div>');
                console.log('生成第' + j + '个节点');
            }

                //上传图片的节点
                $('.detailPhoto').append('<div class="col-lg-3 col-md-3  col-sm-3 col-xs-3 photoContainer uploadNode"><img class="duoCover" src='+uploadCover+'/><span class="iconfont upload" onclick="uploadImg();">&#xe638;<input type="file" class="upload_pic" id="upload" /></span></div>');

            $('.classPhoto').css({
                'display': 'none'
            })
            $('.classDetail').css({
                'display': 'block'
            })
        }
    }
}

//关闭班级图片列表
function myClose2(){
    $('.detailPhoto').html('<span class="myClose2 iconfont" onclick="myClose2();">&#xe70a;</span>');
    $('.classPhoto').css({
        'display':'block'
    })
    $('.classDetail').css({
        'display':'none'
    })
}



//班级详情相册中大图查看
function detailLook() {
    console.log('查看大图函数');
    var myLook = document.querySelectorAll('.lookUp');
    console.log(myLook);
    for (var i = 0; i < myLook.length - 1; i++) {
        myLook[i].index = i;
        myLook[i].onclick = function () {
            var nowIndex = this.index;
            console.log('点击了第' + nowPicArray + '的第' + (nowIndex + 1) + '张图片');
            $('.picBannerContainer').css({
                'display':'block'
            })
            console.log('执行');
            $('.banner').attr('src',imgWall[nowPicArray][nowIndex]);

            $('.left').click(function(){
                $('.banner').attr('src',imgWall[nowPicArray][nowIndex-1]);
                nowIndex--;
            });
            $('.right').click(function(){
                $('.banner').attr('src',imgWall[nowPicArray][nowIndex+1]);
                nowIndex++;
            })
        }
    }
}

//图片大图查看关闭
function myClose3(){
    $('.myClose3').click(function(){
        $('.picBannerContainer').css({
            'display':'none'
        })
    })
}

//班级详情相册中删除
function deletePic(){
    console.log('查看大图函数');
    var myDelete = document.querySelectorAll('.delete');
    console.log(myDelete);
    for (var i = 0; i < myDelete.length - 1; i++) {
        myDelete[i].index = i;
        myDelete[i].onclick = function () {
            var nowIndex = this.index;
            console.log(nowIndex);
            console.log('点击了第' + nowPicArray + '的第' + (nowIndex + 1) + '张图片');
            $('.deletaContainer').css({
                'display':'block'
            })

            var obj=$(this).parent().parent().parent();
            $('.deleteBtn').click(function(){
                obj.remove();
                $('.deletaContainer').css({
                    'display':'none'
                })
            })
            console.log('删除本照片');
        }
    }
}


//班级详情相册中删除弹框关闭
function myClose4(){
    $('.myClose4').click(function(){
        $('.deletaContainer').css({
            'display':'none'
        })
    })
}




//上传图片
function uploadImg(){
    //获取上传按钮
    var input1 = document.getElementById("upload");

    if(typeof FileReader==='undefined'){
        //result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input1.setAttribute('disabled','disabled');
    }else{
        input1.addEventListener('change',readFile,false);
        /*input1.addEventListener('change',function (e){
         console.log(this.files);//上传的文件列表
         },false); */
    }
    function readFile(){
        var file = this.files[0];//获取上传文件列表中第一个文件
        if(!/image\/\w+/.test(file.type)){
            //图片文件的type值为image/png或image/jpg
            alert("文件必须为图片！");
            return false;
        }
        // console.log(file);
        var reader = new FileReader();//实例一个文件对象
        reader.readAsDataURL(file);//把上传的文件转换成url
        //当文件读取成功便可以调取上传的接口
        reader.onload = function(e){

            var image = new Image();
            // 设置src属性
            image.src = e.target.result;

            $('.uploadNode').before('<div class="col-lg-3 col-md-3  col-sm-3 col-xs-3 photoContainer"><img class="duoCover" src='+upCreate+'/><div class="touM"><div class="icon"><span class="iconfont lookUp" onclick="detailLook();">&#xe606;</span><span class="iconfont delete" onclick="deletePic();">&#xe6cf;</span> </div> </div> </div>');
        }
    };
}

album();//创建相册
showClassDetail();//进入班级照片
detailLook();
myClose3();
deletePic();
myClose4();
//uploadImg();

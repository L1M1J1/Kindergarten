var account="contral";/*账号*/
var password="12345678";/*密码*/

/*考勤构造函数*/
function kaoqin(time,name,starttime,endtime,state,job,department) {
    this.time=time;
    this.name=name;
    this.starttime=starttime;
    this.endtime=endtime;
    this.state=state;
    this.job=job;
    this.department=department;
}
/*考勤数组*/
var kaoqinArray=[];
kaoqinArray.push(new kaoqin("2015/02/08","吕嫣","08:30","18:00","正常","院长","院长办公室"));
kaoqinArray.push(new kaoqin("2015/02/08","郑雪","08:20","18:00","正常","后勤","生活部"));
kaoqinArray.push(new kaoqin("2015/02/08","匡良梦","09:20","18:00","异常","老师","教师部"));
kaoqinArray.push(new kaoqin("2015/02/08","黄嘉奇","08:15","18:00","正常","老师","教师部"));
kaoqinArray.push(new kaoqin("2015/02/08","舒浩东","08:45","18:00","异常","院长助理","院长办公室"));
kaoqinArray.push(new kaoqin("2015/02/08","明建","08:22","18:00","正常","院长助理","院长办公室"));

//职工
//职工构造函数
function Workers(name,age,sex,job,department,phoneNum,id,lifeNum,born,address,urgent,state) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.job=job;
    this.department=department;
    this.phoneNum=phoneNum;
    this.id=id;
    this.lifeNum=lifeNum;
    this.born=born;
    this.address=address;
    this.urgent=urgent;
    this.state=state;
}


//职工数组
var workers=[];
workers.push(new Workers("李保国",50,"女","园长","园长办公室","13280912321",0,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("王小七",22,"女","班主任","教学部","13028732081",1,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("李小六",18,"女","副班主任","教学部","13028732081",2,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("张小五",25,"女","生活老师","后勤部","13028732081",3,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("曾倩",20,"女","班主任","教学部","13028732081",4,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("李芳",21,"女","副班主任","教学部","13028732081",5,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("郑雪",19,"女","生活老师","后勤部","13028732081",6,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("林梦",21,"女","班主任","教学部","13028732081",7,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("张翠花",19,"女","副班主任","教学部","13028732081",8,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("武则天",24,"女","生活老师","后勤部","13028732081",9,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("郭采洁",23,"女","班主任","教学部","13028732081",10,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("林青霞",20,"女","副班主任","教学部","13028732081",11,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("张曼玉",21,"女","生活老师","后勤部","13028732081",12,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("杨颖",24,"女","班主任","教学部","13028732081",13,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("赵薇",18,"女","副班主任","教学部","13028732081",14,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("舒淇",26,"女","生活老师","后勤部","13028732081",15,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("黄玲",22,"女","班主任","教学部","13028732081",16,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("聂小倩",20,"女","副班主任","教学部","13028732081",17,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("王祖贤",23,"女","生活老师","后勤部","13028732081",18,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("关之琳",20,"女","班主任","教学部","13028732081",19,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("邱淑芬",20,"女","副班主任","教学部","13028732081",20,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("张敏",22,"女","生活老师","后勤部","13028732081",21,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("周芷若",21,"女","班主任","教学部","13028732081",22,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("郭碧婷",21,"女","副班主任","教学部","13028732081",23,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("章子怡",20,"女","生活老师","后勤部","13028732081",24,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("杨紫琼",23,"女","班主任","教学部","13028732081",25,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("黄蓉",19,"女","副班主任","教学部","13028732081",26,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));
workers.push(new Workers("郭襄",19,"女","生活老师","后勤部","13028732081",27,parseInt(Math.random()*500000000000000000+100000000000000000),"1992.09","成都高新区天府软件园","陈二狗 12389081293","在职"));

//学生
//学生构造函数
function Child(name,age,sex,classes,parent,phoneNum,relation,address,urgent,born,state) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.classes=classes;
    this.parent=parent;
    this.phoneNum=phoneNum;
    this.relation=relation;
    this.address=address;
    this.urgent=urgent;
    this.born=born;
    this.state=state;
}
// 班级数组
//小班
var duoduoClass=[];
var miaomiaoClass=[];
var huahuaClass=[];
// 中班
var daxiangClass=[];
var daishuClass=[];
var xiaoluClass=[];
// 大班
var zhangyuClass=[];
var shuimuClass=[];
var haitunClass=[];
// 年级数组
var smallClass=[duoduoClass,miaomiaoClass,huahuaClass];
var midClass=[daxiangClass,daishuClass,xiaoluClass];
var bigClass=[zhangyuClass,shuimuClass,haitunClass];

//小班
duoduoClass.push(new Child("张小明",3,"男","朵朵","张令","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
duoduoClass.push(new Child("李小婷",3,"女","朵朵","李尘","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
duoduoClass.push(new Child("宋小宝",3,"男","朵朵","宋若","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
duoduoClass.push(new Child("李连杰",3,"男","朵朵","李小楠","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
duoduoClass.push(new Child("李婵",3,"女","朵朵","李空虚","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));

miaomiaoClass.push(new Child("成龙",3,"男","苗苗","成寂寞","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
miaomiaoClass.push(new Child("周淑怡",3,"女","苗苗","周冉","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
miaomiaoClass.push(new Child("黄渤",3,"男","苗苗","黄中或","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
miaomiaoClass.push(new Child("张艺兴",3,"男","苗苗","张玲玲","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
miaomiaoClass.push(new Child("陈一发",3,"女","苗苗","陈自若","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));

huahuaClass.push(new Child("黄晨",3,"男","花花","黄新上","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
huahuaClass.push(new Child("张文婷",3,"女","花花","张另种","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
huahuaClass.push(new Child("刘才禹",3,"男","花花","刘说额","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
huahuaClass.push(new Child("石原里美",3,"女","花花","石敖汉","18780014153","父亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
huahuaClass.push(new Child("新垣结衣",3,"女","花花","新都","18780014153","母亲","成都市美洲花园","林更新 17219982878","2015.03","在读"));
//中班
daxiangClass.push(new Child("路飞",4,"男","大象","黄算","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daxiangClass.push(new Child("罗宾",4,"女","大象","张阿斯顿","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daxiangClass.push(new Child("娜美",4,"女","大象","刘法拉利","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daxiangClass.push(new Child("山治",4,"男","大象","石天使","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daxiangClass.push(new Child("乔巴",4,"男","大象","新哎","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));

daishuClass.push(new Child("佐助",4,"男","袋鼠","黄四大","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daishuClass.push(new Child("漩涡鸣人",4,"男","袋鼠","张阿朵","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daishuClass.push(new Child("漩涡博人",4,"男","袋鼠","刘忒热","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daishuClass.push(new Child("漩涡玖辛奈",4,"女","袋鼠","石枪王","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
daishuClass.push(new Child("自来也",4,"男","袋鼠","新却傲","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));

xiaoluClass.push(new Child("黄波",4,"男","小鹿","黄上单","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
xiaoluClass.push(new Child("樊艾薇",4,"女","小鹿","樊大神","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
xiaoluClass.push(new Child("丁红德",4,"男","小鹿","丁昂首","18780014153","母亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
xiaoluClass.push(new Child("耿浩洋",4,"男","小鹿","耿大俗","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
xiaoluClass.push(new Child("杨波",4,"男","小鹿","杨到达","18780014153","父亲","成都市美洲花园","林更新 17219982878","2014.03","在读"));
//大班
zhangyuClass.push(new Child("李芳",5,"男","章鱼","黄打算","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
zhangyuClass.push(new Child("王迪",5,"女","章鱼","张大神","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
zhangyuClass.push(new Child("杨涵",5,"男","章鱼","刘戴欧","18780014153","母亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
zhangyuClass.push(new Child("索隆",5,"女","章鱼","石阿杜","18780014153","母亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
zhangyuClass.push(new Child("坂田银时",5,"女","章鱼","新大俗","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));

shuimuClass.push(new Child("东东",5,"男","水母","黄雕塑","18780014153","母亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
shuimuClass.push(new Child("西西",5,"女","水母","张萨杜","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
shuimuClass.push(new Child("楠楠",5,"男","水母","刘大叔","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
shuimuClass.push(new Child("北北",5,"女","水母","石大搜","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
shuimuClass.push(new Child("石头",5,"女","水母","新杀","18780014153","母亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));

haitunClass.push(new Child("东邪",5,"男","海豚","黄阿杜","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
haitunClass.push(new Child("西毒",5,"女","海豚","张啊速","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
haitunClass.push(new Child("南帝",5,"男","海豚","刘袋子","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
haitunClass.push(new Child("北丐",5,"女","海豚","石啊丢","18780014153","母亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));
haitunClass.push(new Child("中神通",5,"女","海豚","新阿斯","18780014153","父亲","成都市美洲花园","林更新 17219982878","2013.03","在读"));



//部门
//部门构造函数;
function Department(name,principal,phoneNum,depict,person) {
    this.name=name;
    this.principal=principal;
    this.phoneNum=phoneNum;
    this.depict=depict;
    this.person=person;
}
//部门数组
var department=[];
department.push(new Department("园长办公室","园长","1238021938","1"));
department.push(new Department("教学部","王小七","13028732081","18"));
department.push(new Department("园长办公室","园长","13028732081","9"));

//班级构造函数
function Class(name,time,person,first,second,life,grade) {
     this.name=name;
     this.time=time;
     this.person=person;
     this.first=first;
     this.second=second;
     this.life=life;
     this.grade=grade;
}
//班级数组
var classes=[];
classes.push("朵朵班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("苗苗班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("花花班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("大象班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("袋鼠班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("小鹿班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("章鱼班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("水母班","2018.09.13","8","王小七","李小六","张小五","小班");
classes.push("海豚班","2018.09.13","8","王小七","李小六","张小五","小班");


//出勤构造函数
function Participation(time,name,inTime,outTime,state,job,department) {
        this.time=time;
        this.name=name;
        this.inTime=inTime;
        this.outTime=outTime;
        this.state=state;
        this.job=job;
        this.department=department;
}
//出勤数组
var participation=[];


//照片墙
//小班
var duoduoClassImg=["../img/pic1.jpg","../img/pic2.jpg","../img/pic3.jpg","../img/pic4.jpg","../img/pic5.jpg","../img/pic6.jpg"];
var miaomiaoClassImg=["../img/pic7.jpg","../img/pic8.jpg","../img/pic9.jpg","../img/pic10.jpg","../img/pic11.jpg","../img/pic12.jpg","../img/pic13.jpg"];
var huahuaClassImg=["../img/pic14.jpg","../img/pic15.jpg","../img/pic16.jpg","../img/pic17.jpg","../img/pic18.jpg","../img/pic19.jpg"];
//中班
var daxiangClassImg=["../img/pic20.jpg","../img/pic21.jpg","../img/pic22.jpg","../img/pic23.jpg","../img/pic24.jpg","../img/pic25.jpg","../img/pic25.jpg","../img/pic26.jpg"];
var daishuClassImg=["../img/pic27.jpg","../img/pic28.jpg","../img/pic29.jpg","../img/pic30.jpg","../img/pic31.jpg","../img/pic32.jpg","../img/pic33.jpg","../img/pic34.jpg"];
var xiaoluClassImg=["../img/pic35.jpg","../img/pic36.jpg","../img/pic37.jpg","../img/pic38.jpg","../img/pic39.jpg","../img/pic40.jpg"];
//大班
var zhangyuClassImg=["../img/pic41.jpg","../img/pic42.jpg","../img/pic43.jpg","../img/pic44.jpg","../img/pic45.jpg","../img/pic46.jpg","../img/pic47.jpg","../img/pic48.jpg"];
var shuimuClassImg=["../img/pic49.jpg","../img/pic50.jpg","../img/pic51.jpg","../img/pic52.jpg","../img/pic53.jpg","../img/pic54.jpg"];
var haitunClassImg=["../img/pic55.jpg","../img/pic56.jpg","../img/pic57.jpg","../img/pic58.jpg","../img/pic59.jpg","../img/pic60.jpg"];

var imgWall = [
    ["../images/pic1.jpg","../images/pic2.jpg","../images/pic3.jpg","../images/pic4.jpg","../images/pic5.jpg","../images/pic6.jpg"],
    ["../images/pic7.jpg","../images/pic8.jpg","../images/pic9.jpg","../images/pic10.jpg","../images/pic11.jpg","../images/pic12.jpg","../images/pic13.jpg"],
    ["../images/pic14.jpg","../images/pic15.jpg","../images/pic16.jpg","../images/pic17.jpg","../images/pic18.jpg","../images/pic19.jpg"],
    ["../images/pic20.jpg","../images/pic21.jpg","../images/pic22.jpg","../images/pic23.jpg","../images/pic24.jpg","../images/pic25.jpg","../images/pic25.jpg","../images/pic26.jpg"],
    ["../images/pic27.jpg","../images/pic28.jpg","../images/pic29.jpg","../images/pic30.jpg","../images/pic31.jpg","../images/pic32.jpg","../images/pic33.jpg","../images/pic34.jpg"],
    ["../images/pic35.jpg","../images/pic36.jpg","../images/pic37.jpg","../images/pic38.jpg","../images/pic39.jpg","../images/pic40.jpg"],
    ["../images/pic41.jpg","../images/pic42.jpg","../images/pic43.jpg","../images/pic44.jpg","../images/pic45.jpg","../images/pic46.jpg","../images/pic47.jpg","../images/pic48.jpg"],
    ["../images/pic49.jpg","../images/pic50.jpg","../images/pic51.jpg","../images/pic52.jpg","../images/pic53.jpg","../images/pic54.jpg"],
    ["../images/pic55.jpg","../images/pic56.jpg","../images/pic57.jpg","../images/pic58.jpg","../images/pic59.jpg","../images/pic60.jpg"]
]


//邮件
function Mail(getName,giveName,theme,time) {
    this.getName=getName;
    this.giveName=giveName;
    this.theme=theme;
    this.time=time;
}
// 邮件数组
var mail=[];
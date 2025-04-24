var son=Number(prompt("arrayda nechta son saqlamoqchisiz?"));
var arr=[];
for (let i = 1; i <= son; i++) {
    var num=Number(prompt(`${i} chi sonni kiriting:`));
    arr[arr.length]=num;
}
var middle=0;
for (let i = 0; i < arr.length; i++) {
    middle+=arr[i];
}
var result=middle/son;
alert(`sonlarning ortacha qiymati=${result}`);
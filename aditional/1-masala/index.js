var son=Number(prompt("arrayda nechta son saqlamoqchisiz?"));
var arr=[];
for (let i = 1; i <= son; i++) {
    var num=Number(prompt(`${i} chi sonni kiriting:`));
    arr[arr.length]=num;
}
alert(arr);

arr.reverse();
alert(arr);
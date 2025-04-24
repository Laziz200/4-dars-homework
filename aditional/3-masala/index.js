var son=Number(prompt("arrayda nechta son saqlamoqchisiz?"));
var arr=[];
for (let i = 1; i <= son; i++) {
    var num=Number(prompt(`${i} chi sonni kiriting:`));
    arr[arr.length]=num;
}
for (let i = 0; i < arr.length; i++) {
    var min=arr[i];
    if (min>=arr[i]) {
        min=arr[i];
    }
}
alert(min);
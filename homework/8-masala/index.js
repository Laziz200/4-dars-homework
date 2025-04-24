var son=Number(prompt("arrayda nechta son saqlamoqchisiz?"));
var arr=[];
for (let i = 1; i <= son; i++) {
    var num=Number(prompt(`${i} chi sonni kiriting:`));
    arr[arr.length]=num;
    
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2==0) {
         delete arr[i];
    }
}
console.log(arr);

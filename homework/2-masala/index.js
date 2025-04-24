var num=Number(prompt("son kiriting:"));
var sum=0;
while (num!=0) {
    var result=num%10;
    sum+=result;
    num=Math.floor(num/10);
}
alert(`siz kiritgan sonning raqamalari yigindisi=${sum}`)
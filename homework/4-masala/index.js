var str="salom hammaga nima gaplar qalay";
var sanoq=-1;
var arr=[];
for (let i = 0; i < str.length; i++) {
    sanoq++;
    if (str[i]==" ") {
        console.log(sanoq);
        arr[arr.length]=sanoq;
        sanoq=-1;
    }
    console.log(str[i]);
}
if (sanoq>0) {
    console.log(sanoq+1);
    arr[arr.length]=sanoq+1;
}
console.log(arr);

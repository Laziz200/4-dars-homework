let text = "sa3lom55";
let result = [];

for (let i = 0; i < text.length; i++) {
  if (!isNaN(text[i]) && text[i] !== " ") {
    result[result.length] = text[i];
  }
}

console.log(result); 
var num=Number(result);
console.log(typeof num);

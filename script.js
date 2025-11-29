let array = [2,3,"a","s","w","Pakistan","I Love You"];

let num = [];
let chr = [];
let str = [];

for(let elem of array){
      if(typeof elem === "number"){
        num.push(elem);
      } else if(typeof elem === "string" && elem.length === 1){
        chr.push(elem);
      }else if(typeof elem === "string"){
        str.push(elem)
      }

};

console.log(num);
console.log(chr);
console.log(str);



let array = [2,3,"a","s","w","Pakistan","I Love You"];

let num = [];
let chr = [];
let str = [];



console.log(num);
console.log(chr);
console.log(str);

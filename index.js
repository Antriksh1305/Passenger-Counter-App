"use strict"
const save = document.querySelector('#save');
const count = document.querySelector('#count');

let inc = 0;
let value = parseInt(count.innerHTML);

document.querySelector('#increment').addEventListener('click',()=>{
    inc += 1;
    console.log(inc);
})
document.querySelector('#decrement').addEventListener('click',()=>{
    if(inc > 0) inc -= 1;
    console.log(inc);
})

save.addEventListener('click',()=>{
    value = (value + inc);
    count.innerText = value;
    inc = 0;
})
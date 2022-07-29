const dis = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
let input='';
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(op, a, b){
    if(op=='+'){
        return add(a, b);
    }
    if(op=='-'){
        subtract(a,b);
    }
    if(op=='*'){
        multiply(a,b);
    }
    if(op=='/'){
        divide(a,b);
    }
}

nums.forEach(num=>{
    num.addEventListener('click',()=>{
        dis.textContent=input+`${num.id}`;
        input=dis.textContent;
        console.log(input);
    })
});
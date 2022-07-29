const dis = document.querySelector('.display');
const nums = document.querySelectorAll('.num');
const opes = document.querySelectorAll('.ope');
let counter= 0;
let input='';
let a=0;
let b;
let oper;
let operc=1;
let k=0;
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
    if(op=='add'){
        return add(a, b);
    }
    if(op=='sub'){
        return subtract(a,b);
    }
    if(op=='mul'){
       return multiply(a,b);
    }
    if(op=='div'){
       return divide(a,b);
    }
}

nums.forEach(num=>{
    num.addEventListener('click',()=>{
        dis.textContent=input+`${num.id}`;
        input=dis.textContent;
        console.log(input);
        operc=0;
    })
});

opes.forEach(op=>{
    op.addEventListener('click',()=>{
        if(operc==1 && op.id!='cle'){
            dis.textContent="Enter a number first.";
            return;
        }
        if(counter==0){
            a=a+Number(input);
            input='';
            counter++;
        }
        else{
            b=Number(input);
            input='';
        }
        if(op.id=='add' && k==1){
            a=operate(oper, a, b);
            dis.textContent='+';
        }
        if(op.id=='sub' && k==1){
            a=operate(oper, a, b);
            dis.textContent='-';
        }
        if(op.id=='mul' && k==1){
            a=operate(oper, a, b);
            dis.textContent='x';
        }
        if(op.id=='div' && k==1){
            a=operate(oper, a, b);
            dis.textContent='÷';
        }
        if(op.id!="equ" && op.id!="cle"){
        oper=op.id;
        }
        if(op.id=='add'){
            dis.textContent='+';
            k=1;
        }
        if(op.id=='sub'){
            dis.textContent='-';
            k=1;
        }
        if(op.id=='mul'){
            dis.textContent='x';
            k=1;
        }
        if(op.id=='div'){
            dis.textContent='÷';
            k=1;
        }
        if(op.id=='equ'){
            a=operate(oper, a, b)
            dis.textContent=a;
            counter= 0;
 input='';
 a=0;
 b;
 oper;
 operc=0;
 k=0;
        }
        if(op.id=="cle"){
             counter= 0;
 input='';
 a=0;
 b;
 oper;
 operc=1;
 k=0;
 dis.textContent='';
        }

        operc++;
    })
});
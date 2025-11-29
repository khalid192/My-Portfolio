let nAC=document.getElementById('nAC')
let ni=document.getElementById('n+/-')
let nb=document.getElementById('n%')
let no=document.getElementById('n/')
let n7=document.getElementById('n7')
let n8=document.getElementById('n8')
let n9=document.getElementById('n9')
let nX=document.getElementById('nX')
let n4=document.getElementById('n4')
let n5=document.getElementById('n5')
let n6=document.getElementById('n6')
let ns=document.getElementById('n-')
let n1=document.getElementById('n1')
let n2=document.getElementById('n2')
let n3=document.getElementById('n3')
let np=document.getElementById('n+')
let n0=document.getElementById('n0')
let nf=document.getElementById('n,')
let ne=document.getElementById('n=')

let output=document.getElementById('out')

let inputValue='';

function calcu(btn){
 const value=btn.textContent;
 if(value==='='&&output.textContent==='0'){;inputValue='0'}
 if(value==='AC'){
    inputValue='';
    output.textContent='0'
 }else if(value==='='){
    try{inputValue = eval(inputValue.replace('x','*').replace(',','.'))
        output.textContent=inputValue

    }catch{
        output.textContent='Error';
    }
    
 }else if(value==='%'){inputValue=inputValue/100;output.textContent=inputValue}
 else if(value==='+/-'){inputValue=-parseFloat(inputValue);output.textContent=inputValue}
 else{
    inputValue+=value
    output.textContent=inputValue
 }
}
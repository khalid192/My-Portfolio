let title=document.getElementById('title')
let price=document.getElementById('price')
let taxes=document.getElementById('taxes')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let count=document.getElementById('count')
let category=document.getElementById('category')
let total=document.getElementById('total')
let btncreate=document.getElementById('btncreate')

let mood='create'

function getTotal(){
    if(  price.value!=''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040'; // خضراء
    } else {
        total.innerHTML = '';
        total.style.background = ' #8f4747'; // حمرا
    }
}


let datpro;
if(localStorage.prodact !=null){
    datpro=JSON.parse(localStorage.prodact)
}else{
    datpro=[]
}


btncreate.onclick=function(){
    if(title.value!='',price.value!='',category.value!=''){
    let newpro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        count:count.value,
        category:category.value.toLowerCase(),
        total:total.innerHTML,    }
   
if(mood==='create')
    {if(newpro.count>1,newpro.count<100){
    for(let i=0;i<newpro.count;i++){
        datpro.push(newpro)
        

    }
}if(newpro.count>100){
     for(let i=0;i<100;i++){
        datpro.push(newpro)
        

    }
}else{
    datpro.push(newpro)
}
   
    

}else{
datpro[g]=newpro
 mood='create'
 count.style.display='flex'
 btncreate.innerHTML='create'

}








localStorage.setItem('prodact',JSON.stringify(datpro))
clearData()
showData()



}}



function clearData(){
title.value='';
price.value='';
taxes.value='';
ads.value='';
discount.value='';
count.value='';
category.value='';
total.innerHTML='';}



function showData(){
let table='';getTotal()

for(let i=0;i<datpro.length;i++){
    table+=`
 <tr>
    <td>${i+1}</td>
    <td>${datpro[i].title}</td>
    <td>${datpro[i].price}</td>
    <td>${datpro[i].taxes}</td>
    <td>${datpro[i].discount}</td>
    <td>${datpro[i].category}</td>
    <td>${datpro[i].total}</td>
    <td><button onclick="Fupdate(${i})" id="Update">Update</button></td>
    <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
 </tr>`
    
} 

document.getElementById('tbody').innerHTML=table;
let btndelet=document.getElementById('divdeletAll')



if(datpro.length>0){
    btndelet.innerHTML=`<button onclick="deleteALLL()" id="btnDelet">Delete All</button>`
}else{btndelet.innerHTML=``

}
}



showData()

function deleteData(i){
datpro.splice(i,1);
localStorage.prodact=JSON.stringify(datpro)
showData()
}



 function deleteALLL(){
    localStorage.removeItem('prodact')
    datpro.splice(0)
    showData()}

 function Fupdate(i){
title.value=datpro[i].title;
price.value=datpro[i].price;
taxes.value=datpro[i].taxes;
ads.value=datpro[i].ads;
discount.value=datpro[i].discount;
category.value=datpro[i].category;
getTotal()
count.style.display='none'
btncreate.innerHTML='Update';
window.scrollTo({
    top:0,
    behavior:"smooth"
})
mood='uptade'
g=i

 }






let serchmood='title'


 function serchbtnmood(id){
    let search=document.getElementById('search')
if (id==='btnsearchtitle'){serchmood='title';
    search.placeholder='search by title'
 }else{
serchmood='category'; search.placeholder='search by category';
 }
 search.focus;
 search.value='';
 showData()
 search.placeholder='Search By '+serchmood
}


function searchdata(value){
    let table='';
    if(serchmood=='title'){
       for(let i=0;i<datpro.length;i++){
       if(datpro[i].title.includes(value)){
        table+=`
 <tr>
    <td>${i}</td>
    <td>${datpro[i].title}</td>
    <td>${datpro[i].price}</td>
    <td>${datpro[i].taxes}</td>
    <td>${datpro[i].discount}</td>
    <td>${datpro[i].category}</td>
    <td>${datpro[i].total}</td>
    <td><button onclick="Fupdate(${i})" id="Update">Update</button></td>
    <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
 </tr>`




       }
       
       }



    }else{
 for(let i=0;i<datpro.length;i++){
       if(datpro[i].category.includes(value)){
        table+=`
 <tr>
    <td>${i}</td>
    <td>${datpro[i].title}</td>
    <td>${datpro[i].price}</td>
    <td>${datpro[i].taxes}</td>
    <td>${datpro[i].discount}</td>
    <td>${datpro[i].category}</td>
    <td>${datpro[i].total}</td>
    <td><button onclick="Fupdate(${i})" id="Update">Update</button></td>
    <td><button onclick="deleteData(${i})" id="Delete">Delete</button></td>
 </tr>`




       }
       
       }
    }

   document.getElementById('tbody').innerHTML=table;
}




 

















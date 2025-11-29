
let from=document.getElementById('from')
let to=document.getElementById('to')
  let chinge=document.getElementById('chinge')
  let number=document.getElementById('number')
  let pp1=document.getElementById('pp1')
    let pp2=document.getElementById('pp2')
      let pp3=document.getElementById('pp3')
        let pp4=document.getElementById('pp4')
          let pp5=document.getElementById('pp5')
            let pp6=document.getElementById('pp6')
              let pp7=document.getElementById('pp7')
                let pp8=document.getElementById('pp8')
    let pp11=document.getElementById('pp11')
    let pp21=document.getElementById('pp21')
      let pp31=document.getElementById('pp31')
        let pp41=document.getElementById('pp41')
          let pp51=document.getElementById('pp51')
            let pp61=document.getElementById('pp61')
              let pp71=document.getElementById('pp71')
                let pp81=document.getElementById('pp81')
   
    
fetch("https://api.fastforex.io/fetch-all?api_key=e7ce71bfd7-e264e2813f-t4j3nk")
  .then(res => res.json())
  .then(data =>{pp1.textContent=data.results.USD;pp2.textContent=data.results.EUR;pp3.textContent=data.results.JPY;pp4.textContent=data.results.GBP;
                pp5.textContent=data.results.AUD;pp6.textContent=data.results.CAD;pp7.textContent=data.results.CHF;pp8.textContent=data.results.CNY;
                pp11.textContent=data.results.USD;pp21.textContent=data.results.EUR;pp31.textContent=data.results.JPY;pp41.textContent=data.results.GBP;
                pp51.textContent=data.results.AUD;pp61.textContent=data.results.CAD;pp71.textContent=data.results.CHF;pp81.textContent=data.results.CNY;
    
    const list=(Object.keys(data.results));
    for(i=0;i<list.length;i++){
        document.getElementById('cry').innerHTML+=`<option value="${list[i]}">`;
        document.getElementById('cry1').innerHTML+=`<option value="${list[i]}">`
        
    };
   }
    
   )
function from1(){
  fetch("https://api.fastforex.io/fetch-all?api_key=e7ce71bfd7-e264e2813f-t4j3nk")
  .then(res => res.json())
  .then(data =>{console.log(data);let to6=to.value;
    let from6=from.value;if(from.value=='USD'){chinge.value=data.results[to6]*Number(number.value);}else{
    chinge.value=(Number(number.value)/data.results[from6])*data.results[to6];
    
  }



  })

}
let cont=document.getElementById('container');

window.addEventListener('scroll',myScroll)

function myScroll(){
let container=cont.getBoundingClientRect();
if(window.innerHeight>container.top){cont.classList.add('container')}
if(window.innerHeight<container.top-130){cont.classList.remove('container')}
console.log(window.innerHeight>container.top)
}



let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");
let check3 = document.getElementById("check3");
let check4 = document.getElementById("check4");
let check5 = document.getElementById("check5");
let check6 = document.getElementById("check6");
let check7 = document.getElementById("check7");
let check8 = document.getElementById("check8");
let check9 = document.getElementById("check9");
let content = document.getElementById("content");
let time = document.getElementById("time");
let won=document.getElementById('won')



let winsX = JSON.parse(localStorage.getItem('winsX')) || 0;

let winsO = JSON.parse(localStorage.getItem('winsO')) || 0;




let im = "X.png";
function FXO(img) {
  content.innerHTML = "you are playing";

  if (im === "X.png") {
    im = "O.png";
  } else {
    im = "X.png";
  }
  // تحقق من الصورة الحالية
  if (img.src.includes("poin.png")) {
    img.src = im; // غيّر للصورة ديال X
  }

  if (
    (check1.src.includes("X.png") &&
      check2.src.includes("X.png") &&
      check3.src.includes("X.png")) ||
    (check4.src.includes("X.png") &&
      check5.src.includes("X.png") &&
      check6.src.includes("X.png")) ||
    (check7.src.includes("X.png") &&
      check8.src.includes("X.png") &&
      check9.src.includes("X.png")) ||
    (check1.src.includes("X.png") &&
      check5.src.includes("X.png") &&
      check9.src.includes("X.png")) ||
    (check3.src.includes("X.png") &&
      check5.src.includes("X.png") &&
      check7.src.includes("X.png")) ||
    (check1.src.includes("X.png") &&
      check4.src.includes("X.png") &&
      check7.src.includes("X.png")) ||
    (check2.src.includes("X.png") &&
      check5.src.includes("X.png") &&
      check8.src.includes("X.png")) ||
    (check3.src.includes("X.png") &&
      check6.src.includes("X.png") &&
      check9.src.includes("X.png"))
  ) {
    
    winsX += 1;
    localStorage.setItem('winsX', JSON.stringify(winsX));
      document.getElementById('PX').innerHTML = winsX;
  
   

    content.innerText = "X:you are the winer";
    won.classList.remove('remov')
    let i = 4;
    setInterval(function () {
      content.innerText = `X you are the winer---.strat in: ${(i -= 1)}`;
    }, 1000);
    setTimeout(reload, 4000);
  }
  if (
    (check1.src.includes("O.png") &&
      check2.src.includes("O.png") &&
      check3.src.includes("O.png")) ||
    (check4.src.includes("O.png") &&
      check5.src.includes("O.png") &&
      check6.src.includes("O.png")) ||
    (check7.src.includes("O.png") &&
      check8.src.includes("O.png") &&
      check9.src.includes("O.png")) ||
    (check1.src.includes("O.png") &&
      check5.src.includes("O.png") &&
      check9.src.includes("O.png")) ||
    (check3.src.includes("O.png") &&
      check5.src.includes("O.png") &&
      check7.src.includes("O.png")) ||
    (check1.src.includes("O.png") &&
      check4.src.includes("O.png") &&
      check7.src.includes("O.png")) ||
    (check2.src.includes("O.png") &&
      check5.src.includes("O.png") &&
      check8.src.includes("O.png")) ||
    (check3.src.includes("O.png") &&
      check6.src.includes("O.png") &&
      check9.src.includes("O.png"))
  ) {
        winsO += 1;
    localStorage.setItem('winsO', JSON.stringify(winsO));
  document.getElementById('PO').innerHTML = winsO;
    content.innerText = "O you are the winer";
    won.classList.remove('remov')
    let i = 4;
    setInterval(function () {
      content.innerText = `O you are the winer---strat in: ${(i -= 1)}`;

    }, 1000);

    setTimeout(reload, 4000);
  }
  if(!check1.src.includes("poin.png") &&
      !check2.src.includes("poin.png") &&
      !check3.src.includes("poin.png")&&
    !check4.src.includes("poin.png") &&
      !check5.src.includes("poin.png") &&
      !check6.src.includes("poin.png") &&
    !check7.src.includes("poin.png") &&
      !check8.src.includes("poin.png") &&
      !check9.src.includes("poin.png")){
        setTimeout(reload,3000);
        content.innerText="Oh it's a draw"
        let i = 4;
    setInterval(function () {
      content.innerText = `Oh it's a draw: ${(i -= 1)}`;

    }, 1000);
      }
}

function reload() {
  location.reload();
}
 document.getElementById('PX').innerHTML=winsX
 document.getElementById('PO').innerHTML=winsO


 function RETURN(){
  localStorage.removeItem('winsO')
  localStorage.removeItem('winsX')
location.reload();
 }








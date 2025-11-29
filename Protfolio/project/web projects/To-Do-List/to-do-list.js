let input = document.getElementById("input");
let tb = document.getElementById("tb");

let taskray = JSON.parse(localStorage.getItem("tasks")) || [];

//add to storage
let mood='add';
function addTasks() {
  if (input.value != "" && mood=='add') {
    //get input-value and set in taskray
    taskray.push({ text: input.value, done: false });

    //add taskray in localstorage
    localStorage.setItem("tasks", JSON.stringify(taskray));

    //clear input after add
    input.value = "";

    input.placeholder = "Enter a new task...";

    showlist();
  } else {
    if (input.value.trim() === "") {
      input.placeholder = "⚠️ Please enter a task!";
    }
  }if(mood=='uppgrad'){
     taskray[vv].text=input.value
     localStorage.setItem("tasks", JSON.stringify(taskray));
    input.value = "";
    showlist()
    mood='add'
     document.getElementById('btn').innerHTML=`Add Task <img id="checklist" src="checklist.png">`
    
  }
}

//add taskray to the list
function showlist() {
  tb.innerText = "";
 removedelet()
  for (i = 0; i < taskray.length; i++) {
    let iconsrc = taskray[i].done ? "circle-check.svg" : "circle-notch.svg";
    let className = taskray[i].done ? "textching" : "";
    tb.innerHTML += `<li class="${className}">  <img onclick="check(${i})" id="icone" src="${iconsrc}"> 
     ${taskray[i].text} <div><img onclick="remove(${i})"  id="icone" src="minus.svg"> <img onclick="upgrad(${i})"  id="icone" src="update.svg"></div></li>`;
  }
}
showlist();

function remove(i) {
  taskray.splice(i, 1);
  localStorage.setItem("tasks", JSON.stringify(taskray));
  showlist();
  empty();

   
}

function check(i) {
  taskray[i].done = !taskray[i].done;

  localStorage.setItem("tasks", JSON.stringify(taskray));
  showlist();
}

function empty() {
  if (taskray == "") {
    tb.innerHTML = `<img id="img" src="empty.svg"> <h1>No tasks yet — create a new one!</h1> `;
  } 
}
empty();
 function deletall(){
  taskray.splice(0)
   localStorage.setItem("tasks", JSON.stringify(taskray));
   showlist()
   empty()
    removedelet()
 }

 function removedelet(){
  if(taskray.length==0){document.getElementById('deletall').classList.add('remove')}
 }


 function upgrad(i){
  input.value=taskray[i].text 
  mood='uppgrad'
  document.getElementById('btn').innerHTML=` Update  <img id="isone" src="update.svg">`
  vv=i
 }
//DOM Selector
const toggle=document.querySelector("#toggle_btn");
const icon=document.querySelector("#toggle_icon");

toggle.addEventListener("click",darkmodeToggle);
let darkmode=localStorage.getItem("darkmode");

//Darkmode Check

if(darkmode==="enabled"){
    darkmodeOn();
}

//Darkmode Toggle

function darkmodeToggle(){

  darkmode=localStorage.getItem("darkmode");
  if(darkmode=== "enabled"){
      darkmodeOff();
  }
  else{
      darkmodeOn();
  }
}

//Darkmode On
function darkmodeOn(){
   document.body.classList.add("dark");
   darkmode=true;
   localStorage.setItem("darkmode","enabled");
   icon.className="bx bx-moon";
}

//Darkmode Off
function darkmodeOff(){
    document.body.classList.remove("dark");
    darkmode=false;
    localStorage.setItem("darkmode",null);
    icon.className="bx bx-sun";
}

// todo js
const form = document.querySelector(".input-box");
const tasks = document.querySelector(".tasks");

// Add Task
form.addEventListener("submit",addTask);

function addTask(e){
    e.preventDefault();
    let value=document.querySelector("#task").value;
    localStorage.setItem(value,"to do list")
    if(value){
        let li = document.createElement("li");
        li.className = "task"
        li.innerHTML = `<span class="done">${value}</span><i class="bx bx-x remove"></i>`;
        tasks.appendChild(li);
        document.querySelector("#task").value="";
        
    };
    
}

// Remove Task
tasks.addEventListener("click",removeTask);
function removeTask(e){
    let rem = e.target;
    if(rem.classList.contains("remove")){
        localStorage.removeItem(rem.parentElement.firstElementChild.innerText);
        rem.parentElement.remove();

    }
    else if(rem.classList.contains("done")){
        rem.parentElement.style.backgroundColor = "#666";
        rem.style.textDecoration = "line-through";
        localStorage.setItem(rem.parentElement.innerText,"done");
    }
}
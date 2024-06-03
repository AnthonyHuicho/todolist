const inputBox =document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const selectAllBtn = document.getElementById("select-all-btn");
function addTask(){
    if(inputBox.value===''){
        alert("Debes ecribir algo!")

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        updateselectbutton();
    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ===  "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ===  "SPAN"){
        e.target.parentElement.remove();
        updateselectbutton();

    }
},false);

function selectAllTasks() {
    let items = listContainer.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("checked");
    }
}

function updateselectbutton() {
    const items = listContainer.getElementsByTagName("li");
    if (items.length > 0) {
        selectAllBtn.style.display = "block";
    } else {
        selectAllBtn.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", updateselectbutton);
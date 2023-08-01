const inputBOx = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBOx.value ===''){
        alert("YOU MUST ADD TASK..");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBOx.value;
        listContainer.appendChild(li);
        let span  = document.createElement("span");
        span.innerHTML ="\u00d7";  
        li.appendChild(span);

    }
    inputBOx.value = "";
    saveData();
    
}

listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
    
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
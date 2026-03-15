function addTask(){

let input = document.getElementById("taskInput")
let task = input.value

if(task === "") return

createTask(task)

saveData()

input.value = ""

}

function createTask(task){

let li = document.createElement("li")
li.innerText = task
li.onclick = function(){
li.classList.toggle("completed")
saveData()
}

let delBtn = document.createElement("button")
delBtn.innerText = "Delete"

delBtn.onclick = function(event){
event.stopPropagation()
li.remove()
saveData()
}
li.appendChild(delBtn)

document.getElementById("taskList").appendChild(li)

}

function saveData(){
localStorage.setItem("tasks", document.getElementById("taskList").innerHTML)
}

function showTasks(){
document.getElementById("taskList").innerHTML = localStorage.getItem("tasks")
}

showTasks()
document.getElementById("taskInput").addEventListener("keypress", function(event){
if(event.key === "Enter"){
addTask()
}
})
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskContainer = document.querySelector(".tasks-content");
let test = document.getElementsByClassName(".task-box");
let taskCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
window.onload = function(){
    theInput.focus();
};


theAddButton.onclick = function(){
    if(theInput.value === ""){
        alert("the input is Empty! ")
    }else{
        let noTaskMsg = document.querySelector(".no-tasks-message");
        if(document.body.contains(document.querySelector(".no-tasks-message"))){
            noTaskMsg.remove();
        }
       
        let mainSpan = document.createElement("span");
        let DeleteButton = document.createElement("span");
        let TextSpan = document.createElement("span");
        let mainText= document.createTextNode(theInput.value);
        let DeleteText= document.createTextNode("Delete");
        TextSpan.appendChild(mainText);
        TextSpan.classList.add("task-text")
        TextSpan.setAttribute("id","task-text");
        mainSpan.classList.add("task-box");
        DeleteButton.appendChild(DeleteText);
        DeleteButton.className="delete";
        mainSpan.appendChild(TextSpan);

        mainSpan.appendChild(DeleteButton);
        taskContainer.appendChild(mainSpan);

        let list = document.getElementById("task-text").value;
        console.log(list)
        theInput.value = "";
        theInput.focus();
        calculateTasks();
      
     
        back();
    }
    

};


document.addEventListener("click",function(e){
    if(e.target.className == "delete"){
        e.target.parentNode.remove();
        if(taskContainer.childElementCount == 0){
            createNoTasks();
            calculateTasks();
        }
    }
    if(e.target.classList.contains("task-box")){
        e.target.classList.toggle("finished");
        calculateTasks();
    }
})
function createNoTasks(){
    let msgSpan = document.createElement("span");
    let msgSpanText =document.createTextNode("No Tasks To Show");
    msgSpan.appendChild(msgSpanText);
    msgSpan.className = "no-tasks-message";
    taskContainer.appendChild(msgSpan);
};
function calculateTasks(){
    taskCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;


}
function checkof(){
    let boxs= document.querySelectorAll(".tasks-content .task-box");
    let lastbox= document.querySelectorAll(".tasks-content .task-box").childNodes;
    if(lastbox === boxs){
        alert("Error")
    }
}

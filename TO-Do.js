document.addEventListener("DOMContentLoaded", loadTasks); 
function addTask()
 { 
    let taskInput = document.getElementById("taskInput"); 
    let taskText = taskInput.value.trim(); 
    if (taskText === "")
         {
             alert("Please enter a task!");
              return; 
            } 
            let taskList = document.getElementById("taskList");
             let li = document.createElement("li");
              li.innerHTML = ` <span onclick="toggleComplete(this)">${taskText}</span> 
              <button class="delete-btn" onclick="removeTask(this)">X</button> `;
               taskList.appendChild(li); 
               saveTask(taskText); taskInput.value = ""; 
            }
                function toggleComplete(taskElement)
                 { 
                    taskElement.classList.toggle("completed");
                 } 
                 function removeTask(deleteBtn)
                  { 
                    let li = deleteBtn.parentElement; 
                    let taskText = li.querySelector("span").innerText; 
                    li.remove();
                     deleteTask(taskText);
                     } 
                     function saveTask(task)
                      {
                         let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
                         tasks.push(task); 
                         localStorage.setItem("tasks", JSON.stringify(tasks)); 
                        } function deleteTask(task)
                         { 
                            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                             tasks = tasks.filter(t => t !== task); 
                             localStorage.setItem("tasks", JSON.stringify(tasks)); 
                            } 
                            function loadTasks() 
                            {
                                 let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                                  let taskList = document.getElementById("taskList");
                                   tasks.forEach(task => { let li = document.createElement("li"); li.innerHTML = ` <span onclick="toggleComplete(this)">${task}</span>
                                    <button class="delete-btn" onclick="removeTask(this)">X</button> `; 
                                    taskList.appendChild(li); });
                                 } 

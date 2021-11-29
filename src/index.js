document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form").addEventListener("submit", (e) => {

    e.preventDefault();
    const taskText = e.target;

    addItem(taskText);
  })

  const addItem = (taskText) => {

    const btn = document.createElement("button");
    const p = document.createElement("p");
    const taskListR = document.getElementById("tasksR");
    const taskListY = document.getElementById("tasksY");
    const taskListG = document.getElementById("tasksG");
    const li = document.createElement("li")
    const priorityValue = document.getElementById("priority").value;

    btn.addEventListener("click", removeItem)

    p.textContent = `${taskText["dueDate"].value} ${taskText["new-task-description"].value}  `
    btn.style.fontSize = "24px";
    btn.textContent = "x";

    p.append(btn);

    li.appendChild(p);

    p.style.color = priorityValue;
    p.style.background = "black";

    if (priorityValue === "red") {

      taskListR.append(li)
    }
    else if (priorityValue === "yellow") {
      taskListY.append(li);
    }
    else if (priorityValue === "green") {
      taskListG.append(li);
    }

  }

  const removeItem = (e) => e.target.parentNode.parentNode.remove();

});


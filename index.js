console.log('online');

let tasksArray = [];

function addTask () {
	let input = document.getElementById("newTask").value;
	tasksArray.push(input);
	showTasks(input);
	// console.log(tasksArray);
	// console.log('button pressed');
}

function showTasks (newTask) {
	let li = document.createElement("LI");
	let span = document.createElement("SPAN");
	span.innerText = newTask;
	let deleteButton = document.createElement("BUTTON");
	deleteButton.innerText = "Delete Task";
	deleteButton.onclick = function() {
		this.parentElement.parentElement.removeChild(li);
		// console.log(span.innerText);
		deleteTask(span.innerText);
	}
	li.appendChild(span);
	li.appendChild(deleteButton);
	document.getElementById("myList").appendChild(li);

}

function deleteTask(task) {
	let taskToRemoveIndex = tasksArray.indexOf(task);
	tasksArray.splice(taskToRemoveIndex, 1);
	// console.log(tasksArray);
}

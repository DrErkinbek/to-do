const inputBox = document.getElementById('input-box');
const inputList = document.getElementById('list-container');

const today = new Date()
let datetime = today.toLocaleString();

document.getElementById("datetime").innerHTML = datetime;

const addTask = () => {
	if (inputBox.value === '') {
		alert("You should write something in inputbox");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		inputList.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = '';
	saveData();

}

inputList.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
}, false);

const saveData = () => localStorage.setItem("data", inputList.innerHTML);

const showTask = () => inputList.innerHTML = localStorage.getItem("data");

showTask();
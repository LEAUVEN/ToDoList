const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add 'click' event listener to each list item
  li.addEventListener('click', toggleTextColor);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', deleteTask);

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = '';
}

function toggleTextColor(event) {
  const listItem = event.target;
  const currentColor = window.getComputedStyle(listItem).color;
  const newColor = currentColor === 'rgb(0, 0, 0)' ? 'gray' : 'black';
  listItem.style.color = newColor;
  if (newColor === 'gray') {
    listItem.style.textDecoration = 'line-through';
  } else {
    listItem.style.textDecoration = 'none';
  }
}

function deleteTask(event) {
  const listItem = event.target.parentElement;
  taskList.removeChild(listItem);
}

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

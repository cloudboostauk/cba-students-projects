document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const categorySelect = document.getElementById('categorySelect');
  const timeInput = document.getElementById('timeInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    const category = categorySelect.value;
    const time = timeInput.value;

    if (task !== '') {
      createTaskItem(task, category, time);
      taskInput.value = '';
      timeInput.value = '';
    }
  });

  function createTaskItem(task, category, time) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <span>${task}</span>
      <span>${category}</span>
      <span>${time}</span>
      <button>Delete</button>
    `;

    taskList.appendChild(taskItem);

    const deleteBtn = taskItem.querySelector('button');
    deleteBtn.addEventListener('click', function() {
      taskItem.remove();
    });
  }
});

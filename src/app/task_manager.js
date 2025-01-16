// Get tasks from localStorage or initialize as empty array
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Handle task form submission
document.getElementById('taskForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const assignedTo = document.getElementById('assignedTo').value;
  const dueDate = document.getElementById('dueDate').value;
  const status = document.getElementById('status').value;
  const priority = document.getElementById('priority').value;
  const comments = document.getElementById('comments').value;

  // Add new task to the tasks array
  tasks.push({ assignedTo, dueDate, status, priority, comments });

  // Save updated tasks to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Reset form and alert user
  document.getElementById('taskForm').reset();
  alert('Task added successfully!');

  // Redirect to task list page
  window.location.href = 'task_list.html';
});

// Function to render tasks in the task list
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing list
  tasks.forEach((task, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.assignedTo}</td>
      <td>${task.status}</td>
      <td>${task.dueDate}</td>
      <td>${task.priority}</td>
      <td>${task.comments}</td>
      <td class="actions">
        <button class="edit-button" onclick="editTask(${index})">Edit</button>
        <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}

// Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated tasks to localStorage
  renderTasks();
}

// Function to edit task
function editTask(index) {
  const task = tasks[index];
  alert('Editing Task: ' + JSON.stringify(task)); // Implement task edit functionality if needed
}

// Render tasks when on task list page
if (document.getElementById('taskList')) {
  renderTasks();
}

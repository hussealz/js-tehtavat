// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// DOM elements
const ul = document.querySelector('ul');
const addBtn = document.querySelector('.add-btn');
const dialog = document.querySelector('dialog');
const form = dialog.querySelector('form');
const input = dialog.querySelector('input');

// Initialize todo list
function initTodoList() {
  ul.innerHTML = '';
  todoList.forEach(todo => {
    createTodoItem(todo);
  });
}

// Create a todo item element
function createTodoItem(todo) {
  const li = document.createElement('li');
  if (todo.completed) {
    li.classList.add('completed');
  }
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  checkbox.checked = todo.completed;
  
  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  
  // Add event listeners
  checkbox.addEventListener('change', () => handleCheckboxChange(todo.id));
  deleteBtn.addEventListener('click', () => handleDelete(todo.id));
}

// Handle checkbox change
function handleCheckboxChange(todoId) {
  const todo = todoList.find(item => item.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
    console.log('Updated todoList:', todoList);
    
    // Update visual state
    const li = document.querySelector(`#todo-${todoId}`).closest('li');
    if (todo.completed) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  }
}

// Handle delete button click
function handleDelete(todoId) {
  const todoIndex = todoList.findIndex(item => item.id === todoId);
  if (todoIndex !== -1) {
    // Remove from array
    todoList.splice(todoIndex, 1);
    console.log('Updated todoList:', todoList);
    
    // Remove from DOM
    const li = document.querySelector(`#todo-${todoId}`).closest('li');
    ul.removeChild(li);
  }
}

// Handle add item button click
addBtn.addEventListener('click', () => {
  dialog.showModal();
  input.focus();
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const newTask = input.value.trim();
  if (newTask) {
    // Create new todo item
    const newId = Math.max(...todoList.map(todo => todo.id)) + 1;
    const newTodo = {
      id: newId,
      task: newTask,
      completed: false
    };
    
    // Add to array
    todoList.push(newTodo);
    console.log('Updated todoList:', todoList);
    
    // Add to DOM
    createTodoItem(newTodo);
    
    // Close dialog and reset form
    dialog.close();
    form.reset();
  }
});

// Initialize the application
initTodoList();

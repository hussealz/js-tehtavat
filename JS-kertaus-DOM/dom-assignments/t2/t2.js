// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Buy milk',
    completed: true,
  },
  {
    id: 2,
    task: 'Buy eggs',
    completed: false,
  },
  {
    id: 3,
    task: 'Buy bread',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');

todoList.forEach(todo => {
  const li = document.createElement('li');
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `todo-${todo.id}`;
  if (todo.completed) {
    checkbox.checked = true;
  }
  
  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;
  
  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);
});
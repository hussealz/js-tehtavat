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
  const checked = todo.completed ? 'checked' : '';
  const html = `
    <li>
      <input type="checkbox" id="todo-${todo.id}" ${checked}>
      <label for="todo-${todo.id}">${todo.task}</label>
    </li>
  `;
  ul.insertAdjacentHTML('beforeend', html);
});
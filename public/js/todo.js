// Array of todos
let todos = [];

const generateUniqueId = () => {
    return Math.floor(Math.random() * Date.now());
}

const createTodoCard = (todo) => {
    const todoList = document.getElementById('todo-list');

    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-md', 'p-4', 'flex', 'items-center', 'justify-between', 'shadow-lg');
    card.dataset.id = todo.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-2');
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function() {
        todo.completed = this.checked;
        updateLocalStorage();
        if (this.checked) {
            card.classList.add('line-through', 'text-gray-500');
        } else {
            card.classList.remove('line-through', 'text-gray-500');
        }
    });

    const name = document.createElement('span');
    name.textContent = todo.name;
    name.classList.add('flex-grow', 'mr-2');
    if (todo.completed) {
        card.classList.add('line-through', 'text-gray-500');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('bg-black', 'text-white', 'px-4', 'py-1', 'rounded-md');
    deleteBtn.addEventListener('click', function() {
        card.remove();
        todos = todos.filter(item => item.id !== todo.id);
        updateLocalStorage();
    });

    card.appendChild(checkbox);
    card.appendChild(name);
    card.appendChild(deleteBtn);

    todoList.appendChild(card);
}
function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
        todos = JSON.parse(storedTodos);
        todos.forEach(todo => createTodoCard(todo));
    }
}

document.getElementById('add-todo-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoName = todoInput.value.trim();
    if (todoName !== '') {
        const todo = {
            id: generateUniqueId(),
            name: todoName,
            completed: false
        };
        todos.push(todo);
        createTodoCard(todo);
        updateLocalStorage();
        todoInput.value = '';
    }
});

loadTodos()
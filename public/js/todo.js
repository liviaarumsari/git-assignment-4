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

    card.innerHTML = `
        <input type="checkbox" class="mr-2" ${todo.completed ? 'checked' : ''}>
        <span class="flex-grow mr-2 ${todo.completed ? 'line-through text-gray-500' : ''}">${todo.name}</span>
        <button class="bg-black/90 text-white px-2 py-1 rounded-md hover:bg-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
    `;

    const checkbox = card.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        todo.completed = this.checked;
        updateLocalStorage();
        if (this.checked) {
            card.classList.add('line-through', 'text-gray-500');
        } else {
            card.classList.remove('line-through', 'text-gray-500');
        }
    });

    const deleteBtn = card.querySelector('button');
    deleteBtn.addEventListener('click', function() {
        card.remove();
        todos = todos.filter(item => item.id !== todo.id);
        updateLocalStorage();
    });

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
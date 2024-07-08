document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickEvent);

//event handlers

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
        input.value = '';
    }

};

function handleClickEvent(e) {
    if (e.target.name === 'check-button') {
        checkTodo(e);
    }
    if (e.target.name === 'delete-button') {
        deleteTodo(e);
    }
}

//helper functions 

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
      <span class="todo-item">${todo}</span>
      <button name="check-button">done</button>
      <button name="delete-button">delete</button>
      `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration === 'line-through') {
        item.style.textDecoration = 'none';
    } else {
        item.style.textDecoration = 'line-through';
    }
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}
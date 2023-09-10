

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let todos = [];
const TODO_KEY = "todos";



const saveToDos = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));

}

const deleteToDo = (event) => {
    const li = event.target.parentNode;
    todos = todos.filter(toDO => toDO.id != parseInt(li.id));
    li.remove();
    saveToDos();
}


const handleTodoForm = (event) => {
    event.preventDefault();

    const inputValue = todoInput.value;
    todoInput.value = "";

    const newObj = {
        id: Date.now(),
        text: inputValue,
    }

    todos.push(newObj);
    paintToDo(newObj);

    saveToDos();

}

const paintToDo = (obj) => {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = Date.now();

    const label = document.createElement("label");
    label.setAttribute("for", Date.now());


    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = obj.text;
    button.innerText = "X";
    li.id = obj.id;

    li.appendChild(input);
    li.appendChild(label);
    label.appendChild(span);
    // li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

const savedToDos = localStorage.getItem(TODO_KEY);



if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    
}

todoForm.addEventListener("submit", handleTodoForm);
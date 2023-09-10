const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#name");
const greeting = document.querySelector("#greeting");
const main = document.querySelector(".main");

const HIDDEN_CLASSNAME = "hidden";
const MAIN_CLASSNAME = "main";
const USERNAME_KEY = "username";

const handleForm = (event) => {
    event.preventDefault();

    const inputValue = loginInput.value;
    greeting.innerText =`Hello ${inputValue}!`;
    localStorage.setItem(USERNAME_KEY, inputValue);
    paintUser(inputValue);
}   




const paintUser = (user) => {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    greeting.innerText = `Hello ${user}`;
    main.classList.remove(HIDDEN_CLASSNAME);
    main.classList.add(MAIN_CLASSNAME);
}


const savedUser = localStorage.getItem(USERNAME_KEY);

if(savedUser){
    main.classList.remove(HIDDEN_CLASSNAME);
    main.classList.add(MAIN_CLASSNAME);
    paintUser(savedUser);
}else{
    console.log("asdfasdf");
    main.classList.remove(MAIN_CLASSNAME);
    main.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);  
    loginForm.addEventListener("submit", handleForm);
}
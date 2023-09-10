const logoutButton = document.querySelector(".logout>button");

const handleLogoutButton = (event) => {
    
    localStorage.removeItem("username");
    
    localStorage.removeItem("todos");
    location.reload();
    
}

logoutButton.addEventListener("click", handleLogoutButton);


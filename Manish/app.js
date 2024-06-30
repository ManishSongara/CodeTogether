// User constructor
function User(name, age) {
  this.name = name;
  this.age = age;
}

// Prototype method to return a greeting message
User.prototype.greet = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Array to store user objects
let users = [];

// Function to add a user
function addUser(name, age) {
  const user = new User(name, age);
  users.push(user);
  saveToLocalStorage();
  updateUserList();
}

// Function to update the displayed user list
function updateUserList() {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = user.greet();
    userList.appendChild(li);
  });
}

// Function to save users array to local storage
function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Function to load users array from local storage
function loadFromLocalStorage() {
  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    users = users.map((user) => new User(user.name, user.age)); // Recreate prototype chain
    updateUserList();
  }
}

// Event listener for form submission
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    addUser(name, age);
    document.getElementById("userForm").reset();
  });

// Load users from local storage on page load
window.addEventListener("load", loadFromLocalStorage);

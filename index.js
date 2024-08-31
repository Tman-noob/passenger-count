let countEl = document.getElementById("count-el")
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    saveEl.innerText += " " + count + " - ";
}



// let username = "Tim"
// let message = "You have tree new notifications"
// let messageToUser = message + ", " + username + "!";
// console.log(messageToUser)

// let name = "Tim"
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting)
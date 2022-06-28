
let images = document.querySelectorAll("img");

let fighterImage;

function getElementByClass(elements, name) {
    for (var i = elements.length; i--;) {
        var element = elements[i];
        if (element.getAttribute("class") == name) {
            return element;
        }
    }
}

fighterImage = getElementByClass(images, "fighter-fish");
// fighterImage = document.getElementByClass("fighter-fish");

let fighterImages = [
    "fighter_fish", 
    "fighter_fish_2"                    
];


let currentFighterIndex = 0;
fighterImage.addEventListener("click", () => {
    
    if (currentFighterIndex < fighterImages.length - 1) {
        currentFighterIndex += 1;
    } else { 
        currentFighterIndex = 0;
    }

    let fighterFileName = "images/" + fighterImages[currentFighterIndex] + ".jpg";

    fighterImage.setAttribute("src", fighterFileName);
    fighterImage.setAttribute("width", "300px");
    fighterImage.setAttribute("height", "300px");
});


let userMessage = document.querySelector("h3");
let changeUserButton = document.querySelector("button");


function setUserName() {
    let userName = prompt("Hello, what is your username?");

    if (!userName) {
        userMessage.textContent = "";
    } else {
        localStorage.setItem("user-name", userName);
        userMessage.textContent = "(Welcom to the site " + userName + "!)";
    }
}


if (!localStorage.getItem("user-name")) {
    setUserName()
} else {
    userName = localStorage.getItem("user-name");
    userMessage.textContent = "(Welcome back to the site " + userName + "!)";
}


changeUserButton.addEventListener("click", () => {
    setUserName();
});


// Submit button handling
buttons = document.querySelectorAll("button");
let submitButton = getElementByClass(buttons, "submit-button");
let lastUserOpinion = document.getElementById("last-opinion");
const userOpinion = document.querySelector("input");

if (localStorage.getItem(userName) != "") {
    console.log(localStorage.getItem(userName));
    lastUserOpinion.textContent = "Your last opinion on this was: " + userOpinion.value;
} else {
    lastUserOpinion.textContent = "";
}

submitButton.addEventListener("click", () => {
    if (!userOpinion.value) {
        return
    }

    event.preventDefault();
    localStorage.setItem(userName, userOpinion.value);
    lastUserOpinion.textContent = "Your last opinion on this was: " + userOpinion.value;

    userOpinion.value = "";
    alert("Your message was submitted!");
});

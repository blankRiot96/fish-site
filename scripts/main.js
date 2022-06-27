
let images = document.querySelectorAll("img");

let fighterImage;

for (var i = images.length; i--;) {
    var img = images[i];
    if (img.getAttribute("class") == "fighter-fish") {
        fighterImage = img;
        break;
    }
}

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


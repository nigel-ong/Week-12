const clickMeButton = document.querySelector(".click-me");
console.log(clickMeButton)

function clickevent()
{
    alert("You Clicked!");
}

clickMeButton.addEventListener("click", clickevent);
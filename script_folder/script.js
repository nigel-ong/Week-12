const clickMeButton = document.querySelector(".click-me");

function clickevent()
{
    alert("You're Clicked!");
    // clickMeButton.removeEventListener("click", clickevent);
}

clickMeButton.addEventListener("click", clickevent, {once:true});

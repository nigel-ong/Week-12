const clickMeButton = document.querySelector(".click-me");

function clickevent()
{
    alert("You're Clicked!");
    // clickMeButton.removeEventListener("click", clickevent);
}

// clickMeButton.addEventListener("click", clickevent, {once:true});
clickMeButton.addEventListener("click", clickevent);

function changeBGcolor()
{
    // css version in JS not the best
    // document.body.style.backgroundColor = "pink";
    
    document.body.classList.add("pink");
}
clickMeButton.addEventListener("click", changeBGcolor);
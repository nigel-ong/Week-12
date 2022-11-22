const clickMeButton = document.querySelector(".click-me");

function clickevent(event)
{
    console.log(event.target)
    alert("You Clicked");
    // clickMeButton.removeEventListener("click", clickevent);
}

// clickMeButton.addEventListener("click", clickevent, {once:true});
clickMeButton.addEventListener("click", clickevent);



function changeBGcolor()
{
    // css version in JS not the best
    // document.body.style.backgroundColor = "pink";

    document.body.classList.toggle('pink');
}
clickMeButton.addEventListener("click", changeBGcolor);

function changeText() 
{
    if (clickMeButton.textContent === "Click Me"){
        clickMeButton.textContent = "Clicked";
}
else if(clickMeButton.textContent === "Clicked") {
    clickMeButton.textContent = "Click Me";
}
}
clickMeButton.addEventListener("click", changeText);

function createAddButton(){

    const purpleButton = document.createElement('button');
    purpleButton.textContent = "Purple";
    purpleButton.addEventListener("mousemove", changeBGGreen)
    document.body.appendChild(purpleButton)
}   
clickMeButton.addEventListener('click', createAddButton);

function createAddPara(){

    const para = document.createElement('p');
    para.textContent = "My Para";
    para.addEventListener("mousemove", changeBGGreen)
    document.body.appendChild(para)
}   

clickMeButton.addEventListener('click', createAddPara, {once:true})

clickMeButton.addEventListener('click', createAddButton)

function changeBGGreen (event){
    console.log
    event.target.classList.add('green-background')
}

const buttonContainer = document.querySelector('.buttonContainer');
buttonContainer.addEventListener("mouseover", changeBGGreen)
buttonContainer.addEventListener("click", changeButtoncolor)
function changeButtoncolor (event)
{
    console.log(event.target)
    event.target.style.color = event.target.textContent;
}




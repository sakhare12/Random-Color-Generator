let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let div = document.querySelector(".head");
    let bodysec = document.querySelector(".bodysec");
    let legs = document.querySelectorAll(".legs");
    let hands = document.querySelectorAll(".hands");
    // console.log(legs);
    let randomColor = getRandomColor();
    let randomColorBody = getRandomColorBody();
    let randomColorLegs = getRandomColorLeg();
    let randomColorHands = getRandomColorHand();
    h1.innerText = randomColor;
    div.style.backgroundColor = randomColor;
    bodysec.style.backgroundColor = randomColorBody;
    for (let leg of legs) {
        leg.style.backgroundColor = randomColorLegs;
    }
    for (let hand of hands) {
        hand.style.backgroundColor = randomColorHands;
    }

})
function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `RGB(${red},${green},${blue})`;
    return color;
}
function getRandomColorBody() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `RGB(${red},${green},${blue})`;
    return color;
}
function getRandomColorLeg() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `RGB(${red},${green},${blue})`;
    return color;
}
function getRandomColorHand() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let color = `RGB(${red},${green},${blue})`;
    return color;
}
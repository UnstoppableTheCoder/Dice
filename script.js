var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").textContent = "Draw😊";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").textContent = "🚩Player1 wins";
} else {
    document.querySelector("h2").textContent = "🚩Player2 wins";
}

var refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', function() {
  location.reload();
});

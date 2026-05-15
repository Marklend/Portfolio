var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML = "<img src='./images/trophy.png' alt='trophy'>  Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player 2 Wins!  <img src='./images/trophy.png' alt='trophy'>";
} else {
    document.querySelector("h2").innerHTML = "It's a Draw!";
}
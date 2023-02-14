"use strict";
let secret = 8;
let score = 20;
let highscore = 0;
const reset = function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundImage = "";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  secret = 8;
};
document.querySelector(".again").addEventListener("click", reset);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //NO INPUT
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER";

    //WHEN THE GUESS IS RIGHT
  } else if (guess == secret) {
    document.querySelector(".number").textContent = secret;
    document.querySelector("body").style.backgroundImage = "url(220904.jpg)";
    document.querySelector(".message").textContent =
      "Prema Avvanni Neekendhuku Srujana💔💔💔";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Love Is Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Don't Love Me!!!!";
    }

    //WHEN THE GUESS IS LOW
  } else if (guess < secret) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Love Is Too Low!!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Don't Love Me!!!";
    }
  }
});

let guessList = [];
let correctNumber;

window.onload = () => {
  correctNumber = randomNumber();
  console.log(correctNumber);
  document.querySelector(".button-checkme").addEventListener("click", playGame);
  document.querySelector(".button-restart").addEventListener("click", restartGame);
};

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const playGame = () => {
  let newGuess = document.querySelector(".input-guess").value;
  console.log(newGuess);
  displayResults(newGuess);
  saveGuessHistory(newGuess);
  console.log(guessList);
  displayHistory(guessList);
};

const restartGame = () => {
  resetDialogDisplay();
};

const saveGuessHistory = (guess) => {
  guessList.push(guess);
};


const displayHistory = () => {
  let nextguess = guessList.length - 1;
  let list = "<ul class='guess-history'>";
  while (nextguess >= 0) {
    list += "<li class='new-history'>" + "You guessed " + guessList[nextguess] + "</li>";
    nextguess -= 1;
  }
  list += "</ul>";
  document.querySelector(".guess-history").innerHTML = list;
};

const displayResults = (newGuess) => {
  if (newGuess > correctNumber) {
    tooHigh();
  } else if (newGuess < correctNumber) {
    tooLow();
  } else if (newGuess == correctNumber) {
    youWon();
  }
};

const getDialog = (dialogType, text) => {
  let dialog = `<div class= ${dialogType == "wrong" ? "alert-wrong" : "alert-success"}>`;
  dialog += text;
  dialog += `</div>`;
  return dialog;
};

const resetDialogDisplay = () => {
  document.querySelector(".results").innerHTML = "";
};

const youWon = () => {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.querySelector(".results").innerHTML = dialog;
};

const tooHigh = () => {
  const text = "Your guess is too high!";
  let dialog = getDialog("wrong", text);
  document.querySelector(".results").innerHTML = dialog;
};

const tooLow = () => {
  const text = "Your guess is too low!";
  let dialog = getDialog("wrong", text);
  document.querySelector(".results").innerHTML = dialog;
};

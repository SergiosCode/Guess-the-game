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

// const displayHistory = (guessList) => {
//   for (let i = guessList.length - 1; i >= 0; i--) {
//     let guessListDialog = `<li class='new-history'>` + `You have guessed ${guessList[i]}!` + `</li>`;
//     document.querySelector(".guess-history").innerHTML = guessListDialog;
//   }
// };

// const displayHistory = (guess) => {
//   guess.forEach((item) => {
//     let guessListDialog = `<li class='new-history'>` + `You have guessed ${item}!` + `</li>`;
//     document.querySelector(".guess-history").innerHTML = guessListDialog;
//     let li = document.createElement("li");
//     li.innerHTML = guessListDialog;
//     document.querySelector(".guess-history").appendChild(document.createTextNode(guessListDialog));
//   });
// };

const displayHistory = (guess) => {
  guess.forEach((item) => {
    const ul = document.querySelector(".guess-history");
    const li = document.createElement("li");
    const children = ul.children.length + 1;
    let guessListDialog = `<li class='new-history'>` + `You have guessed ${item}!` + `</li>`;

    li.setAttribute("id", "element" + children);
    li.appendChild(document.createTextNode("Element " + children));
    ul.appendChild(li);
  });
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

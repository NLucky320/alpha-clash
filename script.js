// function play() {
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  // check matches or not
  if (playerPressed === expectedAlphabet) {
    console.log("you got a point");

    // get the current score
    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);

    // increase the score by 1
    const newScore = currentScore + 1;

    // show the updated score

    currentScoreElement.innerText = newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    console.log("you missed a life");
  }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();

  // set random generate alphabet to screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;

  // set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("play-ground");
  continueGame();
}

// function play() {
//   const homeSection = document.getElementById("home");
//   homeSection.classList.add("hidden");

//   const playGround = document.getElementById("play-ground");
//   playGround.classList.remove("hidden");
// }

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("your random alphabet", alphabet);

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

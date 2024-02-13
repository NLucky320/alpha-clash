function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet() {
  // create alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  // generate random index between 0-25
  const index = Math.round(Math.random() * 25);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}

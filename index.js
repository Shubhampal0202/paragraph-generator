const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");



function generateWords(wordLength) {
  let text = "";
  for (let i = 0; i < wordLength; i++) {
    let index = Math.floor(Math.random() * alphabets.length);
    text = text + alphabets[index];
  }
  return text;
}

button.addEventListener("click", () => {
  let sentence = "";
  let numberOfWords = Number(input.value);
  if (numberOfWords == 0 && !numberOfWords) {
    alert("Please Enter the words count(greater than zero)");
    return;
  }
  for (let j = 0; j < numberOfWords; j++) {
    let wordLength = Math.ceil(Math.random() * 12);

    sentence = sentence + generateWords(wordLength) + "  ";
  }
  input.value = "";
  let para = document.createElement("p");
  para.innerText = sentence;
  para.classList.add("bg");
  container.appendChild(para);
});

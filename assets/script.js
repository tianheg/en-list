$.getJSON("words.json", function (data) {
  let randomWords = data.data[Math.ceil(Math.random() * data.data.length) - 1];
  document.getElementById("words").innerText = randomWords.word;
  document.getElementById("exp").innerHTML = randomWords.exp;
});

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  location.reload()
})

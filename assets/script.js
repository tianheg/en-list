$.getJSON("words.json", function (data) {
    let randomWords = data.data[Math.ceil(Math.random() * data.data.length) - 1]; // get each JSON object
    console.log(data.data[0])
  // console.log(Math.ceil(Math.random() * data.length));
  document.getElementById("words").innerText = randomWords.word;
  document.getElementById("exp").innerHTML = randomWords.exp;
  // console.log(randomBlog.name);
  // console.log("https://www.yidajiabei.xyz/blog/" + randomBlog.link);
});

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
  location.reload()
})

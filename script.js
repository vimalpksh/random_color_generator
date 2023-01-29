const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const randomColor = function () {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  var colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
};

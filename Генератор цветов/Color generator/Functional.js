function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

document
  .getElementById("generateGradient")
  .addEventListener("click", function () {
    const color = getRandomColor();
    document.getElementById("colorBox").style.backgroundColor = color;
  });

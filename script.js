const button = document.getElementById("button");
var modals = document.querySelectorAll(".modal");
const body = document.querySelector("body");
const colors = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Gray",
  "Lime",
  "#ce4a2a",
  "#f2df98",
  "#449494",
  "#79a47e",
  "#b0c9bc",
  "#3c7474",
];
const bodyColors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#ce4a2a",
  "#f2df98",
  "#449494",
  "#79a47e",
  "#b0c9bc",
  "#3c7474",
];
//body initial styling
body.style.backgroundImage = "url('/hero.jpg')";
body.style.backgroundPositionX = "center";
body.style.backgroundSize = "cover";
body.style.backgroundRepeat = "no-repeat";

//ONCLICK EVENT ON BUTTON Click Me
button.addEventListener("click", () => {
  for (i = 0; i < modals.length; i++) {
    // Pick a random color from the array 'colors'.
    modals[i].style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    modals[i].style.transition = "0.5s";
    modals[i].style.transform = "scale(.9)";
  }
  //body background random colors
  body.style.transition = "0.5s";
  body.style.background =
    bodyColors[Math.floor(Math.random() * bodyColors.length)];
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function burgerClick() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function burgerImageDarken() {
  document.getElementById("burger-bar").src = "/Images/burger_bar_dark.png";
}

function burgerImageLighten() {
  document.getElementById("burger-bar").src = "/Images/burger_bar.png";
}

const navbar = document.getElementById("topnav");
const navbarCurrentElement = document.getElementById("active-nav-element");
const body = document.body;
body.addEventListener("scroll", () => {
  let [red, green, blue] = [242, 239, 248];
  let [fadeRed, fadeGreen, fadeBlue] = [51, 35, 94];
  let y = 0 + body.scrollTop / 500;
  y = y > 1 ? 1 : y;
  let [r, g, b] = [
    (fadeRed - red) * y + red,
    (fadeGreen - green) * y + green,
    (fadeBlue - blue) * y + blue,
  ].map(Math.round);

  navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  [red, green, blue] = [222, 215, 238];
  [fadeRed, fadeGreen, fadeBlue] = [17, 34, 71];

  [r, g, b] = [
    (fadeRed - red) * y + red,
    (fadeGreen - green) * y + green,
    (fadeBlue - blue) * y + blue,
  ].map(Math.round);

  navbarCurrentElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  [red, green, blue] = [51, 48, 63];
  [fadeRed, fadeGreen, fadeBlue] = [237, 237, 240];

  //more sudden fade half as long as the previous fade effects. halfway point aligns with previous fade halfway point
  y = (y - 0.5) * 2 + 1;
  y = y > 1 ? 1 : y;
  y = y < 0 ? 0 : y;

  [r, g, b] = [
    (fadeRed - red) * y + red,
    (fadeGreen - green) * y + green,
    (fadeBlue - blue) * y + blue,
  ].map(Math.round);

  for (var i = 0; i < navbar.children.length; i++) {
    var child = navbar.children[i];
    child.style.color = `rgb(${r}, ${g}, ${b})`;
  }

  document.getElementById("logo-small").style.opacity = 1 * y;
  document.getElementById("logo-long").style.opacity = 1 * y;
  document.getElementById("logo-small-dark").style.opacity = 1 + -1 * y;
  document.getElementById("logo-long-dark").style.opacity = 1 + -1 * y;
});

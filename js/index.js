// Your code goes here

// const navOver = document.querySelectorAll("nav a");

//! -------------- variable declarations --- */
const heading = document.querySelector(".logo-heading");
const image = document.querySelectorAll("img");
const nav = document.querySelectorAll("nav a");
const bodySel = document.querySelector("body");

//! ------------mousemove---------------- //
image[0].addEventListener("mousemove", title);

function title(e) {
  heading.textContent = `${e.offsetX}, ${e.offsetY}`;
  heading.style.color = "blue";
  heading.style.fontSize = "8rem";
}

image[0].addEventListener("mouseout", title2);
function title2() {
  heading.textContent = `Fun Bus`;
  heading.style.color = "black";
  heading.style.fontSize = "4rem";
}

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("mouseover", function () {
    nav[i].style.color = "red";
    nav[i].style.fontSize = "2rem";
    nav[i].style.transition = "0.3s";
  });
}

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("mouseout", function () {
    nav[i].style.color = "black";
    nav[i].style.fontSize = "1.5rem";
  });
}

//! ------------dblclick---------------- //

bodySel.addEventListener("dblclick", changeText);
function changeText() {
  bodySel.style.color = "red";
  bodySel.style.transition = "0.4s";
}

// bodySel.addEventListener("mouseout", changeText2);
// function changeText2() {
//   bodySel.style.color = "white";
// }

//! ------------keydown---------------- //

bodySel.addEventListener("keydown", () => {
  bodySel.style.backgroundColor = "grey";
  bodySel.style.color = "white";
  bodySel.style.transition = "0.3s";
  //   bodySel.innerText.style.color = "white";
});
bodySel.addEventListener("keyup", () => {
  bodySel.style.backgroundColor = "navy";
  bodySel.style.color = "white";
  bodySel.style.transition = "0.3s";
});

//! ------------scroll---------------- //
document.addEventListener("scroll", () => {
  image[0].setAttribute("src", "https://bit.ly/3q85wkT");
});

//! --------focus---------- //

image[1].addEventListener("click", () => {
  image[1].setAttribute(
    "src",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Alabama_in_United_States.svg/1200px-Alabama_in_United_States.svg.png"
  );
});
image[2].addEventListener("click", () => {
  image[2].setAttribute(
    "src",
    "https://www.tvovermind.com/wp-content/uploads/2017/12/Cameo-Dodgeball.jpg"
  );
});
image[3].addEventListener("click", () => {
  image[3].setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiIYYM8KuiWkiai8UolvXvoN7A1UF5cmboA&usqp=CAU"
  );
});

// TODO this function wasnt working.. I couldnt get every a tag in the nav bar to work //

// function navBackground() {
// }

// document.querySelectorAll("nav a").forEach((a) => (a.style.color = "red")

// .querySelectorAll("a")
//   .forEach((aColor) => (aColor.style.color = "#60b347"));

// TODO ----------------------------------------------

// Your code goes here
// MOUSEOVER
const nav = document.querySelector(".nav");
nav.addEventListener("mouseover", e => {
  e.target.style.color = "	 #80ffff";
});

// DBLCLICK

const logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", () => {
  console.log("Get on the BUS!!!");
});

// SCROLL
window.addEventListener("scroll", () => {
  //console.log("get your scroll on!!!");
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  console.log(scrollable);
});

// KEYDOWN
const body = document.querySelector("body");
const h2List = document.querySelectorAll("h2");
body.addEventListener("keydown", () => {
  // h2.style.color = "#7eff77"
  h2List.forEach(element => {
    element.style.color = "#7eff77";
  });
});

// WHEEL
const footer = document.querySelector("footer");
footer.addEventListener("wheel", function(e) {
  e.target.style.border = "1px solid pink";
});

// DRAG / DROP

// LOAD
window.addEventListener("load", () => {
  alert("Hop on the Fun BUS!");
});

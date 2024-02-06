var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Cat.png") {
    myImage.setAttribute("src", "images/Cat2.png");
  } else {
    myImage.setAttribute("src", "images/Cat.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Cats are cute, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Cats are cute, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};
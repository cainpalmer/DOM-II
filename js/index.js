// Your code goes here

// Buttons

const nav = document.querySelectorAll("a");
const btn = document.querySelectorAll(".btn");

// Content

const intro = document.querySelector(".intro");
const content = document.querySelectorAll(".text-content");
const conDes = document.querySelector(".content-destination");
const destination = document.querySelectorAll(".destination");

// Body

const header = document.querySelector(".main-navigation");
const body = document.querySelector("body");
const footer =document.querySelector(".footer");

// Events

nav[0].addEventListener("click", (event) => {
    event.target.style.color = "blue";
    nav.preventDefault();
});
nav[1].addEventListener("click", (event) => {
    event.target.style.color = "gold";
    nav.preventDefault();
});
nav[2].addEventListener("click", (event) => {
    event.target.style.color = "orange";
    nav.preventDefault();
});
nav[3].addEventListener("click", (event) => {
    event.target.style.color = "red";
    nav.preventDefault();
});
btn[0].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "cyan";
    btn.preventDefault();
});
btn[1].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "cyan";
    btn.preventDefault();
});
btn[2].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "cyan";
    btn.preventDefault();
});

intro.addEventListener("dblclick", (event) => {
    event.target.style.color = "grey";
});
content[0].addEventListener("click", (event) => {
    event.target.style.color = "white";
});
content[1].addEventListener("click", (event) => {
    event.target.style.color = "white";
});
conDes.addEventListener("click", (event) => {
    event.target.style.color = "white";
});
destination[0].addEventListener("click", (event) => {
    event.target.style.color = "white";
});
destination[1].addEventListener("click", (event) => {
    event.target.style.color = "white";
});
destination[2].addEventListener("click", (event) => {
    event.target.style.color = "white";
});

header.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "skyblue";
});
header.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "2.2rem";
});
body.addEventListener("wheel", (event) => {
    event.target.style.color = "navy";
    event.target.style.backgroundColor = "lightblue";
});
footer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "skyblue";
});
footer.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "2.2rem";
});
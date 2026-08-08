/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle=document.getElementById("themeToggle");
const themeIcon=themeToggle.querySelector("i");

const savedTheme=localStorage.getItem("theme");

if(savedTheme){

    document.body.classList.toggle("light",savedTheme==="light");

}else if(window.matchMedia("(prefers-color-scheme: light)").matches){

    document.body.classList.add("light");

}

updateThemeIcon();

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light":"dark"
    );

    updateThemeIcon();

});

function updateThemeIcon(){

    if(document.body.classList.contains("light")){

        themeIcon.className="fa-solid fa-sun";

    }else{

        themeIcon.className="fa-solid fa-moon";

    }

}

/* ==========================================
   TYPING EFFECT
========================================== */

const words=[
"Front-End Developer",
"HTML Developer",
"CSS Developer",
"JavaScript Developer"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function typeEffect(){

const currentWord=words[wordIndex];

if(!deleting){

typing.textContent=currentWord.substring(0,charIndex++);

if(charIndex>currentWord.length){

deleting=true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent=currentWord.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/* ==========================================
   SCROLL REVEAL
========================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll(".reveal").forEach(el=>{

observer.observe(el);

});

/* ==========================================
   BACK TO TOP
========================================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-180;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/* ==========================================
   HEADER SHADOW
========================================== */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

header.style.boxShadow=

window.scrollY>40

?

"0 8px 30px rgba(0,0,0,.15)"

:

"none";

});

/* ==========================================
   CURRENT YEAR
========================================== */

document.getElementById("year").textContent=

new Date().getFullYear();

/* ==========================================
   PREVENT RIGHT CLICK
========================================== */

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

/* ==========================================
   DISABLE F12
========================================== */

document.addEventListener("keydown",e=>{

if(

e.key==="F12" ||

(e.ctrlKey && e.shiftKey && e.key==="I") ||

(e.ctrlKey && e.shiftKey && e.key==="J") ||

(e.ctrlKey && e.key==="U")

){

e.preventDefault();

}

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.clear();

console.log(

"%cPortfolio Developed by Omar Qassem",

"font-size:20px;font-weight:bold;color:#2563eb"

);


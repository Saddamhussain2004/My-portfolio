// ================================
// Portfolio JavaScript
// ================================

// Welcome Message
window.onload = function () {
    console.log("Welcome to Saddam Hussain Portfolio");
};

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Active Navigation Link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Download Resume Button
const resumeBtn = document.querySelector("#home button");

resumeBtn.addEventListener("click", () => {
    alert("Resume will be added soon!");
});
const text = [
    "Full Stack Developer",
    "AI Learner",
    "React Developer",
    "Python Programmer"
];

let index = 0;
let charIndex = 0;
let typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < text[index].length) {
        typing.innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }

}

function eraseEffect() {

    if (charIndex > 0) {
        typing.innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index++;
        if (index >= text.length) {
            index = 0;
        }
        setTimeout(typeEffect, 300);
    }

}

typeEffect();
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "🌞";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});
const form = document.getElementById("contact-form");
const result = document.getElementById("result");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    });

    const data = await response.json();

    if (data.success) {
        result.innerHTML = "✅ Message Sent Successfully!";
        result.style.color = "#00ff99";
        form.reset();
    } else {
        result.innerHTML = "❌ Failed to send message!";
        result.style.color = "red";
    }

    sendBtn.innerHTML = "Send";
    sendBtn.disabled = false;
});
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
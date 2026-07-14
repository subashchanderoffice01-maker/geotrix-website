

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}




const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {

    const link = dropdown.querySelector("a");

    link.addEventListener("click", function (e) {

        if (window.innerWidth <= 768) {

            e.preventDefault();

            
            dropdowns.forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });

            
            dropdown.classList.toggle("active");
        }

    });

});



document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function () {

        if (!this.parentElement.classList.contains("dropdown")) {
            navMenu.classList.remove("active");
        }

    });

});



const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function showSlide(index) {

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}

function prevSlide() {

    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide(current);
}

if (next) {
    next.addEventListener("click", nextSlide);
}

if (prev) {
    prev.addEventListener("click", prevSlide);
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        current = index;
        showSlide(current);

    });

});

setInterval(nextSlide, 5000);
const scriptURL = "https://script.google.com/macros/s/AKfycby6-IaVxIhKOwYNzXpvB-Iv0gmcwtfJn2lHkogeCbvQDxHYKCrRkyKU1TbEpQ8ubLHV/exec";

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    fetch(scriptURL,{
        method:"POST",
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(response=>{

        alert("Message Sent Successfully!");

        document.getElementById("contactForm").reset();

    })
    .catch(error=>{

        alert("Something went wrong.");

    });

});

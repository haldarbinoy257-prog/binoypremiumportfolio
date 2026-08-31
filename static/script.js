// ================= TYPING EFFECT =================
const text = "Aspiring Software Engineer• Problem Solver";
let i = 0;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 35);
  }
}
window.addEventListener("load", typeEffect);

// ================= SCROLL REVEAL =================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".glass-card");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("active");
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ================= MOUSE GLOW =================
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
// ================= AUTO CERTIFICATE SLIDER =================
window.addEventListener("load", () => {
  const slider = document.getElementById("certSlider");
  if (!slider) return;

  let scrollAmount = 0;

  function autoSlide() {
    scrollAmount += 240; // card width move

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }

    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }

  setInterval(autoSlide, 2500); // speed control
});
// ================= SMOOTH SCROLL =================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ================= ACTIVE LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

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
// ================= HAMBURGER TOGGLE =================
const hamburger = document.getElementById("hamburger");
const navLinksBox = document.getElementById("navLinks");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinksBox.classList.toggle("show");
  });
}

// ================= SCROLL PROGRESS =================
window.addEventListener("scroll", () => {
  const progress = document.querySelector(".scroll-progress");
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (scrollTop / height) * 100;
  progress.style.width = scrolled + "%";
});

// ================= NAVBAR GLOW =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ================= SECTION REVEAL PRO =================

function revealOnScrollPro() {
  const trigger = window.innerHeight - 80;

  revealSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {
      sec.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScrollPro);
window.addEventListener("load", revealOnScrollPro);
// ===== SAFE REVEAL INIT =====
window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.add("reveal-start");
  });
});
// ================= SAFE REVEAL v2 =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScrollSafe() {
  const triggerBottom = window.innerHeight - 80;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScrollSafe);
window.addEventListener("load", revealOnScrollSafe);
// ================= TYPING EFFECT =================
const typingText = [
  "Aspiring Software Engineer 🚀",
  "Problem Solver 💡"
];

let tIndex = 0;
let cIndex = 0;
let isDeleting = false;

function typeEffect(){
  const el = document.getElementById("typing");
  if(!el) return;

  const current = typingText[tIndex];

  if(isDeleting){
    el.textContent = current.substring(0, cIndex--);
  }else{
    el.textContent = current.substring(0, cIndex++);
  }

  if(!isDeleting && cIndex === current.length){
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if(isDeleting && cIndex === 0){
    isDeleting = false;
    tIndex = (tIndex + 1) % typingText.length;
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

window.addEventListener("load", typeEffect);
// ================= LIGHTBOX =================
const certImages = document.querySelectorAll(".cert-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

certImages.forEach(img=>{
  img.addEventListener("click", ()=>{
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if(closeLightbox){
  closeLightbox.addEventListener("click", ()=>{
    lightbox.style.display = "none";
  });
}

window.addEventListener("click", e=>{
  if(e.target === lightbox){
    lightbox.style.display = "none";
  }
});
// ================= JOURNEY TOGGLE =================
function toggleJourney(){
  const content = document.getElementById("journeyContent");
  const arrow = document.getElementById("journeyArrow");

  if(!content) return;

  content.classList.toggle("show");
  arrow.classList.toggle("rotate");
} 
/* =========================================================
   🚀 PREMIUM 3D HERO — MOUSE PARALLAX
   ADD THIS AT THE VERY END OF script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".premium-home");
  const visual = document.querySelector(".hero-visual");
  const photoCard = document.querySelector(".hero-photo-card");

  const orbitOne = document.querySelector(".orbit-one");
  const orbitTwo = document.querySelector(".orbit-two");

  const codeOne = document.querySelector(".code-one");
  const codeTwo = document.querySelector(".code-two");
  const codeThree = document.querySelector(".code-three");


  /* ================= CHECK ELEMENTS ================= */

  if (!hero || !visual || !photoCard) return;


  /* ================= MOUSE 3D MOVEMENT ================= */

  hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left;

    const mouseY =
      e.clientY - rect.top;


    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;


    const rotateY =
      (mouseX - centerX) /
      centerX *
      8;


    const rotateX =
      (centerY - mouseY) /
      centerY *
      7;


    /* ================= PROFILE ================= */

    photoCard.style.transform =
      `
      translateY(-5px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      `;


    /* ================= ORBITS ================= */

    if (orbitOne) {

      orbitOne.style.transform =
        `
        rotateX(65deg)
        rotateZ(${rotateY * 2}deg)
        translateX(${rotateY}px)
        `;

    }


    if (orbitTwo) {

      orbitTwo.style.transform =
        `
        rotateX(65deg)
        rotateY(${rotateX * 2}deg)
        rotateZ(${rotateY}deg)
        `;

    }


    /* ================= FLOATING CARDS ================= */

    if (codeOne) {

      codeOne.style.transform =
        `
        translateZ(100px)
        translate(
          ${rotateY * -2}px,
          ${rotateX * -2}px
        )
        rotateY(-12deg)
        `;

    }


    if (codeTwo) {

      codeTwo.style.transform =
        `
        translateZ(120px)
        translate(
          ${rotateY * 2}px,
          ${rotateX * 2}px
        )
        rotateY(12deg)
        `;

    }


    if (codeThree) {

      codeThree.style.transform =
        `
        translateZ(130px)
        translate(
          ${rotateY * 1.5}px,
          ${rotateX * 1.5}px
        )
        rotateZ(8deg)
        `;

    }

  });


  /* ================= RESET WHEN MOUSE LEAVES ================= */

  hero.addEventListener("mouseleave", () => {

    photoCard.style.transform =
      "";

    if (orbitOne) {

      orbitOne.style.transform =
        "";

    }

    if (orbitTwo) {

      orbitTwo.style.transform =
        "";

    }

    if (codeOne) {

      codeOne.style.transform =
        "";

    }

    if (codeTwo) {

      codeTwo.style.transform =
        "";

    }

    if (codeThree) {

      codeThree.style.transform =
        "";

    }

  });


  /* ================= MOBILE SAFETY ================= */

  if (window.innerWidth <= 768) {

    hero.style.perspective =
      "none";

  }

});
/* =========================================================
   🚀 FINAL PREMIUM PAGE ORDER + NAVIGATION
   ADD THIS AT THE VERY END OF script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     1. GET PREMIUM SECTIONS
  ======================================================= */

  const home = document.getElementById("premium-home");
  const about = document.getElementById("premium-about");
  const skills = document.getElementById("premium-skills");
  const projects = document.getElementById("premium-projects");
  const experience = document.getElementById("premium-experience");
  const clients = document.getElementById("premium-clients");
  const certificates = document.getElementById("premium-certificates");
  const contact = document.getElementById("premium-contact");

  const bubbles = document.querySelector(".bubbles");


  /* =======================================================
     2. MOVE PREMIUM PAGES INTO BODY
  ======================================================= */

  const premiumPages = [
    home,
    about,
    skills,
    projects,
    experience,
    clients,
    certificates,
    contact
  ].filter(Boolean);


  premiumPages.forEach(page => {

    document.body.appendChild(page);

  });


  /* =======================================================
     3. MOVE HOME TO THE VERY TOP
  ======================================================= */

  if(home){

    if(bubbles){

      bubbles.insertAdjacentElement(
        "afterend",
        home
      );

    }else{

      document.body.prepend(home);

    }

  }


  /* =======================================================
     4. PREMIUM PAGE ORDER
  ======================================================= */

  const correctOrder = [
    home,
    about,
    skills,
    projects,
    experience,
    clients,
    certificates,
    contact
  ].filter(Boolean);


  correctOrder.forEach(page => {

    document.body.appendChild(page);

  });


  /* =======================================================
     5. PREMIUM NAVIGATION
  ======================================================= */

  const links =
    document.querySelectorAll(
      '.nav-link[href^="#premium-"]'
    );


  links.forEach(link => {

    link.addEventListener("click", function(e){

      const targetId =
        this.getAttribute("href");

      const target =
        document.querySelector(targetId);


      if(!target) return;


      e.preventDefault();


      target.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });


      /* ================= MOBILE MENU CLOSE ================= */

      const navBox =
        document.getElementById("navLinks");


      if(navBox){

        navBox.classList.remove("show");

      }

    });

  });


  /* =======================================================
     6. ACTIVE NAV LINK ON SCROLL
  ======================================================= */

  const sections =
    correctOrder;


  function updateActiveNav(){

    let currentSection = "";

    const scrollPosition =
      window.scrollY + 180;


    sections.forEach(section => {

      if(
        scrollPosition >= section.offsetTop
      ){

        currentSection =
          section.id;

      }

    });


    links.forEach(link => {

      link.classList.remove("active");


      if(
        link.getAttribute("href") ===
        "#" + currentSection
      ){

        link.classList.add("active");

      }

    });

  }


  window.addEventListener(
    "scroll",
    updateActiveNav,
    {
      passive:true
    }
  );


  window.addEventListener(
    "load",
    updateActiveNav
  );


  /* =======================================================
     7. HOME ACTIVE ON INITIAL LOAD
  ======================================================= */

  if(
    window.scrollY < 150 &&
    home
  ){

    links.forEach(link => {

      link.classList.remove("active");

    });


    const homeLink =
      document.querySelector(
        '.nav-link[href="#premium-home"]'
      );


    if(homeLink){

      homeLink.classList.add("active");

    }

  }


  /* =======================================================
     8. ESC KEY — CLOSE MOBILE MENU
  ======================================================= */

  document.addEventListener(
    "keydown",
    e => {

      if(e.key === "Escape"){

        const navBox =
          document.getElementById("navLinks");


        if(navBox){

          navBox.classList.remove("show");

        }

      }

    }
  );


  /* =======================================================
     9. CLOSE MOBILE MENU AFTER OUTSIDE CLICK
  ======================================================= */

  document.addEventListener(
    "click",
    e => {

      const navBox =
        document.getElementById("navLinks");

      const hamburger =
        document.getElementById("hamburger");


      if(
        !navBox ||
        !hamburger
      ) return;


      if(
        !navBox.contains(e.target) &&
        !hamburger.contains(e.target)
      ){

        navBox.classList.remove("show");

      }

    }
  );


});
/* =========================================================
   🌌 PREMIUM 3D PARTICLE FIELD
   ADD THIS AT THE VERY END OF script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".premium-home");

  if (!hero) return;


  /* ================= CANVAS ================= */

  const canvas = document.createElement("canvas");

  canvas.className = "hero-particle-canvas";

  hero.insertBefore(
    canvas,
    hero.firstChild
  );

  const ctx = canvas.getContext("2d");


  /* ================= SETTINGS ================= */

  let particles = [];

  const mouse = {
    x: null,
    y: null,
    radius: 140
  };


  function resizeCanvas(){

    canvas.width =
      hero.clientWidth;

    canvas.height =
      hero.clientHeight;

  }


  resizeCanvas();

  window.addEventListener(
    "resize",
    resizeCanvas
  );


  /* ================= MOUSE ================= */

  hero.addEventListener(
    "mousemove",
    e => {

      const rect =
        hero.getBoundingClientRect();

      mouse.x =
        e.clientX - rect.left;

      mouse.y =
        e.clientY - rect.top;

    }
  );


  hero.addEventListener(
    "mouseleave",
    () => {

      mouse.x = null;
      mouse.y = null;

    }
  );


  /* ================= PARTICLE ================= */

  class Particle {

    constructor(){

      this.x =
        Math.random() *
        canvas.width;

      this.y =
        Math.random() *
        canvas.height;

      this.z =
        Math.random() *
        1;

      this.size =
        Math.random() * 1.8 + .5;

      this.speedX =
        (Math.random() - .5) * .25;

      this.speedY =
        (Math.random() - .5) * .25;

      this.opacity =
        Math.random() * .7 + .2;

    }


    update(){

      this.x +=
        this.speedX;

      this.y +=
        this.speedY;


      /* ================= WRAP ================= */

      if(this.x < 0)
        this.x = canvas.width;

      if(this.x > canvas.width)
        this.x = 0;

      if(this.y < 0)
        this.y = canvas.height;

      if(this.y > canvas.height)
        this.y = 0;


      /* ================= MOUSE REPULSION ================= */

      if(
        mouse.x !== null &&
        mouse.y !== null
      ){

        const dx =
          this.x - mouse.x;

        const dy =
          this.y - mouse.y;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );


        if(
          distance <
          mouse.radius
        ){

          const force =
            (mouse.radius - distance)
            / mouse.radius;

          const angle =
            Math.atan2(dy, dx);


          this.x +=
            Math.cos(angle)
            * force
            * 2;

          this.y +=
            Math.sin(angle)
            * force
            * 2;

        }

      }

    }


    draw(){

      ctx.beginPath();

      ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(
          0,
          245,
          255,
          ${this.opacity}
        )`;

      ctx.shadowBlur = 12;

      ctx.shadowColor =
        "rgba(0,245,255,.8)";

      ctx.fill();

      ctx.shadowBlur = 0;

    }

  }


  /* ================= CREATE PARTICLES ================= */

  function createParticles(){

    particles = [];

    const amount =
      window.innerWidth < 700
      ? 45
      : 90;


    for(
      let i = 0;
      i < amount;
      i++
    ){

      particles.push(
        new Particle()
      );

    }

  }


  createParticles();


  /* ================= CONNECT PARTICLES ================= */

  function connectParticles(){

    const maxDistance =
      window.innerWidth < 700
      ? 80
      : 115;


    for(
      let a = 0;
      a < particles.length;
      a++
    ){

      for(
        let b = a + 1;
        b < particles.length;
        b++
      ){

        const dx =
          particles[a].x -
          particles[b].x;

        const dy =
          particles[a].y -
          particles[b].y;

        const distance =
          Math.sqrt(
            dx * dx +
            dy * dy
          );


        if(
          distance <
          maxDistance
        ){

          const opacity =
            1 -
            distance /
            maxDistance;


          ctx.beginPath();

          ctx.moveTo(
            particles[a].x,
            particles[a].y
          );

          ctx.lineTo(
            particles[b].x,
            particles[b].y
          );

          ctx.strokeStyle =
            `rgba(
              0,
              180,
              255,
              ${opacity * .13}
            )`;

          ctx.lineWidth =
            .6;

          ctx.stroke();

        }

      }

    }

  }


  /* ================= ANIMATION ================= */

  function animate(){

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    particles.forEach(
      particle => {

        particle.update();

        particle.draw();

      }
    );


    connectParticles();

    requestAnimationFrame(
      animate
    );

  }


  animate();


  /* ================= VISIBILITY OPTIMIZATION ================= */

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            canvas.style.opacity =
              "1";

          }else{

            canvas.style.opacity =
              "0";

          }

        });

      }
    );


  observer.observe(hero);

});
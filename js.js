const slides = [
  {
    img: "./img/11-1.jpg",
    title: "Introduction to LOUIS XIII",
    text: "Let yourself be transported by the prestigious world of LOUIS XIII, an exceptional cognac born of the encounter between time and savoir-faire."
  },
  {
    img: "./img/11-2.jpg",
    title: "The Experience",
    text: "Discover the world of LOUIS XIII through immersive tastings, art, and refinement—crafted over generations."
  },
  {
    img: "./img/11-3.webp",
    title: "Rare Cask 42.6",
    text: "A miracle of time and nature, Rare Cask is a singular expression of LOUIS XIII’s excellence and legacy."
  }
];

let currentIndex = 0;

function updateSlide() {
  document.getElementById("slide-img").src = slides[currentIndex].img;
  document.getElementById("slide-info").innerHTML = `
    <h2>${slides[currentIndex].title}</h2>
    <p>${slides[currentIndex].text}</p>
    <button class="discover">DISCOVER NOW</button>
  `;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide();
}
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const scrollRevealOptions = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};
const scrollRevealOptionss = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};
ScrollReveal().reveal(".main h3", {
  ...scrollRevealOptionss,
  delay:500,
});
ScrollReveal().reveal(".main p", {
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".slide", {
  ...scrollRevealOption,
  delay:200,
});
ScrollReveal().reveal(".slide h2", {
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".slide p", {
  ...scrollRevealOption,
  delay:1000,
});
ScrollReveal().reveal(".discover", {
  ...scrollRevealOption,
  delay:1500,
});
ScrollReveal().reveal(".process-info h3", {
  ...scrollRevealOptions,
  delay:500,
});
ScrollReveal().reveal(".process-info p", {
  ...scrollRevealOptions,
  delay:1000,
});
ScrollReveal().reveal(".learn", {
  ...scrollRevealOptions,
  delay:1000,
});
ScrollReveal().reveal(".footers", {
  ...scrollRevealOptions,
  delay:1000,
});



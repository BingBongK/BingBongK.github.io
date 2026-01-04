const scene = document.getElementById("scene");
const chest = document.getElementById("chest");

// Overlay elements
const celebrate = document.getElementById("celebrate");
const closeCelebrate = document.getElementById("closeCelebrate");

const slideImg = document.getElementById("slideImg");
const slideHeading = document.getElementById("slideHeading");
const slideDesc = document.getElementById("slideDesc");

const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const nextOrDoneBtn = document.getElementById("nextOrDone");
const dots = document.getElementById("dots");

const confetti = document.getElementById("confetti");

/** ✅ Put your slideshow content here */
const slides = [
  { src: "pictures/jan1.jpg", title: "January", desc: "First KBBQ with you and your friends" },
  { src: "pictures/feb1.jpg", title: "February", desc: "Cute little photo" },
  { src: "pictures/feb2.jpg", title: "February", desc: "Your smile is cute" },
  { src: "pictures/feb3.jpg", title: "February", desc: "Tipsy meimei" },
  { src: "pictures/feb4.jpg", title: "February", desc: "Miss the lizz line" },
  { src: "pictures/mar1.jpg", title: "March", desc: "Best Mobile Legends teammate <3" },
  { src: "pictures/apr1.jpeg", title: "April", desc: "Filipino mangoes" },
  { src: "pictures/may1.jpg", title: "May", desc: "Outside our arcade date" },
  { src: "pictures/may2.jpg", title: "May", desc: "Canary Wharf photo time" },
  { src: "pictures/may3.jpg", title: "May", desc: "Soho photo booth experience" },
  { src: "pictures/may4.jpg", title: "May", desc: "Our little legos" },
  { src: "pictures/may5.jpg", title: "May", desc: "Duck and Waffle" },
  { src: "pictures/may6.jpg", title: "May", desc: "The closest we've gotten to a Japan trip" },
  { src: "pictures/june1.jpg", title: "June", desc: "Basketball Player meimei" },
  { src: "pictures/jul1.jpg", title: "July", desc: "My muse" },
  { src: "pictures/aug1.jpg", title: "August", desc: "Haidilao hotpot!" },
  { src: "pictures/oct1.jpg", title: "October", desc: "I just thought this was funny" },
  { src: "pictures/nov1.jpg", title: "November", desc: "I just thought this was funny #2" },
  { src: "pictures/nov2.jpg", title: "November", desc: "K-Events with each other <3" },
  { src: "pictures/dec1.jpg", title: "December 2024", desc: "Our first time meeting each other" },



];

let current = 0;

function popConfetti(count = 90) {
  const width = window.innerWidth;
  const colors = ["#F7CFE1", "#ffffff", "#111111", "#ffd166", "#06d6a0", "#118ab2"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confettiPiece";
    piece.style.left = (Math.random() * width) + "px";

    const w = 6 + Math.random() * 8;
    const h = 8 + Math.random() * 14;
    piece.style.width = w + "px";
    piece.style.height = h + "px";

    piece.style.background = colors[Math.floor(Math.random() * colors.length)];

    const dur = 800 + Math.random() * 900;
    piece.style.animationDuration = dur + "ms";

    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), dur + 120);
  }
}

function renderDots() {
  dots.innerHTML = "";
  slides.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i === current ? " active" : "");
    d.addEventListener("click", () => { current = i; renderSlide(); });
    dots.appendChild(d);
  });
}

function renderSlide() {
  const s = slides[current];
  slideImg.src = s.src;
  slideImg.alt = s.title || `Slide ${current + 1}`;
  slideHeading.textContent = s.title || "";
  slideDesc.textContent = s.desc || "";

  // Buttons
  prevSlideBtn.disabled = (current === 0);
  nextSlideBtn.disabled = (current === slides.length - 1);

  nextOrDoneBtn.textContent = (current === slides.length - 1) ? "Done" : "Next";

  renderDots();
}

function showOverlay() {
  celebrate.classList.add("show");
  celebrate.setAttribute("aria-hidden", "false");
  current = 0;
  renderSlide();
}

function hideOverlay() {
  celebrate.classList.remove("show");
  celebrate.setAttribute("aria-hidden", "true");
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    renderSlide();
  } else {
    hideOverlay();
  }
}
function prevSlide() {
  if (current > 0) {
    current--;
    renderSlide();
  }
}

// Chest click: open + show slideshow + confetti
chest.addEventListener("click", () => {
  const opened = scene.classList.toggle("open");
  if (opened) {
    popConfetti(120);
    showOverlay();
  } else {
    hideOverlay();
  }
});

// Slider controls
nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);
nextOrDoneBtn.addEventListener("click", nextSlide);
closeCelebrate.addEventListener("click", hideOverlay);

// Keyboard controls (nice UX)
document.addEventListener("keydown", (e) => {
  if (!celebrate.classList.contains("show")) return;
  if (e.key === "Escape") hideOverlay();
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

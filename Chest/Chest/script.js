const scene = document.getElementById("scene");
const chest = document.getElementById("chest");

const celebrate = document.getElementById("celebrate");
const closeCelebrate = document.getElementById("closeCelebrate");
const confetti = document.getElementById("confetti");

function popConfetti(count = 80) {
  const rect = document.body.getBoundingClientRect();
  const colors = ["#F7CFE1", "#ffffff", "#111111", "#ffd166", "#06d6a0", "#118ab2"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confettiPiece";

    // random position across screen
    piece.style.left = Math.random() * rect.width + "px";

    // random size
    const w = 6 + Math.random() * 8;
    const h = 8 + Math.random() * 14;
    piece.style.width = w + "px";
    piece.style.height = h + "px";

    // random color
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];

    // random fall duration + drift
    const dur = 800 + Math.random() * 900;
    piece.style.animationDuration = dur + "ms";

    // slight horizontal drift using translateX via CSS variable
    const drift = (Math.random() * 2 - 1) * 120;
    piece.style.transform = `translateX(${drift}px) rotate(${Math.random() * 360}deg)`;

    confetti.appendChild(piece);

    // cleanup after animation
    setTimeout(() => piece.remove(), dur + 100);
  }
}

function showCelebrate() {
  celebrate.classList.add("show");
  celebrate.setAttribute("aria-hidden", "false");
}

function hideCelebrate() {
  celebrate.classList.remove("show");
  celebrate.setAttribute("aria-hidden", "true");
}

chest.addEventListener("click", () => {
  const opened = scene.classList.toggle("open");

  if (opened) {
    // “shoot message on screen”
    showCelebrate();

    // confetti burst
    popConfetti(110);

    // optional: auto close chest after celebration
    // setTimeout(() => scene.classList.remove("open"), 1200);
  } else {
    hideCelebrate();
  }
});

closeCelebrate.addEventListener("click", () => {
  hideCelebrate();
});

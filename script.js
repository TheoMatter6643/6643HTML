fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    initHeaderScripts();
  });

fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;

    // Now that footer exists, run footer-related JS
    initFooterScripts();
  });


function initHeaderScripts() {
  const header = document.querySelector("header");

  // Scroll fade effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

const btn = document.getElementById("menuButton");
const icon = document.getElementById("menuIcon");
const menu = document.getElementById("mobileMenu");

if (!btn || !icon || !menu) return;

let open = false;
icon.src = "Photos/Menu.png";

btn.addEventListener("click", () => {
  open = !open;

  icon.src = open ? "Photos/Close.png" : "Photos/Menu.png";

  menu.classList.toggle("open", open);
});
}


function initFooterScripts() {
  const base = document.querySelector(".img-stack");
  if (!base) return;

  const totalFrames = 9;
  const crankFrames = [];

  for (let i = 1; i <= totalFrames; i++) {
    crankFrames.push(`Photos/crank/${i}.png`);
  }

  let frameIndex = 0;
  let cursorInterval = null;

  base.addEventListener("mouseenter", () => {
    const frameTime = 1000 / crankFrames.length;

    cursorInterval = setInterval(() => {
      document.body.style.cursor = `url(${crankFrames[frameIndex]}) 24 24, auto`;
      frameIndex = (frameIndex + 1) % crankFrames.length;
    }, frameTime);
  });

  base.addEventListener("mouseleave", () => {
    clearInterval(cursorInterval);
    cursorInterval = null;
    frameIndex = 0;
    document.body.style.cursor = "auto";
  });
}


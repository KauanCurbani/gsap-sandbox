var columns = Math.floor(window.innerWidth / 50);
var rows = Math.floor(window.innerHeight / 50);

var colors = ["#0066ff", "#ff0066","#ffff66"];
var color = 0;

document.body.style.setProperty("--grid-col", columns);
document.body.style.setProperty("--grid-row", rows);

console.log(columns * rows);

const grid = document.getElementById("grid");

for (var i = 0; i < columns * rows; i++) {
  var el = document.createElement("div");
  el.classList.add("block");
  grid.appendChild(el);
}

document.onclick = (ev) => {
  const { clientX, clientY } = ev;

  gsap.to(".block", {
    duration: 0.3,
    background: colors[Math.round(Math.random() * colors.length)],
    ease: "elastic",
    scale: 1,
    stagger: {
      grid: [rows, columns],
      from: [clientX / window.innerWidth, clientY / window.innerHeight],
      ease: "power2.out",
      amount: .5,
    },
  });

  

  gsap.to(".block", {
    duration: 0.6,
    delay: 0.1,
    scale: 0.5,
    background: "transparent",
    ease: "elastic",
    stagger: {
      grid: [rows, columns],
      from: [clientX / window.innerWidth, clientY / window.innerHeight],
      ease: "power2.out",
      amount: .5,
    },
  });
};

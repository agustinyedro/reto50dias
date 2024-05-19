const $progressBar = document.querySelector(".progress");
const $btnSig = document.getElementById("btn-sig");
const $btnAnt = document.getElementById("btn-ant");
const $circles = document.querySelectorAll(".circle");

let currentActive = 1;

$btnSig.addEventListener("click", () => {
  currentActive++;
  if (currentActive > $circles.length) {
    currentActive = $circles.length;
  }
  update();
});
$btnAnt.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
function update() {
  $circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  $progressBar.style.width =
    ((actives.length - 1) / ($circles.length - 1)) * 100 + "%";
  $btnSig.disabled = currentActive === $circles.length;
  $btnAnt.disabled = currentActive === 1;
}

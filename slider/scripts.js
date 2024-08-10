function slide() {
  const mask = document.getElementById("mask-linear");
  if (mask.style.maskPosition === "0% 0%") {
    mask.style.maskPosition = "100% 100%";
  } else {
    mask.style.maskPosition = "0% 0%";
  }

  console.log("Slide it!");
}

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  let translateX = Math.min(Math.max(x / 100, -30), 35);
  label1.style.transform = `translate(${translateX}%, 0%)`;
  label2.style.transform = `translate(${translateX}%, 0%)`;
  console.log(translateX);
});

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

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const label1percentageX = (x / windowWidth) * 70 - 35;
  const label2percentageX = (x / windowWidth) * 52 - 26;
  label1.style.transform = `translate(${label1percentageX.toFixed(2)}%, 0%)`;
  label2.style.transform = `translate(${label2percentageX.toFixed(2)}%, 0%)`;
  console.log("label1", label1percentageX.toFixed(2));
  console.log("label2", label2percentageX.toFixed(2));
});

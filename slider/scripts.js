function slide() {
  const mask = document.getElementById("mask-linear");

  const pineapple = document.getElementById("pineapple-heading");
  const orange = document.getElementById("orange-heading");

  if (mask.style.maskPosition === "0% 0%") {
    mask.style.maskPosition = "100% 100%";
  } else {
    mask.style.maskPosition = "0% 0%";
  }

  if (pineapple.style.transform === `translate(-0%, -50%)`) {
    pineapple.style.transform = `translate(-50%, -50%)`;
  } else {
    pineapple.style.transform = `translate(-0%, -50%)`;
  }
  if (orange.style.transform === `translate(-50%, -50%)`) {
    orange.style.transform = `translate(0%, -50%)`;
  } else {
    orange.style.transform = `translate(-50%, -50%)`;
  }

  console.log("Slide it!");
}

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const slice1 = document.getElementById("slice1");
const slice2 = document.getElementById("slice2");
const leaf = document.getElementById("leaf");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const label1percentageX = (x / windowWidth) * 70 - 35;
  const label2percentageX = (x / windowWidth) * 52 - 26;
  const slice1percentageX = (x / windowWidth) * 52 - 26;
  const slice1percentageY = (y / windowHeight) * 52 - 26;
  const slice2percentageX = (x / windowWidth) * 52 - 26;
  const slice2percentageY = (y / windowHeight) * 52 - 26;
  const leafX = (x / windowWidth) * 70 - 35;
  const leafY = (y / windowHeight) * 70 - 35;
  label1.style.transform = `translate(${label1percentageX.toFixed(2)}%, 0%)`;
  label2.style.transform = `translate(${label2percentageX.toFixed(2)}%, 0%)`;

  slice1.style.transform = `translate(${slice1percentageX.toFixed(
    2
  )}%, ${slice1percentageY.toFixed(2)}%)`;

  slice2.style.transform = `translate(${slice2percentageX.toFixed(
    2
  )}%, ${slice2percentageY.toFixed(2)}%)`;

  leaf.style.transform = `translate(${leafY.toFixed(2)}%, ${leafX.toFixed(
    2
  )}%)`;
  console.log("label1", label1percentageX.toFixed(2));
  console.log("label2", label2percentageX.toFixed(2));
});

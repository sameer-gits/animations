function slide() {
  const mask = document.getElementById("mask-linear");

  if (mask.style.maskPosition === "0% 0%") {
    mask.style.maskPosition = "100% 100%";
  } else {
    mask.style.maskPosition = "0% 0%";
  }

  console.log("Slide it!");
}

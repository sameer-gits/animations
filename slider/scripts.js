function slide() {
  console.log("Slide it!");
}

document.getElementById("can-1").addEventListener("pointerover", function () {
  document.getElementById("label").classList.add("label-hover");
});

document.getElementById("can-1").addEventListener("pointerout", function () {
  document.getElementById("label").classList.remove("label-hover");
});

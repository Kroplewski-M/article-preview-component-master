let normal = document.querySelector("#normal");
let mobileShare = document.querySelector("#mobileShare");
let share = document.querySelector("#share");
let shareState = false;

share.addEventListener("click", function () {
  shareState = !shareState;
  if (shareState == true) {
    normal.classList.add("hidden");
    mobileShare.classList.remove("hidden");
  }
  if (shareState == false) {
    mobileShare.classList.add("hidden");
    normal.classList.remove("hidden");
  }
});

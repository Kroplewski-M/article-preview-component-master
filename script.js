let normal = document.querySelector("#normal");
let mobileShare = document.querySelector("#mobileShare");
let share = document.querySelector("#share");
let desktopShare = document.querySelector("#desktopShare");
let shareState = false;
let screenWidth;

window.addEventListener("resize", function () {
  screenWidth = document.body.clientWidth;
  if (screenWidth > 768) {
    if (mobileShare.classList.contains("hidden")) {
      return;
    } else {
      normal.classList.remove("hidden");
      mobileShare.classList.add("hidden");
      shareState = false;
    }
  }
  if (screenWidth <= 768) {
    if (desktopShare.classList.contains("hidden")) {
      return;
    } else {
      desktopShare.classList.add("hidden");
      shareState = false;
    }
  }
});

share.addEventListener("click", function () {
  screenWidth = document.body.clientWidth;

  if (screenWidth <= 768) {
    shareState = !shareState;
    if (shareState == true) {
      normal.classList.add("hidden");
      mobileShare.classList.remove("hidden");
    }
    if (shareState == false) {
      mobileShare.classList.add("hidden");
      normal.classList.remove("hidden");
    }
    if (desktopShare.classList != "hidden") {
      desktopShare.classList.add("hidden");
    }
  }
  if (screenWidth > 768) {
    normal.classList.remove("hidden");
    mobileShare.classList.add("hidden");

    shareState = !shareState;
    if (shareState == true) {
      desktopShare.classList.remove("hidden");
    }
    if (shareState == false) {
      desktopShare.classList.add("hidden");
    }
  }
});

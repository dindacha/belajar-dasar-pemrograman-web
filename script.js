/* swiper==============================================*/
var swiper = new Swiper(".home-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 2,
  coverflowEffect: {
    rotate: 0,
  },
});

/*chord=============================================== */

const serviceItems = document.querySelector(".chord-items");
const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");

serviceItems.addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "button") {
    const item = event.target.parentElement;
    const h3 = item.querySelector("h3").innerHTML;
    const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
    popup.querySelector("h3").innerHTML = h3;
    popup.querySelector(".popup-body").innerHTML = readMoreCont;

    popupBox();
  }
});

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function (event) {
  if (event.target == popup) {
    popupBox();
  }
});

function popupBox() {
  popup.classList.toggle("open");
}

/*piano=============================================== */

const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

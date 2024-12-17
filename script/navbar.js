const hamburgerBtn = document.getElementById("hamburger");
const menus = document.querySelector(".menus");
let isOpen = false;
hamburgerBtn.addEventListener("click", () => {
  if (!isOpen) {
    menus.style.width = "80%";
    isOpen = !isOpen;
  } else {
    menus.style.width = "0";
    isOpen = !isOpen;
  }
});

const open = document.getElementById("open");
const closed = document.getElementById("closed");
const popup = document.querySelector(".popup-window");

open.addEventListener('click', () => {
    popup.classList.add("active");
});

closed.addEventListener('click', () => {
    popup.classList.remove("active");
});

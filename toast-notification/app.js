const btn = document.getElementById("btn");
const container = document.querySelector(".container");

btn.addEventListener('click',() => {

    getNotification();    
});

const getNotification = () => {

    const notif = document.createElement("div");
    notif.innerHTML = "Toast Notification";
    container.appendChild(notif);

    notif.classList.add("toast");

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
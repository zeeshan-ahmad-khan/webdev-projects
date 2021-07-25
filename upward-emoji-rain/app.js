const container = document.createElement("div");
document.body.appendChild(container);

function emojiRain() {

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() *100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    
    heart.innerHTML = "🎈";
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4500);
};

setInterval(emojiRain,1000);
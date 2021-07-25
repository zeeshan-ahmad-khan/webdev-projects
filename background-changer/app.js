const btn = document.getElementById("change");

btn.addEventListener('click', () => {
    
    setInterval( () => {
        document.body.style.backgroundColor = colorChanger();
        document.querySelector("h1").style.color = "white";
        btn.style.borderColor = colorChanger();
    },500);
});

const colorChanger = () => {

    return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}
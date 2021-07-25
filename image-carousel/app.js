const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

const slide = () => {

    idx += 1;

    if (idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`;

}

setInterval(slide, 2000);
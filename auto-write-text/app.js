let messgae = "Never bend your head. Always hold it high. Look the world straight in the eye.";

let idx = 0;

const writeText = () => {

    document.querySelector("div").innerHTML = messgae.slice(0,idx);
    idx += 1;

    if(idx > messgae.length){
        idx = 0;
    }
};

setInterval(writeText, 100);
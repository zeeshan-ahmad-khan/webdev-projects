// NAV BAR JAVASCRIPT
const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("nav ul");

hamburger.addEventListener('click', () => {

    if (ul.className == "" || ul.className == "invisible") {
        ul.classList.remove("invisible");
        ul.classList.add("visible");
    } else {
        ul.classList.remove("visible");
        ul.classList.add("invisible");
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1155) {
        ul.classList.remove("invisible");
        ul.classList.add("visible");
    } else {
        ul.classList.add("invisible");
        ul.classList.remove("visible");
    }
});

// HOME PAGE JAVASCRIPT
const home_txt_ele = document.querySelector(".about .text");

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, labore, eum, earum vel unde fuga fugit recusandae quibusdam repellendus dicta architecto cupiditate similique. Sed ab, quam aut exercitationem ipsam quisquam perferendis nulla et provident sit reiciendis dolores sint quas, adipisci error voluptas repellendus obcaecati! Numquam earum rerum tenetur quasi quos!";

let home_idx = 0;

const autoWrite = setInterval(() => {

    if (home_idx > text.length) {
        clearInterval(autoWrite);
    } else {
        let str = text.substring(0, home_idx);
        home_txt_ele.innerHTML = str;
        home_idx++;
    }

}, 10);

// SKILL PAGE JAVASCRIPT
const skills = {
    html: {
        percent_known: 55,
        image: "./images/html-removebg-preview.png",
        topics: ["semantic elements", "forms validation"],
        shadow: "0 0 10px #FC490B",
        color: "#FC490B"
    },
    css: {
        percent_known: 50,
        image: "./images/css-removebg-preview.png",
        topics: ["flexbox", "grid", "animations", "reponsive design", "media queries","CSS variables"],
        shadow: "0 0 10px #00a5ff",
        color: "#00a5ff"
    },
    javascript: {
        percent_known: 47,
        image: "./images/js.png",
        topics: ["DOM","Eventlisteners","Event Bubbling","OOPs Concept"],
        shadow: "0 0 10px #cf9800",
        color: "#cf9800"
    },
    python: {
        percent_known: 43,
        image: "./images/python-removebg-preview.png",
        topics: ["Classes & Objects","OOPs"],
        shadow: "0 0 10px #005dff",
        color: "#005dff"
    },
    java: {
        percent_known: 37,
        image: "./images/java-removebg-preview.png",
        topics: ["Core Java","Classes & Objects","OOPs"],
        shadow: "0 0 10px #d3220e",
        color: "#d3220e"
    },
    "c++": {
        percent_known: 35,
        image: "./images/c++.png",
        topics: ["Classes & Objects","OOPs"],
        shadow: "0 0 10px #0075e2",
        color: "#0075e2"
    }
}

const skillAnimation = document.querySelector(".skill-animation");
const skillsIcons = document.querySelectorAll(".icon")

skillsIcons.forEach((icon) => {

    icon.addEventListener('click', (e) => {

        skillAnimation.innerHTML = "";
        const skillName = e.target.parentElement.lastElementChild.textContent.toLowerCase();
        
        const div = document.createElement("div");
        div.classList.add("div-container");

        div.innerHTML = `
            <div class="skill-image box">
                <img src=${skills[skillName].image}>
            </div>
            <div class="percent-known box" style="color:${skills[skillName].color}">
                <span>Known: ${skills[skillName].percent_known}%</span>
            </div>
        `;
        
        skills[skillName].topics.forEach(bubble => {

            const bubbles = document.createElement("div");

            bubbles.classList.add("bubbles");

            bubbles.style.color = `${skills[skillName].color}`;

            bubbles.innerHTML = `
                <span>${bubble}</span>
            `;

            div.appendChild(bubbles);
        });
        skillAnimation.appendChild(div);
    });
});

//PROJECTS PAGE JAVASCRIPT

const options = document.querySelectorAll(".project-options span");
const appsContainer = document.querySelector(".apps-container");
const miniContainer = document.querySelector(".mini-container");
const gamesContainer = document.querySelector(".games-container");
const spans = document.querySelectorAll(".project-options span");

options.forEach(option => {

    option.addEventListener('click', (e) => {

        spans.forEach((span) => {

            span.classList.remove("box-shadow");
        });

        console.log(e.target);
        if (e.target.textContent == "Apps") {
            appsContainer.style.transform = "translateX(0)";
            miniContainer.style.transform = "translateX(2000px)";
            gamesContainer.style.transform = "translateX(4000px)";
            e.target.classList.add("box-shadow");

        }
        if (e.target.textContent == "Mini Projects") {
            appsContainer.style.transform = "translateX(-2000px)";
            miniContainer.style.transform = "translateX(0)";
            gamesContainer.style.transform = "translateX(2000px)";
            e.target.classList.add("box-shadow");
        }
        if (e.target.textContent == "Games") {
            appsContainer.style.transform = "translateX(-4000px)";
            miniContainer.style.transform = "translateX(-2000px)";
            gamesContainer.style.transform = "translateX(0)";
            e.target.classList.add("box-shadow");
        }
    });
});
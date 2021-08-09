const list = ["duty", "busy", "major", "gray", "becoming", "fast", "trip", "discussion", "class", "once", "prove", "clothing", "yet", "mission", "underline", "shore", "chemical", "directly", "enough", "frog", "camp", "anything", "area", "distance", "old", "nearby", "decide", "spring", "ring", "ship", "picture", "donkey", "passage", "sometime", "paint", "from", "acres", "grew", "weight", "ball", "queen", "park", "animal", "fall", "wheel", "am", "whistle", "second", "finish", "wrote", "syllable", "against", "hide", "raise", "exercise", "occur", "outside", "street", "pretty", "positive", "star", "ate", "hunt", "evidence", "place", "new", "glad", "than", "handsome", "especially", "his", "butter", "exchange", "into", "electricity", "herd", "represent", "simplest", "score", "dance", "realize", "bark", "vegetable", "leather", "comfortable", "call", "shelter", "pole", "environment", "getting", "thin", "motor", "find", "sale", "garden", "desert", "rhythm", "longer",
    "underline", "youth", "damage", "poetry", "national", "just", "satellites", "idea", "warn", "blue", "solar", "plenty", "pride", "ground", "wonder", "skill", "water", "ear", "enter", "teeth", "upward", "truck", "mice", "support", "automobile", "struck", "queen", "seldom", "road", "food", "tears", "comfortable", "family", "simplest", "compound", "captain", "hospital", "basket", "share", "pretty", "modern", "lost", "purpose", "parent", "single", "excited", "engine", "rocket", "crew", "tool", "group", "worried", "student", "hollow", "faster", "night", "lift", "plates", "into", "headed", "include", "mean", "know", "liquid", "regular", "she", "off", "soft", "present", "sat", "your", "discuss", "object", "pocket", "pupil", "learn", "tropical", "mean", "use", "went", "onlinetools", "short", "instant", "door", "against", "student", "sale", "none", "nation", "careful", "bit", "laugh", "slip", "coast", "held", "roof"];

const container = document.querySelector(".container");
const search = document.getElementById("search");

function listing() {

    const div = document.createElement("div");

    list.forEach((l) => {

        div.innerHTML += `<p>${l}</p>`;
    })

    container.appendChild(div);

}

function searchList(){
    
    const pEle = document.querySelectorAll("p");

    pEle.forEach((e) =>{
        
        search.addEventListener('keyup',() => {
    
            let text = search.value;
            console.log(e.textContent.indexOf(text));
            if(e.textContent.indexOf(text) == -1){
                e.classList.add("hide");
            }else{
                e.classList.remove("hide");
            }
        });
    })

}

listing();
searchList();
const UC_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LC_CHAR = "abcdefghijklmnopqrstuvwxyz";
const SP_CHAR = "!@#$%^*/._-";
const DIGITS = "0123456789"

const submitBtn = document.getElementById("submit");
const ipBox = document.getElementById("input");
const opBox = document.getElementById("output");
const checkbox = document.querySelectorAll("input[type='checkbox']");

submitBtn.addEventListener('click', () => {

    let char = "";
    const len = ipBox.value;

    if (!isNaN(Number(len)) && len != "") {

        checkbox.forEach((e) => {

            if (e.checked) {

                char += eval(e.attributes.name.value);
            }
        });

        if (char == "") {

            const div = document.createElement("div");
            div.classList.add("error-box");
            div.textContent = "Error: Atleast one checkbox must be checked"
            document.body.appendChild(div);

            setTimeout(() => {
                document.body.removeChild(div);
            }, 5000);
        }else{

            const password = passGen(char, len);
            opBox.value = password;
        }


    } else {
        // generate error
        const div = document.createElement("div");
        div.classList.add("error-box");
        div.textContent = "Error: Length must be a number"
        document.body.appendChild(div);

        setTimeout(() => {
            document.body.removeChild(div);
        }, 5000);
    }

    ipBox.value = "";
});

function passGen(char, len) {

    let pass = "";

    for (let i = 0; i < len; i++) {
        const x = char.charAt(Math.floor(Math.random() * char.length));
        pass += x;
    }
    // console.log(pass);
    return pass;
}
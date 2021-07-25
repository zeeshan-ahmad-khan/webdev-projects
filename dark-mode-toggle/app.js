const check = document.getElementById("toggle");

check.addEventListener('change',(e) => {

    document.body.classList.toggle("dark",e.target.checked);
})
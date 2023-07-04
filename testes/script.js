let toggleBtn = document.getElementById("toggleBtn");
let info = document.getElementById("info");

let toggle = false;

toggleBtn.addEventListener("click", () => {
    if (toggle) {
        info.style = `transform: translateY (8rem);`;
        toggleBtn.innerHTML = ``
        toggle = false;
    } else {
        info.style = `transform: translateY (0rem); `;
        toggleBtn.innerHTML = ``
        toggle = true;
    }
})
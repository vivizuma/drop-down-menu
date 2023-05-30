console.log("test");

function showMenuButtons() {
    const buttons = document.getElementsByClassName("dropdown-btn-inactive");
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        button.classList.remove("dropdown-btn-inactive");
        button.classList.add("dropdown-btn-visible");
    }
}

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", showMenuButtons())

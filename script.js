const userBtn = document.getElementById("you-btn");

function openUserMenu() {
  const menu = document.getElementById("you-menu");
  menu.classList.remove("hidden");
  menu.classList.add("visible");
}
userBtn.addEventListener("click", openUserMenu);

////
const dropdown = document.getElementById("options-btn");
const dropdownMenu = document.getElementById("options-list");

dropdown.addEventListener("click", function (ev) {
  console.log("dropdown btn clicked");
  dropdownMenu.style.display = "block";
});

//dropdown event listener

document.body.addEventListener("mouseover", function (ev) {
  if (!dropdownMenu.contains(ev.target) && !dropdown.contains(ev.target)) {
    //close list
    dropdownMenu.style.display = "none";
  }
});

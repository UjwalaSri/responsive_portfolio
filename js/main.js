//DOM item selection

const menubtn = document.querySelector(".menubtn");
const menu = document.querySelector(".menu");
const menunav = document.querySelector(".menunav");
const menubranding = document.querySelector(".menubranding");
const navitem = document.querySelectorAll(".classitem");

//intial state starting page
let showMenu = false;

menubtn.addEventListener("click", toggleMenuVisible);

function toggleMenuVisible() {
  if (!showMenu) {
    //hide button
    menubtn.classList.add("close");

    //show the rest
    menu.classList.add("show");
    menunav.classList.add("show");
    menubranding.classList.add("show");

    //loop through nav items
    navitem.forEach(item => item.classList.add("show"));

    //set back the menu state
    showMenu = true;
  } else {
    //hide button
    menubtn.classList.remove("close");

    //show the rest
    menu.classList.remove("show");
    menunav.classList.remove("show");
    menubranding.classList.remove("show");

    //loop through nav items
    navitem.forEach(item => item.classList.remove("show"));

    //set back the menu state
    showMenu = false;
  }
}

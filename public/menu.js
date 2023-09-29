let burgerMenu = document.getElementById("burger-menu");

burgerMenu.onclick = function() {
    let nav = document.getElementById("site-nav");
    if (nav.style.display === "") {
        nav.style.display = "flex";
        nav.style["flex-direction"] = "column";
        nav.style.width = "100%";
    } else if (nav.style.display === "flex") {
        nav.style.display = "";
    }
    nav.style.top = "4rem";
}
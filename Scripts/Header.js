function toggleHamburger() {
    const navbar = document.getElementById("navbarLinks")

    if(navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

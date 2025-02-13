document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar-container");

    navbar.addEventListener("wheel", function (event) {
        event.preventDefault();
        navbar.scrollLeft += event.deltaY; // Scroll horizontally using vertical wheel scroll
    });
});
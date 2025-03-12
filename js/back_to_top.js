window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) { // Show after scrolling 200px
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
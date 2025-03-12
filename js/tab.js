function openTab(event, tabId) {
    let i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(content => content.style.display = "none");

    // Remove active class from all buttons
    tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => button.classList.remove("active"));

    // Show the selected tab and add active class to the clicked button
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tab1").style.display = "block";
});
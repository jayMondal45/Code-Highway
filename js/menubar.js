function toggleMenu() {
  let sidebar = document.getElementById("sidebar");
  let hamburger = document.getElementById("hamburger");

  sidebar.classList.toggle("active");
  hamburger.classList.toggle("close");

  if (sidebar.classList.contains("active")) {
    document.addEventListener("click", closeMenuOutsideMenu);
  } else {
    document.removeEventListener("click", closeMenuOutsideMenu);
  }
}

function closeMenuOutsideMenu(event) {
  let sidebar = document.getElementById("sidebar");
  let hamburger = document.getElementById("hamburger");

  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.classList.remove("active");
    hamburger.classList.remove("close");
    document.removeEventListener("click", closeMenuOutsideMenu);
  }
}

function toggleNav() {
  let sidebar = document.getElementById("sidebar_space");
  let hamburger = document.getElementById("hamburger_icon");

  sidebar.classList.toggle("active");
  hamburger.classList.toggle("close");

  if (sidebar.classList.contains("active")) {
    document.addEventListener("click", closeMenuOutsideNav);
  } else {
    document.removeEventListener("click", closeMenuOutsideNav);
  }
}

function closeMenuOutsideNav(event) {
  let sidebar = document.getElementById("sidebar_space");
  let hamburger = document.getElementById("hamburger_icon");

  if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
    sidebar.classList.remove("active");
    hamburger.classList.remove("close");
    document.removeEventListener("click", closeMenuOutsideNav);
  }
}

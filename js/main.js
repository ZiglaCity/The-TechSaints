document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.querySelector(".nav-links");
    
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    const links = document.querySelectorAll('.nav-links li a');
    const currentPath = window.location.pathname.split('/').pop(); // Get the current page file name

    links.forEach(link => {
        const hrefPath = link.getAttribute('href').split('/').pop(); // Get the file name from the link's href
        if (hrefPath === currentPath) {
            link.classList.add('active'); // Add 'active' class if it matches the current path
        }

        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

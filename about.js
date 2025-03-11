document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".about-section");

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add("visible");
        }, index * 500);
    });
});


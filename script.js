document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav");
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(navLink.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

//dynamic styling and interactions
document.addEventListener("DOMContentLoaded", function () {
    const aboutBox = document.getElementById("aboutBox");
    styleBox(aboutBox, "#2ecc71", "#fff");

    const projectsBox = document.getElementById("projectsBox");
    styleBox(projectsBox, "#3498db", "#fff");

    const educationBox = document.getElementById("educationBox");
    styleBox(educationBox, "#e74c3c", "#fff");

    const skillsBox = document.getElementById("skillsBox");
    styleBox(skillsBox, "#f39c12", "#fff");

    const certificationsBox = document.getElementById("certificationsBox");
    styleBox(certificationsBox, "#9b59b6", "#fff");

    const languagesBox = document.getElementById("languagesBox");
    styleBox(languagesBox, "#1abc9c", "#fff");

    function styleBox(boxElement, backgroundColor, textColor) {
        boxElement.style.backgroundColor = backgroundColor;
        boxElement.style.color = textColor;
    }
    
    const htmlProgressBar = document.querySelector("#skillsBox .html .progressBar");
    const cssProgressBar = document.querySelector("#skillsBox .css .progressBar");
    const jsProgressBar = document.querySelector("#skillsBox .js .progressBar");

    updateProgressBar(htmlProgressBar, 90);
    updateProgressBar(cssProgressBar, 85);
    updateProgressBar(jsProgressBar, 80);

    function updateProgressBar(progressBarElement, percentage) {
        progressBarElement.style.width = percentage + "%";
    }
});

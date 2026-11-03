const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const isDarkMode = document.body.classList.contains("dark");

    themeButton.setAttribute("aria-pressed", isDarkMode);

});


const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const userName = document.getElementById("name").value;

    alert("Thank you, " + userName + "! Your message has been received.");

    contactForm.reset();

});

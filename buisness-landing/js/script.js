/* =========================================================
   NEXORA TECHNOLOGIES
   TASK 2 - JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");


        const menuIsOpen =
            navLinks.classList.contains("show");


        menuToggle.setAttribute(
            "aria-expanded",
            menuIsOpen
        );


        menuToggle.textContent =
            menuIsOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a link */

    const navItems =
        navLinks.querySelectorAll("a");


    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}



/* =========================================================
   2. CONTACT FORM VALIDATION
   ========================================================= */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            /* Check required fields */

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                formStatus.textContent =
                    "Please fill in all required fields.";

                return;

            }


            /* Check email format */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                formStatus.textContent =
                    "Please enter a valid email address.";

                return;

            }


            /* Success message */

            formStatus.textContent =
                "Thank you! Your message has been received.";


            /* Clear form */

            contactForm.reset();

        }
    );

}
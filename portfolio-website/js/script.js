/* =========================================================
   SIDDHARTH B - PERSONAL PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================================================
   1. DARK / LIGHT MODE
   ========================================================= */

const themeToggle = document.getElementById("theme-toggle");


// Load saved theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}


// Update theme button

function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀️";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.textContent = "🌙";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}


// Initial button state

updateThemeButton();


// Toggle theme

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );


        updateThemeButton();

    });

}



/* =========================================================
   2. MOBILE NAVIGATION
   ========================================================= */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("show");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    // Close menu when a navigation link is clicked

    const navigationItems =
        navLinks.querySelectorAll("a");


    navigationItems.forEach(function (link) {

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
   3. PROJECT FILTER
   ========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectItems =
    document.querySelectorAll(".project-item");


if (
    filterButtons.length > 0 &&
    projectItems.length > 0
) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {


            // Remove active state

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            // Add active state to clicked button

            button.classList.add("active");


            const selectedFilter =
                button.getAttribute("data-filter");


            // Filter projects

            projectItems.forEach(function (project) {

                const categories =
                    project.getAttribute("data-category");


                if (
                    selectedFilter === "all" ||
                    categories.includes(selectedFilter)
                ) {

                    project.style.display = "";

                } else {

                    project.style.display = "none";

                }

            });

        });

    });

}



/* =========================================================
   4. CONTACT FORM
   ========================================================= */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent actual form submission

        event.preventDefault();


        // Get form values

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const consent =
            document.getElementById("consent").checked;


        // Basic validation

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            formStatus.textContent =
                "Please fill in all required fields.";

            return;

        }


        if (!consent) {

            formStatus.textContent =
                "Please agree to be contacted.";

            return;

        }


        // Email format validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            formStatus.textContent =
                "Please enter a valid email address.";

            return;

        }


        // Display success message

        formStatus.textContent =
            "Thank you! Your message has been prepared successfully.";


        // Reset form

        contactForm.reset();

    });

}



/* =========================================================
   5. CURRENT YEAR
   ========================================================= */

const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});



/* =========================================================
   6. CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    if (
        !navLinks ||
        !menuToggle
    ) {
        return;
    }


    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navLinks.classList.contains("show")
    ) {

        navLinks.classList.remove("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    }

});
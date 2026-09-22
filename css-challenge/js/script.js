/* =========================================
   CSS CHALLENGE
   TASK 3 - JAVASCRIPT
========================================= */


/* ---------- Current Year ---------- */

const currentYear = new Date().getFullYear();

const footerText = document.querySelector(".footer-content p");

if (footerText) {
    footerText.textContent =
        `© ${currentYear} Siddharth B. CSS Challenge.`;
}


/* ---------- Animated Button Interaction ---------- */

const animatedButton = document.querySelector(".animated-button");

if (animatedButton) {

    animatedButton.addEventListener("click", function () {

        const originalText = animatedButton.textContent;

        animatedButton.textContent = "Nice!";

        setTimeout(function () {
            animatedButton.textContent = originalText;
        }, 1000);

    });

}
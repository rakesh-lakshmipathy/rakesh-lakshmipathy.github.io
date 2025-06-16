// Animate elements on scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    const animatedSections = document.querySelectorAll(".animate-slidein, .animate-fadein");
    animatedSections.forEach((section) => {
        observer.observe(section);
    });

    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // Simple form validation
    const form = document.querySelector("form");
    form?.addEventListener("submit", (e) => {
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            e.preventDefault();
        } else {
            alert("Message sent successfully!");
        }
    });
});
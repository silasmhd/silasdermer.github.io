// Highlights the current section's nav link as you scroll.
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = Array.from(links)
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

if (sections.length) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = `#${entry.target.id}`;
                links.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === id);
                });
            }
            });
        },
        { rootMargin: "-40% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
}

  // Dark/light mode 
const toggleButton = document.getElementById("mode-toggle");
    toggleButton.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-mode") === "light";
        if (isLight) {
            document.documentElement.removeAttribute("data-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.documentElement.setAttribute("data-mode", "light");
            localStorage.setItem("mode", "light");
        }
    });
});

// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Set and store theme preference
function setTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
}

// Trigger CSS animation via JS
function triggerAnimation() {
    const box = document.getElementById("animatedBox");
    box.classList.remove("animate");
    void box.offsetWidth; // trigger reflow to restart animation
    box.classList.add("animate");
}

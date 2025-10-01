/**
 * Advanced-Grid-Layout-System - Professional CSS Implementation
 * Modern GridLayout design system
 * Author: Gabriel Demetrios Lafis
 */

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle-button");
    const body = document.body;

    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            // Save user preference
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }

    // Apply saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }
});


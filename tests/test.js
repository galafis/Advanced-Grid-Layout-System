/**
 * Advanced-Grid-Layout-System - Test Suite
 * Author: Gabriel Demetrios Lafis
 */

const fs = require("fs");
const path = require("path");

describe("Advanced-Grid-Layout-System", () => {
    let htmlContent;
    let scriptContent;

    beforeAll(() => {
        // Read the HTML and JS content
        htmlContent = fs.readFileSync(path.resolve(__dirname, "../src/index.html"), "utf8");
        scriptContent = fs.readFileSync(path.resolve(__dirname, "../src/script.js"), "utf8");

        // Load the HTML content into the DOM for testing
        document.body.innerHTML = htmlContent;

        // Create a script element and append the script content to it
        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptContent;
        document.body.appendChild(scriptElement);

        // Manually trigger DOMContentLoaded as it won't fire automatically in JSDOM
        document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    test("should have a title", () => {
        expect(document.title).toBe("Advanced-Grid-Layout-System - Demo");
    });

    test("should have a main heading", () => {
        const h1 = document.querySelector("h1");
        expect(h1).not.toBeNull();
        expect(h1.textContent).toBe("Advanced-Grid-Layout-System");
    });

    test("should have a theme toggle button", () => {
        const themeToggleButton = document.querySelector(".theme-toggle-button");
        expect(themeToggleButton).not.toBeNull();
        expect(themeToggleButton.textContent).toBe("Toggle Theme");
    });

    test("theme toggle button should switch dark mode", () => {
        const themeToggleButton = document.querySelector(".theme-toggle-button");
        const body = document.body;

        // Ensure the button exists before testing its functionality
        expect(themeToggleButton).not.toBeNull();

        // Initial state (light mode by default or based on prefers-color-scheme)
        const initialDarkMode = body.classList.contains("dark-mode");

        // Click to toggle theme
        themeToggleButton.click();
        expect(body.classList.contains("dark-mode")).toBe(!initialDarkMode);

        // Click again to toggle back
        themeToggleButton.click();
        expect(body.classList.contains("dark-mode")).toBe(initialDarkMode);
    });

    test("should load styles.css", () => {
        // In a JSDOM environment, we can't actually 'load' CSS and apply it to the DOM
        // This test will just check if the link tag exists
        const link = document.querySelector("link[rel=\"stylesheet\"][href=\"styles.css\"]");
        expect(link).not.toBeNull();
    });

    test("should have primary and secondary buttons", () => {
        const componentShowcase = document.querySelector("section.card");
        const primaryButton = componentShowcase.querySelector(".btn-primary");
        const secondaryButton = componentShowcase.querySelector(".btn-secondary");
        expect(primaryButton).not.toBeNull();
        expect(secondaryButton).not.toBeNull();
        expect(primaryButton.textContent).toBe("Primary Button");
        expect(secondaryButton.textContent).toBe("Secondary Button");
    });

    test("should have an input field", () => {
        const input = document.querySelector(".input");
        expect(input).not.toBeNull();
        expect(input.placeholder).toBe("Enter your text here...");
    });
});


// Defining DOM elements
const toggleButton = document.querySelector("#toggle-button");
const root = document.documentElement; // Use document.documentElement to get the :root element
const storageKey = "color-mode";
const defaultMode = "light-mode";

// Load the user's preferred color mode from local storage
function loadColorMode() {
    const colorMode = localStorage.getItem(storageKey);
    if (colorMode) {
        root.classList.add(colorMode);
    } else {
        root.classList.add(defaultMode);
    }
    updateToggleButton();
}

loadColorMode(); // Calling the function

// Toggle between the color mode
toggleButton.addEventListener("click", () => {
    saveColorMode();
});

// Saves user's preferred color mode in local storage
function saveColorMode() {
    const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

// Updating Toggle button
function updateToggleButton() {
    if (root.classList.contains("dark-mode")) {
        toggleButton.style.backgroundImage = "var(--moon)";
    } else {
        toggleButton.style.backgroundImage = "var(--sun)";
    }
}

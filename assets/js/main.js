/**
 * Initializes the site once the DOM is fully loaded.
 * - Updates the footer year automatically based on the current date.
 * - Logs initialization status in the console.
 * - Handles errors gracefully if the #year element is missing or invalid.
 */

document.addEventListener("DOMContentLoaded", () => {
  try {
    const footerYear = document.getElementById("year");
    if (!footerYear) throw new Error("Missing element: #year");

    const currentYear = new Date().getFullYear();
    footerYear.textContent = !isNaN(currentYear) ? currentYear : "-";

    console.info("[OK] Site initialized");
  } catch (err) {
    console.error("[ERROR]", err.message);
  }
});
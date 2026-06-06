

// Load the click sound
const clickSound = new Audio("sounds/click.mp3");

// Set volume (optional)
clickSound.volume = 0.7; // 0.0 to 1.0

// Function to play click sound
function playClickSound() {
  clickSound.currentTime = 0; // Reset in case it's already playing
  clickSound.play();
}

// Play sound when clicking anywhere on the page
document.addEventListener("click", playClickSound);

// (Optional) Add special button visual effect
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    // Add glow effect temporarily
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 200);
  });
});

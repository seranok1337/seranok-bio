document.addEventListener("DOMContentLoaded", () => {
    const text = "‎ seranok";
    let index = 0;
    let isDeleting = false;
    const speed = 100;  // Speed of typing
    const eraseSpeed = 50; // Speed of erasing
    const randomSymbols = "|||||||||||||||||";

    function typeEffect() {
        const typedTextElement = document.getElementById("typed-text");

        if (!isDeleting && index < text.length) {
            // Show random symbols before showing the actual character
            typedTextElement.innerHTML = text.slice(0, index) + randomSymbols[Math.floor(Math.random() * randomSymbols.length)];
            setTimeout(() => {
                typedTextElement.innerHTML = text.slice(0, index + 1);
                index++;
                setTimeout(typeEffect, speed);
            }, 100);
        } else if (isDeleting && index > 1) { // Stop deleting when only one character is left
            // Erase effect
            typedTextElement.innerHTML = text.slice(0, index - 1);
            index--;
            setTimeout(typeEffect, eraseSpeed);
        } else if (!isDeleting && index === text.length) {
            // Start erasing after typing the full text
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause before starting to erase
        } else if (isDeleting && index === 1) {
            // Reset to typing state after deleting to the last symbol
            isDeleting = false;
            setTimeout(typeEffect, speed);
        }
    }

    // Start the effect on window load
    window.onload = typeEffect;
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("spinImage");
    const sound = document.getElementById("clickSound");

    image.addEventListener("click", () => {
        // Add the 'spin' class to start the spinning effect
        image.classList.add("spin");

        // Play the sound
        sound.play();

        // Remove the 'spin' class after the animation is done to reset the state
        setTimeout(() => {
            image.classList.remove("spin");
        }, 500); // Match this duration with the CSS transition duration
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("mysteriousHover");
    const sound = document.getElementById("clickSound2");

    image.addEventListener("click", () => {
        // Add the 'spin' class to start the spinning effect
        image.classList.add("spin");

        // Play the sound
        sound.play();

        // Remove the 'spin' class after the animation is done to reset the state
        setTimeout(() => {
            image.classList.remove("spin");
        }, 500); // Match this duration with the CSS transition duration
    });
});

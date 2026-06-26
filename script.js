document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("wildlifeVideo");
    const toggleBtn = document.getElementById("toggleBtn");
    const videoContainer = document.getElementById("videoContainer");

    // "Has a button that hides the video or plays it if it is not playing already when clicked"
    toggleBtn.addEventListener("click", () => {
        // If the video is paused or ended (not playing)
        if (video.paused || video.ended) {
            // Show the video and play it
            videoContainer.classList.remove("hidden");
            video.play();
            toggleBtn.textContent = "Hide Video";
            toggleBtn.setAttribute("aria-expanded", "true");
        } else {
            // If the video is playing, pause it and hide it
            video.pause();
            videoContainer.classList.add("hidden");
            toggleBtn.textContent = "Play Video";
            toggleBtn.setAttribute("aria-expanded", "false");
        }
    });

    // Handle updates if user interacts with native video controls
    video.addEventListener("play", () => {
        toggleBtn.textContent = "Hide Video";
        toggleBtn.setAttribute("aria-expanded", "true");
    });

    video.addEventListener("pause", () => {
        toggleBtn.textContent = "Play Video";
        toggleBtn.setAttribute("aria-expanded", "false"); 
    });
});

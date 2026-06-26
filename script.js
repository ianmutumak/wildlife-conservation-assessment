document.addEventListener('DOMContentLoaded', () => {
      const video = document.getElementById('wildlifeVideo');
      const toggleBtn = document.getElementById('toggleBtn');
      const videoContainer = document.getElementById('videoContainer');

                              if (!video || !toggleBtn || !videoContainer) {
                                        console.error('Required elements not found in the DOM.');
                                        return;
                              }

                              toggleBtn.addEventListener('click', () => {
                                        if (video.paused) {
                                                      // If the video is paused, play it and update button text/aria
                                            video.play()
                                                          .then(() => {
                                                                                toggleBtn.textContent = 'Hide Video';
                                                                                toggleBtn.setAttribute('aria-expanded', 'true');
                                                                                videoContainer.style.display = 'block';
                                                          })
                                                          .catch(error => {
                                                                                console.error('Failed to play the video:', error);
                                                          });
                                        } else {
                                                      // If the video is playing, pause it, hide it, and update button text/aria
                                            video.pause();
                                                      toggleBtn.textContent = 'Show Video';
                                                      toggleBtn.setAttribute('aria-expanded', 'false');
                                                      videoContainer.style.display = 'none';
                                        }
                              });

                              // Optionally handle video ending
                              video.addEventListener('ended', () => {
                                        toggleBtn.textContent = 'Show Video';
                                        toggleBtn.setAttribute('aria-expanded', 'false');
                                        videoContainer.style.display = 'none';
                              });
});

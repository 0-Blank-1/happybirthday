// This ensures autoplay works smoothly (some browsers block it)
document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("birthdayMusic");
  if (music) {
    const playMusic = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", playMusic);
    };
    document.addEventListener("click", playMusic);
  }
});

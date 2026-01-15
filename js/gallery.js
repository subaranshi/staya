document.querySelectorAll(".gallery").forEach(gallery => {
  const track = gallery.querySelector(".gallery-track");
  const slides = track.children;
  let index = 0;

  gallery.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  gallery.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  });
});

// ===== АУДИО ПЛЕЕР =====

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

if (audio && playBtn && progress) {
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "❚❚";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    progress.max = audio.duration || 0;
    progress.value = audio.currentTime;
  });

  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
  });
}


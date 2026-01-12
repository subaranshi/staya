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

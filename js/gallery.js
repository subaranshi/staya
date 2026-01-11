document.querySelectorAll(".gallery").forEach(gallery => {
  const track = gallery.querySelector(".gallery-track");
  const items = track.children;
  let index = 0;

  gallery.querySelector(".next").onclick = () => {
    index = (index + 1) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  gallery.querySelector(".prev").onclick = () => {
    index = (index - 1 + items.length) % items.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };
});

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  initGallery();
});

// Simple prev/next photo carousel used on the Foto's page
function initGallery() {
  const frame = document.querySelector(".gallery-frame");
  if (!frame) return;

  const photos = window.galleryPhotos || [];
  const counter = document.querySelector(".gallery-counter");
  let index = 0;

  function render() {
    if (photos.length === 0) return;
    frame.innerHTML = `<img src="${photos[index].src}" alt="${photos[index].alt}">`;
    if (counter) counter.textContent = `${index + 1} / ${photos.length}`;
  }

  document.querySelector(".gallery-prev").addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    render();
  });

  document.querySelector(".gallery-next").addEventListener("click", () => {
    index = (index + 1) % photos.length;
    render();
  });

  render();
}

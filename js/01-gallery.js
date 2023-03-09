import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        target="_blank" rel="noopener noreferrer"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
galleryEl.addEventListener("click", handlerGalleryItemClick);

function handlerGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  function handlerOnEscClick(event) {
    event.preventDefault();
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handlerOnEscClick);
    }
  }

  window.addEventListener("keydown", handlerOnEscClick);
}

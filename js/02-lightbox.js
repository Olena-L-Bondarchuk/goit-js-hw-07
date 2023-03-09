import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ original, preview, description }) => `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        target="_blank" rel="noopener noreferrer"
        src="${preview}"
              alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const libraryLightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

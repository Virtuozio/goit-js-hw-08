// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `
      <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title="${description}"
        />
</a>
    `;
  })
  .join('');
gallery.innerHTML = markup;

new SimpleLightbox('.gallery a', { captionDelay: 250 });

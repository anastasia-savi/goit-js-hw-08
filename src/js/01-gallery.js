// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const ul = document.querySelector('ul');
const gallery = createGallery(galleryItems);
ul.insertAdjacentHTML('beforeend', gallery);
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`;
    })
    .join('');
}

let galleryModal = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: '250ms',
  captionPosition: 'bottom',
});
c;

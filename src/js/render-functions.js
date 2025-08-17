import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector("#load-more");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
      <li class="card">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        </a>
        <ul class="meta">
          <li>❤ ${img.likes}</li>
          <li>👁 ${img.views}</li>
          <li>💬 ${img.comments}</li>
          <li>⬇ ${img.downloads}</li>
        </ul>
      </li>`
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader() {
  loader.classList.remove("is-hidden");
}
export function hideLoader() {
  loader.classList.add("is-hidden");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("is-hidden");
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("is-hidden");
}

export function smoothScrollAfterAppend() {
  const firstCard = document.querySelector(".gallery .card");
  if (!firstCard) return;
  const { height } = firstCard.getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: "smooth" });
}

export function showNoResultsMessage() {
  iziToast.error({
    position: "topRight",
    title: "No results",
    message: "Sorry, no images found. Try another query!",
  });
}

export function showEndMessage() {
  iziToast.info({
    position: "topRight",
    title: "Info",
    message: "We're sorry, but you've reached the end of search results.",
  });
}

export function showErrorMessage(message = "Something went wrong. Please try again.") {
  iziToast.error({
    position: "topRight",
    title: "Error",
    message,
  });
}

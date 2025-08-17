
import { getImagesByQuery } from "./js/pixabay-api.js";      
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  smoothScrollAfterAppend,
  showNoResultsMessage,
  showEndMessage,
  showErrorMessage,
} from "./js/render-functions.js";                          


const form = document.querySelector(".form");
const input = form.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector("#load-more");

let query = "";
let page = 1;
let totalHits = 0;
let loaded = 0;
let isLoading = false;

hideLoadMoreButton();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  query = value;
  page = 1;
  loaded = 0;
  clearGallery();
  hideLoadMoreButton();

  await fetchAndRender();
});

loadMoreBtn.addEventListener("click", async () => {
  page += 1;
  await fetchAndRender(true);
});

async function fetchAndRender(isLoadMore = false) {
  if (isLoading) return;

  try {
    isLoading = true;
    showLoader();

    const { hits = [], totalHits: total = 0 } = await getImagesByQuery(query, page);
    totalHits = total;

    if (!isLoadMore && hits.length === 0) {
      hideLoadMoreButton();
      showNoResultsMessage();
      return;
    }

    createGallery(hits);
    loaded += hits.length;

    if (loaded < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (loaded > 0) showEndMessage();
    }

    if (isLoadMore) smoothScrollAfterAppend();
  } catch (err) {
    hideLoadMoreButton();
    showErrorMessage(err?.message || "Network error");
  } finally {
    hideLoader();
    isLoading = false;
  }
}

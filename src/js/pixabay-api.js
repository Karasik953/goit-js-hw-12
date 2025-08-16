import axios from "axios";

const API_KEY = "51737021-87f818cc1ae3d02e4bfd7c05a";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const { data } = await axios.get(BASE_URL, { params });

  return data;
}

export { PER_PAGE };

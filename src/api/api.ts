// ----------- import external dependencies -----------
const baseurl = `https://api.pexels.com/v1`;

const headers = {
  Authorization: "04TrwxrOJQjnFcu6GDiuunMMiyqDnpckYk10mZhHY8du9ApDkiQi81bt",
};

/**
 * Get all images
 * @param page
 * @returns
 */
export const getCuratedImages = (page: number, per_page: number) =>
  fetch(`${baseurl}/curated?page=${page}&per_page=${per_page}`, { headers });

/**
 * Search images by keyword
 * @param page
 * @param search
 * @returns
 */
export const getSearchImages = (
  page: number,
  per_page: number,
  search: string
) =>
  fetch(`${baseurl}/search?page=${page}&per_page=${per_page}&query=${search}`, {
    headers,
  });

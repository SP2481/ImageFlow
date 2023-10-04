export default async function FetchImages(page) {
  const pageNo = page;
  const query = "art";
  const url = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}%201&client_id=${
      import.meta.env.VITE_PUBLIC_UNSPLASH_CLIENT_ID
    }&page=${pageNo}`,
  );
  try {
    const response = await url.json();
    return response;
  } catch (err) {
    throw new Error("Error in fetchimages " + err);
  }
}

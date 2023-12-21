export default async function FetchImages(page) {
  const pageNo = page;
  const response = await fetch(
    `https://pixabay.com/api/?key=${
      import.meta.env.VITE_APIKEY
    }&image_type=all&page=${pageNo}`,
  );
  if (!response.ok) {
    throw new Error("cannot get response");
  }
  const result = await response.json();

  return result;
}

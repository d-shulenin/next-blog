async function getAllPosts(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?_page=${page}&_limit=5`
  );
  if (!response.ok) throw new Error("Fetching error");
  const json = await response.json();
  return json;
}

export default getAllPosts;

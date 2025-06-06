import { queryOptions } from "@tanstack/react-query";

async function getBrands() {
  const response = await fetch("https://684045e55b39a8039a578025.mockapi.io/brands");
  if (!response.ok) {
    throw new Error("Failed to fetch brands");
  }
  return await response.json();
}

const brandsQueryOptions = queryOptions({
  queryKey: ["brands"],
  queryFn: getBrands,
});

export {getBrands,brandsQueryOptions}


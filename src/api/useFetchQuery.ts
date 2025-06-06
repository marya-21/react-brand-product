import { useQuery } from "@tanstack/react-query";

/**
 * Custom React hook untuk melakukan fetch data menggunakan react-query.
 * 
 * @template T - Tipe data hasil fetch (opsional, default: any)
 * @param {string | any[]} queryKey - Key unik untuk query react-query (bisa string atau array)
 * @param {string} url - Endpoint URL yang akan di-fetch
 * @returns {object} - Hasil dari useQuery, berisi data, isLoading, isError, dll.
 * 
 * Contoh penggunaan:
 *   const { data, isLoading, isError } = useFetchQuery("brands", "https://api.example.com/brands");
 */

function useFetchQuery<T = any>(queryKey: string | any[], url: string) {
  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async (): Promise<T> => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Fetch failed");
      }
      return res.json();
    },
  });
}
export default useFetchQuery;


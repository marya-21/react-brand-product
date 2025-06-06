import { useQuery } from "@tanstack/react-query";

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


import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productApi";

const useProducts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: async ({ pageParam }) => fetchProducts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, _allPages, lastPageParam, _allPageParams) =>
        lastPage.length > 0 ? lastPageParam + 1 : undefined,
    });
  return { data, fetchNextPage, hasNextPage, isFetchingNextPage };
};
export default useProducts;

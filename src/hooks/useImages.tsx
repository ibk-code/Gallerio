// ------------ import external dependencies -------------
import { useState, useEffect, useCallback } from "react";

// ------------ import internal dependencies -------------
import { getCuratedImages, getSearchImages } from "../api/api";

function useImages() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [pagination, setPagination] = useState<{
    [k: string]: string | number;
  }>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllImages = useCallback(
    async (currPage?: number, size?: number) => {
      setLoading(true);
      try {
        const response = await getCuratedImages(
          currPage ?? ((pagination?.page ?? 1) as number),
          size ?? ((pagination?.pageSize ?? 20) as number)
        );
        let data = await response.json();

        const { photos, total_results, per_page, page } = data;

        setImages(photos);
        setPagination({
          page,
          total: total_results,
          pageSize: per_page,
        });
        setError(false);
      } catch (error) {
        setError(true);
        throw new Error("Error Occured");
      } finally {
        setLoading(false);
      }
    },
    [pagination.page, pagination.pageSize]
  );

  const searchImages = useCallback(
    async (currPage?: number, size?: number) => {
      setLoading(true);

      try {
        const response = await getSearchImages(
          currPage ?? ((pagination?.page ?? 1) as number),
          size ?? ((pagination?.pageSize ?? 20) as number),
          search
        );
        let data = await response.json();

        const { photos, total_results, per_page, page } = data;

        setImages(photos);
        setPagination({
          page,
          total: total_results,
          pageSize: per_page,
        });
        setError(false);
      } catch (error) {
        setError(true);
        throw new Error("Error Occured");
      } finally {
        setLoading(false);
      }
    },
    [search]
  );

  useEffect(() => {
    getAllImages();
  }, []);

  return {
    images,
    search,
    setSearch,
    pagination,
    setPagination,
    searchImages,
    getAllImages,
    loading,
    setLoading,
    error,
  };
}

export default useImages;

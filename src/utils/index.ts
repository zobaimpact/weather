import { useCallback, useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const handlePagination = useCallback((selectedObject: any) => {
    setPage(selectedObject.selected + 1);
  }, []);
  return { page, handlePagination };
};

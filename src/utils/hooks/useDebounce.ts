import { useEffect, useState } from 'react';

export const useDebounced = (value: string | number[], timeout: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | number[]>(
    value,
  );

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, timeout]);

  return debouncedValue;
};

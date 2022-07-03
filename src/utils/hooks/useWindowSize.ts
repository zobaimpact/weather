import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [dimension, setDimension] = useState<number[]>([0, 0]);
  useLayoutEffect(() => {
    const updateDimension = () => {
      setDimension([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateDimension);
    updateDimension();
    return () => window.removeEventListener('resize', updateDimension);
  }, []);
  return dimension;
};

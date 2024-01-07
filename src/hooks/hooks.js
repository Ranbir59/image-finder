import { useEffect, useState } from "react";

export const useDebounce = ({ value, delay = 500 }) => {
  const [debounceSearch, setDebounceSearch] = useState(value);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
        setDebounceSearch(value)
    }, delay);
    return () => clearTimeout(debounceTimeout);
  }, [value,delay]);
  return debounceSearch;
};

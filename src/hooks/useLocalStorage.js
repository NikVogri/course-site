import { useCallback } from "react";

const useStorage = () => {
  const addToLocalStorage = useCallback((key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }, []);

  const getFromlocalStorage = useCallback(key => {
    return JSON.parse(localStorage.getItem(key));
  }, []);

  const removeFromLocalStorage = useCallback(key => {
    localStorage.removeItem(key);
    return true;
  }, []);

  return {
    addToLocalStorage,
    getFromlocalStorage,
    removeFromLocalStorage,
  };
};

export default useStorage;

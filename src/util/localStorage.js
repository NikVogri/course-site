export const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = key => {
  return localStorage.getItem(key);
};

export const deleteFromLocalStorage = key => {
  localStorage.removeItem(key);
};

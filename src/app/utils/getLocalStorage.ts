export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || '').reverse()
    : [];
};

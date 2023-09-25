export const setItemToLocalStorage = (key: string, value: any) => {
  if (localStorage) {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }
};

export const getItemFromLocalStorage = (key: string) => {
  if (localStorage) {
    const value = localStorage.getItem(key);

    if (value) {
      return value.includes('{') ? JSON.parse(value) : value;
    }
  }
  return null;
};

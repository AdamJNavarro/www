const localStorageKeys = {
  tmdbConfig: 'tmdb-config',
};

function setLocalStorage(key: string, value: any) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export { localStorageKeys, setLocalStorage };

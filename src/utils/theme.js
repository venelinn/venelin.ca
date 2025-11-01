// utils/theme.js

export const getLocalStorageTheme = () => {
  try {
    const localTheme = localStorage?.getItem('theme');
    if (localTheme && ['light', 'dark'].includes(localTheme)) {
      return localTheme;
    }
  } catch (err) {
    console.warn('Can’t access local storage:', err.message);
  }
  return null;
};

export const setLocalStorageTheme = theme => {
  try {
    localStorage?.setItem('theme', theme);
  } catch (err) {
    console.warn('Can’t write to local storage:', err.message);
  }
};

export const getBrowserTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const scrollAfterThemeChange = () => {
  if (typeof window === 'undefined') return;

  // scroll down 100px every time
  window.scrollBy({ top: 200});
};




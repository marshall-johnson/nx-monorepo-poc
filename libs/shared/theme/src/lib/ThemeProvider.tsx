import { createContext, useEffect, useState, useContext } from 'react';

type Theme = 'light' | 'dark' | 'blue' | 'system';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem('theme') as Theme;

    const apply = (t: Theme) => {
      root.classList.remove('light', 'dark', 'blue');
      if (
        t === 'dark' ||
        (t === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        root.classList.add('dark');
      } else if (t === 'blue') {
        root.classList.add('blue');
      } else {
        root.classList.add('light');
      }
    };

    setTheme(savedTheme ?? 'dark');
    apply(savedTheme ?? 'dark');

    const listener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        apply('system');
      }
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', listener);
    return () =>
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', listener);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark', 'blue');
    if (
      newTheme === 'dark' ||
      (newTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      root.classList.add('dark');
    } else if (newTheme === 'blue') {
      root.classList.add('blue');
    } else {
      root.classList.add('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
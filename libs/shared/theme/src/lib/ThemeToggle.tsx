import { useTheme } from './ThemeProvider';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setTheme('light')}
        className={theme === 'light' ? 'font-bold' : ''}
      >
        ☀️ Light
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={theme === 'dark' ? 'font-bold' : ''}
      >
        🌙 Dark
      </button>
      <button
        onClick={() => setTheme('system')}
        className={theme === 'system' ? 'font-bold' : ''}
      >
        💻 System
      </button>
    </div>
  );
};

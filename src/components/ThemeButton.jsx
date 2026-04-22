function ThemeButton({isDark, onToggleTheme}) {
  return (
      <button
        onClick={onToggleTheme}
        className="fixed top-5 right-5 px-3.5 py-3 rounded-full bg-primary-navy dark:bg-primary-blue outline-none z-[1100] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
  )
}

export default ThemeButton

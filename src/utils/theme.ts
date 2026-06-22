export function applySavedTheme(): void {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (saved ? saved === "dark" : prefersDark) {
    document.documentElement.classList.add("dark");
  }
}

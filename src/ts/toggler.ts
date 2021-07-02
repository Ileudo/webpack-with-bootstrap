import { store } from '../store';

const themes = { green: 'theme-train', orange: 'theme-play' };
const toggler = document.querySelector('#rocker input') as HTMLInputElement;
toggler.addEventListener('change', changeThemeSettings);

function changeThemeSettings(e: Event) {
  if (e.currentTarget instanceof HTMLInputElement) {
    if (e.currentTarget.checked) {
      store.theme = themes.orange;
    } else {
      store.theme = themes.green;
    }
  }
  applyThemeSettings();
}

function applyThemeSettings(): void {
  document.querySelectorAll(`[data-theme]`).forEach((el) => {
    if (el instanceof HTMLElement) {
      const prevTheme = el.dataset.theme as string;
      const nextTheme = store.theme;
      el.classList.remove(prevTheme);
      el.classList.add(nextTheme);
      el.dataset.theme = nextTheme;
    }
  });
}

import { store } from '../store';

function switchTheme(): void {
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

const toggler = document.querySelector('#rocker input') as HTMLInputElement;
toggler.addEventListener('change', changeThemeSettings);

const themes = { green: 'theme-train', orange: 'theme-play' };
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
function applyThemeSettings() {
  switchTheme();
}

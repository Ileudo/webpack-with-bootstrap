import { store } from '../store';

const modes = { train: 'mode-train', play: 'mode-play' };
const toggler = document.querySelector('#rocker input') as HTMLInputElement;
toggler.addEventListener('change', changeThemeSettings);

function changeThemeSettings(e: Event) {
  if (e.currentTarget instanceof HTMLInputElement) {
    if (e.currentTarget.checked) {
      store.mode = modes.play;
    } else {
      store.mode = modes.train;
    }
  }
  applyThemeSettings();
}

function applyThemeSettings(): void {
  document.querySelectorAll(`[data-mode]`).forEach((el) => {
    if (el instanceof HTMLElement) {
      const prevTheme = el.dataset.mode as string;
      const nextTheme = store.mode;
      el.classList.remove(prevTheme);
      el.classList.add(nextTheme);
      el.dataset.mode = nextTheme;
    }
  });
}

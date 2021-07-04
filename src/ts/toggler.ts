import '../scss/toggle-icon.scss';
import { store } from '../store';
import { IToggler } from '../utils/interfaces/interfaces';

export class Toggler {
  element: HTMLLabelElement;
  input: HTMLInputElement;

  constructor() {
    this.element = document.createElement('label');
    this.element.classList.add('toggler');

    this.input = document.createElement('input');
    this.input.setAttribute('type', 'checkbox');
    this.element.append(this.input);

    this.element.insertAdjacentHTML(
      'beforeend',
      `
    <span class="switch-left">Play</span>
    <span class="switch-right">Train</span>`
    );
  }

  subscribe(): IToggler {
    this.input.addEventListener('change', this.changeThemeSettings);
    return this;
  }

  changeThemeSettings(e: Event): void {
    console.log(e.currentTarget);
    if (e.currentTarget instanceof HTMLInputElement) {
      if (e.currentTarget.checked) {
        store.mode = store.modes.play;
      } else {
        store.mode = store.modes.train;
      }
      console.log(store.mode);
      this.applyThemeSettings();
    }
  }

  applyThemeSettings(): IToggler {
    const els = document.querySelectorAll('[data-mode]');
    els.forEach((el) => {
      if (el instanceof HTMLElement) {
        const prevTheme = el.dataset.mode as string;
        const nextTheme = store.mode;
        el.classList.remove(prevTheme);
        el.classList.add(nextTheme);
        el.dataset.mode = nextTheme;
      }
    });
    return this;
  }
}

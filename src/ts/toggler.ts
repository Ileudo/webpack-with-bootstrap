import '../scss/toggle-icon.scss';
import { store } from '../store';
import { IToggler } from '../utils/interfaces/interfaces';

export class Toggler implements IToggler {
  element: HTMLLabelElement;
  togglingClass: string;
  targetElement: HTMLElement;

  constructor(targetElement: string, togglingClass: string) {
    this.element = document.createElement('label');
    this.element.classList.add('toggler');
    this.element.innerHTML = `
      <input type="checkbox">
      <span class="switch-left">Play</span>
      <span class="switch-right">Train</span>`;

    this.togglingClass = togglingClass;
    this.targetElement = document.querySelector(targetElement) as HTMLElement;
  }

  init(): IToggler {
    const checkbox = this.element.querySelector('input') as HTMLInputElement;
    checkbox.addEventListener('change', () => {
      this.targetElement.classList.toggle(this.togglingClass);
      this.targetElement.classList.contains('play') ? (store.mode = 'play') : (store.mode = 'train');
      console.log(store.mode);
    });
    return this;
  }
}

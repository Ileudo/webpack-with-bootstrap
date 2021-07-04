import '../scss/close-icon.scss';
import { ICloseIcon } from '../utils/interfaces/interfaces';

export class CloseIcon {
  element: HTMLElement;

  constructor(target: string) {
    this.element = document.createElement('button');
    this.element.classList.add('close-icon');
    this.element.id = 'close-icon1';
    this.element.setAttribute('type', 'button');
    this.element.setAttribute('data-target', target);

    this.element.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;
  }

  subscribe(): ICloseIcon {
    this.element.addEventListener('click', this.addToggleCloseIconListener);
    this.element.addEventListener('click', this.addToggleOffcanvasListener);
    return this;
  }

  addToggleCloseIconListener(e: Event): void {
    if (e.currentTarget instanceof HTMLButtonElement) {
      e.stopPropagation();
      e.currentTarget.classList.toggle('open');
    }
  }

  addToggleOffcanvasListener(e: Event): void {
    e.stopPropagation();
    if (e.currentTarget instanceof HTMLButtonElement) {
      const targetId = e.currentTarget.dataset.target as string;
      const target = document.getElementById(targetId) as HTMLElement;
      target.classList.toggle('show');
    }
  }
}

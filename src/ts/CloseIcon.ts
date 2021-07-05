import '../scss/close-icon.scss';
import { ICloseIcon } from '../utils/interfaces/interfaces';

export class CloseIcon {
  element: HTMLElement;
  targetElement: HTMLElement;
  togglingClass: string;
  overlay: HTMLElement;

  constructor(targetElement: HTMLElement, togglingClass: string, overlay: string) {
    this.element = document.createElement('button');
    this.element.classList.add('close-icon');
    this.element.setAttribute('type', 'button');
    this.element.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;

    this.togglingClass = togglingClass;
    this.overlay = document.querySelector(overlay) as HTMLElement;
    this.targetElement = targetElement;
  }

  init(): ICloseIcon {
    this.element.addEventListener('click', (e: Event) => {
      this.element.classList.toggle('open');
    });

    this.element.addEventListener('click', (e: Event) => {
      e.stopPropagation();
      this.targetElement.classList.toggle(this.togglingClass);
    });

    this.overlay.addEventListener('click', (e: Event) => {
      const targetID = `#${this.targetElement.id}`;
      if (e.target instanceof HTMLElement && !e.target.closest(targetID)) {
        this.element.classList.toggle('open');
        this.targetElement.classList.toggle(this.togglingClass);
      }
    });
    return this;
  }

  // addToggleCloseIconListener(e: Event): void {
  //   if (e.currentTarget instanceof HTMLButtonElement) {
  //     e.stopPropagation();
  //     e.currentTarget.classList.toggle('open');
  //   }
  // }

  // addToggleOffcanvasListener(e: Event): void {
  //   e.stopPropagation();
  //   if (e.currentTarget instanceof HTMLButtonElement) {
  //     const targetId = e.currentTarget.dataset.target as string;
  //     const target = document.getElementById(targetId) as HTMLElement;
  //     target.classList.toggle('show');
  //   }
  // }
}

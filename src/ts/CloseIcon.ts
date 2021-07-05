import '../scss/close-icon.scss';
import { ICloseIcon } from '../utils/interfaces/interfaces';

export class CloseIcon {
  element: HTMLElement;
  targetElement: HTMLElement;
  togglingClass: string;

  constructor(targetElement: HTMLElement, togglingClass: string) {
    this.element = document.createElement('button');
    this.element.classList.add('close-icon');
    this.element.setAttribute('type', 'button');
    this.element.innerHTML = `
    <span></span>
    <span></span>
    <span></span>`;

    this.targetElement = targetElement;
    this.togglingClass = togglingClass;
  }

  init(): ICloseIcon {
    this.element.addEventListener('click', (e: Event) => {
      this.element.classList.toggle('open');
    });

    this.element.addEventListener('click', () => {
      this.targetElement.classList.toggle(this.togglingClass);
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

import { ICloseIcon, IToggler } from '../utils/interfaces/interfaces';
import { CloseIcon } from './CloseIcon';
import { Toggler } from './Toggler';

export class Header {
  element: HTMLElement;
  headerRow: HTMLDivElement;
  closeIcon: ICloseIcon;
  toggler: IToggler;

  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add('header');
    this.element.innerHTML = `
    <div class="container-xxl">
      <div class="header__row">
      </div>
    </div>`;

    this.headerRow = this.element.querySelector('.header__row') as HTMLDivElement;
    this.closeIcon = new CloseIcon('offcanvas');
    this.headerRow.append(this.closeIcon.element);
    this.closeIcon.subscribe();

    this.toggler = new Toggler();
    this.headerRow.append(this.toggler.element);
    this.toggler.subscribe();
  }
}

export class Header {
  element: HTMLElement;

  constructor() {
    this.element = document.createElement('header');
    this.element.classList.add('header');
  }

  render() {
    this.element.innerHTML = `
    <div class="container-xxl">
      <div class="header__row">
        <button id="close-icon" type="button" class="close-icon" aria-label="Close">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <label class="rocker" id="rocker">
          <input type="checkbox" />
          <span class="switch-left">Play</span>
          <span class="switch-right">Train</span>
        </label>
      </div>
    </div>`;
    return this.element;
  }
}

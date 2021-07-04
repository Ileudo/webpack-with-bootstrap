export class BaseComponent {
  element: HTMLElement;
  constructor(config: IConfig) {
    this.element = document.createElement(config.tag);
    this.element.classList.add(config.class);
    this.element.classList.add(config.id);
  }
}

export interface IConfig {
  tag: string;
  class: string;
  id: string;
}

import data from '../data.json';
import { ICategory } from '../utils/interfaces/interfaces';

export class Offcanvas {
  element: HTMLElement;
  list: HTMLUListElement;
  categories: string[];

  constructor() {
    this.element = document.createElement('aside');
    this.element.classList.add('offcanvas', 'offcanvas-start', 'mode-train');
    this.element.id = 'offcanvas';
    this.element.setAttribute('data-mode', 'mode-train');

    this.list = document.createElement('ul');
    this.list.classList.add('offcanvas__list');
    this.element.append(this.list);

    this.categories = data.categories.map((category: ICategory) => category.name);
  }

  render(): HTMLElement {
    const li = document.createElement('li');
    li.classList.add('mode-train');

    const a = document.createElement('a');
    a.classList.add('offcanvas__link');
    a.setAttribute('href', '#');
    a.textContent = 'Main Page';
    li.append(a);
    this.list.append(li);

    this.categories.map((name) => {
      const li = document.createElement('li');
      li.classList.add('mode-train');

      const a = document.createElement('a');
      a.classList.add('offcanvas__link');
      a.setAttribute('href', '#cards');
      a.textContent = name;
      li.append(a);
      this.list.append(li);
    });
    return this.element;
  }
}

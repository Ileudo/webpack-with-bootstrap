import '../scss/offcanvas.scss';
import data from '../data.json';
import { ICategory } from '../utils/interfaces/interfaces';

export class Offcanvas {
  element: HTMLElement;
  list: HTMLUListElement;

  constructor() {
    this.element = document.createElement('aside');
    this.element.classList.add('offcanvas', 'offcanvas-start');
    this.element.id = 'offcanvas';

    this.list = document.createElement('ul');
    this.list.classList.add('offcanvas__list');
    this.element.append(this.list);

    this.list.innerHTML = `
    <li><a href="#" class="offcanvas__link">Main Page</a></li>`;

    const categories: string[] = data.categories.map((category: ICategory) => category.name);
    categories.map((name) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#cards" class="offcanvas__link">${name}</a>`;
      this.list.append(li);
    });
  }
}

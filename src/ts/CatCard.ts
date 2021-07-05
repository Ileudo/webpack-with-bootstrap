import { ICatCard } from '../utils/interfaces/interfaces';

export class CatCard {
  element: HTMLAnchorElement;
  card: HTMLDivElement;

  constructor(name: string, imgSrc: string) {
    this.element = document.createElement('a');
    this.element.classList.add('categories__card', 'col-sm-6', 'col-lg-4', 'col-xl-3');
    this.element.setAttribute('href', '#cards');

    this.card = document.createElement('div');
    this.card.classList.add('categories__card-content');
    this.element.append(this.card);

    this.card.innerHTML = `
    <div class="categories__card-up"></div>
    <div class="categories__card-avatar">
      <img src="./assets/images/${name}/${imgSrc}"/>
    </div>
    <div class="categories__card-body">
      <h4 class="categories__card-title">${name}</h4>
    </div>
    `;
  }

  init(): ICatCard {
    return this;
  }
}

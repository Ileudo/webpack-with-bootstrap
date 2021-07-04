import data from '../data.json';
import { store } from '../store';
import { ICard, ICardData, ICardsField, ICategory } from '../utils/interfaces/interfaces';
import { Card } from './Card';

export class CardsField {
  element: HTMLElement;
  cards: ICard[] = [];
  categoryRow: HTMLElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('category');

    this.element.innerHTML = `
    <div class="container-xxl">
      <div class="category__stars">
        <span class="bi bi-star"></span>
        <span class="bi bi-star-fill"></span>
      </div>
      <div class="row category__row"></div>
      <div class="category__controls">
        <button class="btn btn-lg btn-orange-gradient category__btn mode-train" data-mode="mode-train">
          Start New Game
        </button>
        <span class="bi bi-arrow-clockwise"></span>
      </div>
    </div>
    `;

    this.categoryRow = this.element.querySelector('.category__row') as HTMLDivElement;
  }

  setCards(): ICardsField {
    const categoryData = data.categories.find((category: ICategory) => category.name === store.category);
    this.cards = categoryData.cards.map((cardData: ICardData) => new Card(cardData).subscribe());
    return this;
  }

  addCards(): ICardsField {
    this.cards.map((card) => {
      this.categoryRow.append(card.element);
    });
    return this;
  }
}

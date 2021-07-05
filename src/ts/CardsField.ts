import data from '../data.json';
import { store } from '../store';
import { ICard, ICardData, ICardsField, ICategory } from '../utils/interfaces/interfaces';
import { Card } from './Card';

export class CardsField {
  element: HTMLElement;
  cards: ICard[] = [];
  audioList: HTMLAudioElement[] = [];
  guessedCard?: HTMLElement;
  chosenCard?: HTMLElement;
  categoryRow: HTMLDivElement;
  categoryStars: HTMLDivElement;
  startGameBtn: HTMLButtonElement;
  repeatAudioBtn: HTMLButtonElement;

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
        <button class="btn btn-lg btn-orange-gradient category__btn">
          Start New Game
        </button>
        <button class="btn btn-orange-gradient category__btn-repeat">
        <span class="btn bi bi-arrow-clockwise"></span>
        </button>
      </div>
    </div>
    `;

    this.categoryRow = this.element.querySelector('.category__row') as HTMLDivElement;
    this.categoryStars = this.element.querySelector('.category__stars') as HTMLDivElement;
    this.startGameBtn = this.element.querySelector('.category__btn') as HTMLButtonElement;
    this.repeatAudioBtn = this.element.querySelector('.category__btn-repeat') as HTMLButtonElement;
  }

  init(): ICardsField {
    this.setCards();
    this.addCards();
    this.getAudioList();
    this.startGame();
    return this;
  }

  setCards(): ICardsField {
    const categoryData = data.categories.find((category: ICategory) => category.name === store.category);
    this.cards = categoryData.cards.map((cardData: ICardData) => new Card(cardData).init());
    return this;
  }

  addCards(): ICardsField {
    this.cards.map((card) => this.categoryRow.append(card.element));
    return this;
  }

  getAudioList(): HTMLAudioElement[] {
    this.audioList = this.cards.map((card) => card.element.querySelector('audio') as HTMLAudioElement);
    return this.audioList;
  }

  startGame() {
    this.startGameBtn.addEventListener('click', () => {
      this.element.classList.add('game');
      this.shuffleAudioList();
      this.playAudio();
      this.checkAnswer();
    });
  }

  shuffleAudioList() {
    this.audioList.sort(() => Math.random() - 0.5);
    console.log(this.audioList);
  }

  playAudio() {
    this.audioList[this.audioList.length - 1].play();
    this.guessedCard = this.audioList[this.audioList.length - 1].closest('.category__card') as HTMLElement;
  }

  checkAnswer() {
    this.element.addEventListener('click', (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.closest('.category__card')) {
        this.chosenCard = e.target.closest('.category__card') as HTMLElement;
        if (this.guessedCard === this.chosenCard) {
          this.chosenCard.classList.add('inactive');
          this.audioList.pop();
          this.playAudio();
        } else {
          console.log('Wrong Answer');
        }
      }
    });
  }

  clearGame() {
    this.element.classList.remove('game');
  }
}

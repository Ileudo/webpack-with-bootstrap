import '../scss/category-card.scss';
import { store } from '../store';
import { ICard, ICardData } from '../utils/interfaces/interfaces';

export class Card {
  element: HTMLElement;
  card: HTMLElement;
  en: string;
  ru: string;
  img: string;
  audio: string;
  isFlipped: boolean = false;

  constructor(cardData: ICardData) {
    this.en = cardData.en;
    this.ru = cardData.ru;
    this.img = cardData.img;
    this.audio = cardData.audio;

    this.element = document.createElement('a');
    this.element.classList.add('category__card', 'col-sm-6', 'col-lg-4', 'col-xl-3');

    this.card = document.createElement('div');
    this.card.classList.add('category__card-content');
    this.element.append(this.card);

    this.card.innerHTML = `
    <div class="category__card-back">
      <span class="bi bi-music-note-beamed"></span>
      <div class="category__image-wrapper">
        <img src="./assets/images/${store.category}/${this.img}" alt="${this.en}" />
      </div>
      <div class="category__card-body">
        <p class="category__card-text">${this.en}</p>
        <span class="bi bi-arrow-repeat"></span>
      </div>
    </div>
    <div class="category__card-front">
      <div class="category__image-wrapper">
        <img src="./assets/images/${store.category}/${this.img}" alt="${this.ru}" />
      </div>
      <div class="category__card-body">
        <p class="category__card-text">${this.ru}</p>
      </div>
    </div>
    <audio src="./assets/audio/${store.category}/${this.audio}"></audio>
    `;
  }

  init(): ICard {
    this.card.addEventListener('click', this.flip);
    this.card.addEventListener('click', this.playAudio);
    this.card.addEventListener('mouseleave', this.flipBack);
    return this;
  }

  private flip(e: Event) {
    if (
      e.target instanceof HTMLElement &&
      e.currentTarget instanceof HTMLElement &&
      e.target.classList.contains('bi-arrow-repeat')
    ) {
      e.currentTarget.classList.add('flipped');
      e.currentTarget.addEventListener('transitionend', () => {
        this.isFlipped = true;
      });
    }
  }

  private flipBack(e: Event) {
    if (e.currentTarget instanceof HTMLElement && e.currentTarget.classList.contains('flipped') && this.isFlipped) {
      e.currentTarget.classList.remove('flipped');
      this.isFlipped = false;
    }
  }

  private playAudio(e: Event) {
    if (
      e.target instanceof HTMLElement &&
      e.currentTarget instanceof HTMLElement &&
      !e.target.classList.contains('bi-arrow-repeat') &&
      store.mode === 'train'
    ) {
      const audio = e.currentTarget.querySelector(`audio`) as HTMLAudioElement;
      audio.currentTime = 0;
      audio.play();
    }
  }
}

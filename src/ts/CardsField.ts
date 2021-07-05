import data from '../data.json';
import { store } from '../store';
import { ICard, ICardData, ICardsField, ICategory, TStar } from '../utils/interfaces/interfaces';
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
  correctAnswerSound: HTMLAudioElement;
  wrongAnswerSound: HTMLAudioElement;

  constructor() {
    this.element = document.createElement('section');
    this.element.classList.add('category');

    this.element.innerHTML = `
    <div class="container-xxl">
      <div class="category__stars">
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
      <audio id="correct-answer-sound" src="./assets/audio/correct-answer.mp3"></audio>
      <audio id="wrong-answer-sound" src="./assets/audio/wrong-answer.mp3"></audio>
    </div>
    `;

    this.categoryRow = this.element.querySelector('.category__row') as HTMLDivElement;
    this.categoryStars = this.element.querySelector('.category__stars') as HTMLDivElement;
    this.startGameBtn = this.element.querySelector('.category__btn') as HTMLButtonElement;
    this.repeatAudioBtn = this.element.querySelector('.category__btn-repeat') as HTMLButtonElement;
    this.correctAnswerSound = this.element.querySelector('#correct-answer-sound') as HTMLAudioElement;
    this.wrongAnswerSound = this.element.querySelector('#wrong-answer-sound') as HTMLAudioElement;
  }

  init(): ICardsField {
    this.setCards();
    this.addCards();
    this.getAudioList();
    this.listenGameStart();
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

  listenGameStart() {
    this.startGameBtn.addEventListener('click', () => {
      this.element.classList.add('game');
      this.shuffleAudioList();
      this.playAudio();
      this.listenRepeatWord();
      this.checkAnswer();
    });
  }

  shuffleAudioList() {
    this.audioList.sort(() => Math.random() - 0.5);
  }

  playAudio() {
    this.audioList[this.audioList.length - 1].currentTime = 0;
    this.audioList[this.audioList.length - 1].play();
    this.guessedCard = this.audioList[this.audioList.length - 1].closest('.category__card') as HTMLElement;
  }

  checkAnswer() {
    this.element.addEventListener('click', (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.closest('.category__card')) {
        this.chosenCard = e.target.closest('.category__card') as HTMLElement;
        if (this.guessedCard === this.chosenCard) {
          this.correctAnswerSound.currentTime = 0;
          this.correctAnswerSound.play();
          this.chosenCard.classList.add('inactive');
          this.audioList.pop();
          this.addStar('+');
          this.playAudio();
        } else {
          this.wrongAnswerSound.currentTime = 0;
          this.wrongAnswerSound.play();
          this.addStar('-');
          console.log('wrong Answer');
        }
      }
    });
  }

  listenRepeatWord() {
    this.repeatAudioBtn.addEventListener('click', () => {
      this.audioList[this.audioList.length - 1].currentTime = 0;
      this.audioList[this.audioList.length - 1].play();
    });
  }

  addStar(type: TStar) {
    if (type === '+') this.categoryStars.insertAdjacentHTML('beforeend', '<span class="bi bi-star-fill"></span>');
    if (type === '-') this.categoryStars.insertAdjacentHTML('beforeend', '<span class="bi bi-star"></span>');
  }

  clearGame() {
    this.element.classList.remove('game');
  }
}

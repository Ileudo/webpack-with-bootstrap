import data from '../data.json';
import { store } from '../store';
import { ICard, ICardData, ICardsField, ICategory, TStar } from '../utils/interfaces/interfaces';
import { Card } from './Card';
import { ModalLoose } from './ModalLoose';
import { ModalWin } from './ModalWin';

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
  wrongAnswerCount: number = 0;

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

  listenGameStart(): ICardsField {
    this.startGameBtn.onclick = () => {
      store.gameState = 'started';
      this.element.classList.add('game');
      this.shuffleAudioList();
      this.setGuessedCard();
      this.playAudio();
      this.listenRepeatWord();
      this.checkAnswer();
    }; // КОСТЫЛИ
    return this;
  }

  shuffleAudioList(): ICardsField {
    this.audioList.sort(() => Math.random() - 0.5);
    return this;
  }

  playAudio(): ICardsField {
    this.audioList[this.audioList.length - 1].currentTime = 0;
    this.audioList[this.audioList.length - 1].play();
    return this;
  }

  setGuessedCard() {
    this.guessedCard = this.audioList[this.audioList.length - 1].closest('.category__card') as HTMLElement;
  }

  checkAnswer(): ICardsField {
    this.element.onclick = (e: Event) => {
      if (e.target instanceof HTMLElement && e.target.closest('.category__card') && store.gameState === 'started') {
        this.chosenCard = e.target.closest('.category__card') as HTMLElement;
        if (this.guessedCard === this.chosenCard) {
          this.correctAnswerSound.currentTime = 0;
          this.correctAnswerSound.play();
          this.chosenCard.classList.add('inactive');
          this.addStar('+');
          this.audioList.pop();
          this.isGameFinished();
        } else {
          this.wrongAnswerSound.currentTime = 0;
          this.wrongAnswerSound.play();
          this.wrongAnswerCount++;
          this.addStar('-');
        }
      }
    }; // ONCLICK-КОСТЫЛИ
    return this;
  }

  isGameFinished(): ICardsField {
    if (this.audioList.length !== 0) {
      this.setGuessedCard();
      setTimeout(() => this.playAudio(), 1000);
    } else {
      this.finishGame();
      store.gameState = 'notStarted';
    }
    return this;
  }

  listenRepeatWord(): ICardsField {
    this.repeatAudioBtn.addEventListener('click', () => {
      this.audioList[this.audioList.length - 1].currentTime = 0;
      this.audioList[this.audioList.length - 1].play();
    });
    return this;
  }

  addStar(type: TStar): ICardsField {
    if (type === '+') this.categoryStars.insertAdjacentHTML('beforeend', '<span class="bi bi-star-fill"></span>');
    if (type === '-') this.categoryStars.insertAdjacentHTML('beforeend', '<span class="bi bi-star"></span>');
    return this;
  }

  finishGame() {
    if (this.wrongAnswerCount > 0) {
      const modalLoose = new ModalLoose(this.wrongAnswerCount);
      this.element.append(modalLoose.element);
      modalLoose.audio.play();
      setTimeout(() => {
        modalLoose.element.remove();
        this.clear().init();
      }, 5000);
    } else {
      const modalWin = new ModalWin();
      this.element.append(modalWin.element);
      modalWin.audio.play();
      setTimeout(() => {
        modalWin.element.remove();
        this.clear().init();
      }, 6000);
    }
  }

  clear(): ICardsField {
    this.categoryRow.innerHTML = '';
    this.categoryStars.innerHTML = '';
    this.cards = [];
    this.audioList = [];
    this.element.classList.remove('game');
    return this;
  }
}

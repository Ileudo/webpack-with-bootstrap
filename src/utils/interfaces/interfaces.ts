export interface ICategory {
  name: string;
  cards: [
    {
      en: string;
      ru: string;
      img: string;
      audio: string;
    }
  ];
}

export interface ICard {
  element: HTMLElement;
  card: HTMLElement;
  en: string;
  ru: string;
  img: string;
  audio: string;
  isFlipped: boolean;
  init(): ICard;
}

export interface ICardData {
  en: string;
  ru: string;
  img: string;
  audio: string;
}

export interface IToggler {
  element: HTMLLabelElement;
  togglingClass: string;
  targetElement: HTMLElement;
  init(): IToggler;
}

export interface ICardsField {
  element: HTMLElement;
  cards: ICard[];
  categoryRow: HTMLDivElement;
  categoryStars: HTMLDivElement;
  startGameBtn: HTMLButtonElement;
  init(): ICardsField;
  setCards(): ICardsField;
  addCards(): ICardsField;
  getAudioList(): HTMLAudioElement[];
}

export type TStar = '+' | '-';

export interface ICloseIcon {
  element: HTMLElement;
  target: string;
  togglingClass: string;
  overlay: string;
  targetElement: HTMLElement;
  overlayElement: HTMLElement;
  init(): ICloseIcon;
}

export interface IOffcanvas {
  element: HTMLElement;
}

export interface IHeader {
  element: HTMLElement;
  init(): IHeader;
}

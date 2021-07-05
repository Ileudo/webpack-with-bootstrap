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
  subscribe(): ICard;
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
  categoryRow: HTMLElement;
  setCards(): ICardsField;
  addCards(): ICardsField;
}

export interface ICloseIcon {
  element: HTMLElement;
  targetElement: HTMLElement;
  togglingClass: string;
  init(): ICloseIcon;
}

export interface IOffcanvas {
  element: HTMLElement;
}

export interface IHeader {
  element: HTMLElement;
}

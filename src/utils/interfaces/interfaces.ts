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
  element: HTMLElement;
  subscribe(): IToggler;
  changeThemeSettings(e: Event): void;
  applyThemeSettings(): IToggler;
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
  subscribe(): ICloseIcon;
  addToggleCloseIconListener(e: Event): void;
  addToggleOffcanvasListener(e: Event): void;
}

export interface IOffcanvas {
  element: HTMLElement;
}

export interface IHeader {
  element: HTMLElement;
}

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
  cardContainer: HTMLElement;
  card: HTMLElement;
  render(): ICard;
}

export interface ICardData {
  en: string;
  ru: string;
  img: string;
  audio: string;
}

export interface ICardsField {
  element: HTMLElement;
  categoryData: ICategory;
  cards: HTMLElement[];
  render(): HTMLElement;
}

export interface IHeader {
  element: HTMLElement;
  render(): HTMLElement;
}

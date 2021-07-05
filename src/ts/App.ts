import { ICardsField, IHeader, IOffcanvas } from '../utils/interfaces/interfaces';
import { CardsField } from './CardsField';
import { Header } from './Header';

export class App {
  container: HTMLBodyElement;
  header: IHeader;
  cardsField: ICardsField;

  constructor() {
    this.container = document.querySelector('body') as HTMLBodyElement;
    this.header = new Header();
    this.cardsField = new CardsField();
  }

  render() {
    this.container.append(this.header.element);
    this.container.append(this.cardsField.element);
    this.cardsField.setCards().addCards();
  }
}

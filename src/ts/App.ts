import { ICardsField, IHeader, IOffcanvas } from '../utils/interfaces/interfaces';
import { CardsField } from './CardsField';
import { Header } from './Header';
import { Offcanvas } from './Offcanvas';

export class App {
  container: HTMLBodyElement;
  header: IHeader;
  cardsField: ICardsField;
  offcanvas: IOffcanvas;

  constructor() {
    this.container = document.querySelector('body') as HTMLBodyElement;
    this.header = new Header();
    this.offcanvas = new Offcanvas();
    this.cardsField = new CardsField();
  }

  render() {
    this.container.append(this.header.element);
    this.container.append(this.offcanvas.element);
    this.container.append(this.cardsField.element);
    this.cardsField.setCards().addCards();
  }
}

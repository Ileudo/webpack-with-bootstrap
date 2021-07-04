import { ICardsField, IHeader } from '../utils/interfaces/interfaces';
import { CardsField } from './CardsField';
import { Header } from './Header';
import { Offcanvas } from './Offcanvas';

export class App {
  container: HTMLBodyElement;
  header: HTMLElement;
  cardsField: HTMLElement;
  offcanvas: HTMLElement;

  constructor() {
    this.container = document.querySelector('body') as HTMLBodyElement;
    this.cardsField = new CardsField().render();
    this.header = new Header().render();
    this.offcanvas = new Offcanvas().render();
  }

  render() {
    this.container.append(this.header);
    this.container.append(this.cardsField);
    this.container.append(this.offcanvas);
  }
}

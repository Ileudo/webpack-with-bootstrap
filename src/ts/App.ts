import { ICardsField, ICatField, IHeader, IOffcanvas } from '../utils/interfaces/interfaces';
import { CardsField } from './CardsField';
import { CatField } from './CatField';
import { Header } from './Header';

export class App {
  container: HTMLBodyElement;
  header: IHeader;
  catField: ICatField;
  cardsField: ICardsField;

  constructor() {
    this.container = document.querySelector('body') as HTMLBodyElement;
    this.header = new Header();
    this.catField = new CatField();
    this.cardsField = new CardsField();
  }

  render() {
    this.container.append(this.header.element);
    this.header.init();
    this.container.append(this.catField.element);
    this.catField.init();
    this.container.append(this.cardsField.element);
    this.cardsField.init();
    this.cardsField.getAudioList();
  }
}

import { ICardsField, ICatField, IHeader, IOffcanvas } from '../utils/interfaces/interfaces';
import { CardsField } from './CardsField';
import { CatField } from './CatField';
import { Header } from './Header';

export class App {
  container: HTMLBodyElement;
  header: IHeader;
  catField: ICatField;
  cardsField: ICardsField;
  page: HTMLDivElement;

  constructor() {
    this.container = document.body as HTMLBodyElement;
    this.header = new Header();
    this.container.prepend(this.header.element);
    this.page = document.createElement('div');
    this.page.id = 'page';
    this.container.append(this.page);
    this.catField = new CatField();
    this.cardsField = new CardsField();
  }

  init() {
    this.header.init();
    const hash = window.location.hash;
    this.renderNewPage(hash);
    this.listenHashChange();
  }

  renderNewPage(hash: string) {
    this.page.innerHTML = '';
    if (hash === '') {
      this.catField.clear();
      this.page.append(this.catField.element);
      this.catField.init();
    } else if (hash === '#cards') {
      this.cardsField.clear();
      this.page.append(this.cardsField.element);
      this.cardsField.init();
    }
  }

  listenHashChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      console.log(hash);
      this.renderNewPage(hash);
    });
  }
}

import { Modal } from './Modal';
import imgModalLoose from '../assets/images/Modal/modal-loose.png';
import audioModalLoose from '../assets/audio/finish-game-failure.mp3';

export class ModalLoose extends Modal {
  constructor(num: number) {
    super();
    num === 1 ? (this.header.textContent = `${num} error`) : (this.header.textContent = `${num} errors`);
    this.img.src = imgModalLoose;
    this.audio.src = audioModalLoose;
  }
}

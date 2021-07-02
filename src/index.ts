// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.scss';
import './assets/images/Action1/cry.jpg';
import './assets/images/Action1/dance.jpg';
import './assets/images/Action1/dive.jpg';
import './assets/images/Action1/draw.jpg';
import './assets/images/Action1/fish.jpg';
import './assets/images/Action1/fly.jpg';
import './assets/images/Action1/hug.jpg';
import './assets/images/Action1/jump.jpg';
import './assets/audio/Action1/cry.mp3';
import './assets/audio/Action1/dance.mp3';
import './assets/audio/Action1/dive.mp3';
import './assets/audio/Action1/draw.mp3';
import './assets/audio/Action1/fish.mp3';
import './assets/audio/Action1/fly.mp3';
import './assets/audio/Action1/hug.mp3';
import './assets/audio/Action1/jump.mp3';

import './ts/toggler.ts';

console.log('App is working');

function addToggleListener(buttonClass: string, targetClass: string, togglingClass: string) {
  const button = document.querySelector(buttonClass) as HTMLButtonElement;
  const target = document.querySelector(targetClass) as HTMLElement;
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    target.classList.toggle(togglingClass);
  });
}

function showButton(buttonClass: string) {
  const button = document.querySelector(buttonClass) as HTMLButtonElement;
  button.hidden = false;
}

addToggleListener('.close-icon', '.offcanvas', 'show');
addToggleListener('.close-icon', '.close-icon', 'open');
closeOnCoverClickListener('.body', '.offcanvas', 'show');

function closeOnCoverClickListener(coverClass: string, targetClass: string, togglingClass: string) {
  const cover = document.querySelector(coverClass) as HTMLElement;
  const target = document.querySelector(targetClass) as HTMLElement;
  cover.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement) {
      //
      if (target.classList.contains('show')) {
        if (!e.target.closest(targetClass)) {
          target.classList.remove(togglingClass);
          document.querySelector('.close-icon')?.classList.remove('open');
          showButton('.close-icon');
          //
        }
      }
    }
  });
}

//Flipping
const categoryCards = document.querySelectorAll('.category__card');
let isFlipped = false;

categoryCards.forEach((card) => {
  card.addEventListener('click', flip);
  card.addEventListener('click', playAudio);
  card.addEventListener('mouseleave', flipBack);
  card.addEventListener('mouseover', (e) => {
    if (e.target instanceof HTMLElement) {
      // if(!e.target.classList.contains('.bi-arrow-repeat'))
    }
  });
});

function flip(e: Event) {
  if (
    e.target instanceof HTMLElement &&
    e.currentTarget instanceof HTMLElement &&
    e.target.classList.contains('bi-arrow-repeat')
  ) {
    console.log(e.currentTarget);
    e.currentTarget.classList.add('flipped');
    e.currentTarget.addEventListener('transitionend', () => {
      isFlipped = true;
    });
  }
}

function flipBack(e: Event) {
  if (e.currentTarget instanceof HTMLElement && e.currentTarget.classList.contains('flipped') && isFlipped) {
    e.currentTarget.classList.remove('flipped');
    isFlipped = false;
  }
}

function playAudio(e: Event) {
  if (
    e.target instanceof HTMLElement &&
    e.currentTarget instanceof HTMLElement &&
    !e.target.classList.contains('bi-arrow-repeat')
  ) {
    const key = e.currentTarget.dataset.key as string;
    const audio = e.currentTarget.querySelector(`audio`) as HTMLAudioElement;
    audio.currentTime = 0;
    audio.play();
  }
}

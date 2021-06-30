// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/styles.scss';

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

function switchTheme(e: Event): void {
  if (e.target instanceof HTMLInputElement) {
    const themes = { green: 'theme-green', orange: 'theme-orange' };
    console.log(`[${themes.green}]`);

    if (e.target.checked) {
      document.querySelectorAll(`.${themes.green}`).forEach((el) => {
        el.classList.remove(themes.green);
        el.classList.add(themes.orange);
      });
    } else {
      document.querySelectorAll(`.${themes.orange}`).forEach((el) => {
        el.classList.remove(themes.orange);
        el.classList.add(themes.green);
      });
    }
  }
}

const toggler = document.querySelector('#rocker input') as HTMLInputElement;
toggler.addEventListener('change', switchTheme);

const categoryCards = document.querySelectorAll('.category__card');
let isFlipped = false;
categoryCards.forEach((card) => {
  card.addEventListener('click', (e) => {
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains('bi-arrow-repeat')) {
        card.classList.add('flipped');
        const cardContent = card.querySelector('.category__card-content') as HTMLDivElement;
        cardContent.addEventListener('transitionend', () => {
          isFlipped = true;
        });
      }
    }
  });
  card.addEventListener('mouseleave', () => {
    if (card.classList.contains('flipped') && isFlipped) {
      card.classList.remove('flipped');
      isFlipped = false;
    }
  });
  card.addEventListener('mouseover', (e) => {
    if (e.target instanceof HTMLElement) {
      // if(!e.target.classList.contains('.bi-arrow-repeat'))
    }
  });
});

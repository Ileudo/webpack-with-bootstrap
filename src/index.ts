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

// function hideTargetButton(buttonClass: string) {
//   const button = document.querySelector(buttonClass) as HTMLButtonElement;
//   button.addEventListener(
//     'click',
//     (e) => {
//       e.stopPropagation();
//       button.hidden = true;
//     },
//     { once: true }
//   );
// }

function showButton(buttonClass: string) {
  const button = document.querySelector(buttonClass) as HTMLButtonElement;
  button.hidden = false;
}

addToggleListener('.close-icon', '.offcanvas', 'show');
addToggleListener('.close-icon', '.close-icon', 'open');
closeOnCoverClickListener('.body', '.offcanvas', 'show');
// hideTargetButton('.close-icon');
// showButton('.close-icon');

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

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
exports.store = {
    mode: 'mode-train',
    category: 'Action1',
};


/***/ }),

/***/ "./src/ts/App.ts":
/*!***********************!*\
  !*** ./src/ts/App.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var CardsField_1 = __webpack_require__(/*! ./CardsField */ "./src/ts/CardsField.ts");
var App = /** @class */ (function () {
    function App() {
        this.container = document.body;
        this.cardsField = new CardsField_1.CardsField().render();
    }
    App.prototype.render = function () {
        this.container.append();
    };
    return App;
}());
exports.App = App;


/***/ }),

/***/ "./src/ts/Card.ts":
/*!************************!*\
  !*** ./src/ts/Card.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = void 0;
var store_1 = __webpack_require__(/*! ../store */ "./src/store.ts");
var Card = /** @class */ (function () {
    function Card() {
        this.cardContainer = document.createElement('a');
        this.cardContainer.className = 'category__card col-sm-6 col-lg-4 col-xl-3';
        this.card = document.createElement('div');
        this.card.classList.add('category__card-content');
    }
    Card.prototype.render = function (cardData) {
        this.card.innerHTML = "\n    <div class=\"category__card-back\">\n      <span class=\"bi bi-music-note-beamed\"></span>\n      <div class=\"category__image-wrapper\">\n        <img src=\"./assets/images/" + store_1.store.category + "/" + cardData.img + "\" alt=\"" + cardData.en + "\" />\n      </div>\n      <div class=\"category__card-body\">\n        <p class=\"category__card-text\">" + cardData.en + "</p>\n        <span class=\"bi bi-arrow-repeat\"></span>\n      </div>\n    </div>\n    <div class=\"category__card-front\">\n      <div class=\"category__image-wrapper\">\n        <img src=\"./assets/images/" + store_1.store.category + "/" + cardData.img + "\" alt=\"" + cardData.ru + "\" />\n      </div>\n      <div class=\"category__card-body\">\n        <p class=\"category__card-text\">" + cardData.ru + "</p>\n      </div>\n    </div>\n    <audio src=\"./assets/audio/" + store_1.store.category + "/" + cardData.audio + "\"></audio>\n    ";
        this.cardContainer.append(this.card);
        return this.cardContainer;
    };
    return Card;
}());
exports.Card = Card;


/***/ }),

/***/ "./src/ts/CardsField.ts":
/*!******************************!*\
  !*** ./src/ts/CardsField.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsField = void 0;
var data_json_1 = __importDefault(__webpack_require__(/*! ../data.json */ "./src/data.json"));
var store_1 = __webpack_require__(/*! ../store */ "./src/store.ts");
var Card_1 = __webpack_require__(/*! ./Card */ "./src/ts/Card.ts");
var CardsField = /** @class */ (function () {
    function CardsField() {
        this.container = document.createElement('div');
        this.container.className = 'row category row';
    }
    CardsField.prototype.render = function () {
        var _this = this;
        var category = data_json_1.default.categories.find(function (category) { return category.name === store_1.store.category; });
        category.cards.map(function (cardData) {
            var card = new Card_1.Card().render(cardData);
            _this.container.append(card);
        });
        return this.container;
    };
    return CardsField;
}());
exports.CardsField = CardsField;


/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"categories":[{"name":"Action1","cards":[{"en":"cry","ru":"плакать","img":"cry.jpg","audio":"cry.mp3"},{"en":"dance","ru":"танцевать","img":"dance.jpg","audio":"dance.mp3"},{"en":"dive","ru":"нырять","img":"dive.jpg","audio":"dive.mp3"},{"en":"draw","ru":"рисовать","img":"draw.jpg","audio":"draw.mp3"},{"en":"fish","ru":"ловить рыбу","img":"fish.jpg","audio":"fish.mp3"},{"en":"fly","ru":"Летать","img":"fly.jpg","audio":"fly.mp3"},{"en":"hug","ru":"обнимать","img":"hug.jpg","audio":"hug.mp3"},{"en":"jump","ru":"прыгать","img":"jump.jpg","audio":"jump.mp3"}]},{"name":"Action2","cards":[{"en":"open","ru":"открывать","img":"open.jpg","audio":"open.mp3"},{"en":"play","ru":"играть","img":"play.jpg","audio":"play.mp3"},{"en":"point","ru":"указывать","img":"point.jpg","audio":"point.mp3"},{"en":"ride","ru":"ездить","img":"ride.jpg","audio":"ride.mp3"},{"en":"run","ru":"бегать","img":"run.jpg","audio":"run.mp3"},{"en":"sing","ru":"петь","img":"sing.jpg","audio":"sing.mp3"},{"en":"skip","ru":"пропускать, прыгать","img":"skip.jpg","audio":"skip.mp3"},{"en":"swim","ru":"плавать","img":"swim.jpg","audio":"swim.mp3"}]},{"name":"Action3","cards":[{"en":"argue","ru":"спорить","img":"argue.jpg","audio":"argue.mp3"},{"en":"build","ru":"строить","img":"build.jpg","audio":"build.mp3"},{"en":"carry","ru":"нести","img":"carry.jpg","audio":"carry.mp3"},{"en":"catch","ru":"ловить","img":"catch.jpg","audio":"catch.mp3"},{"en":"drive","ru":"водить","img":"drive.jpg","audio":"drive.mp3"},{"en":"drop","ru":"падать","img":"drop.jpg","audio":"drop.mp3"},{"en":"pull","ru":"тянуть","img":"pull.jpg","audio":"pull.mp3"},{"en":"push","ru":"толкать","img":"push.jpg","audio":"push.mp3"}]},{"name":"Adjective","cards":[{"en":"big","ru":"большой","img":"big.jpg","audio":"big.mp3"},{"en":"fast","ru":"быстрый","img":"fast.jpg","audio":"fast.mp3"},{"en":"friendly","ru":"дружелюбный","img":"friendly.jpg","audio":"friendly.mp3"},{"en":"old","ru":"старый","img":"old.jpg","audio":"old.mp3"},{"en":"slow","ru":"медленный","img":"slow.jpg","audio":"slow.mp3"},{"en":"small","ru":"маленький","img":"small.jpg","audio":"small.mp3"},{"en":"unfriendly","ru":"недружелюбный","img":"unfriendly.jpg","audio":"unfriendly.mp3"},{"en":"young","ru":"молодой","img":"young.jpg","audio":"young.mp3"}]},{"name":"Animal1","cards":[{"en":"cat","ru":"кот","img":"cat.jpg","audio":"cat.mp3"},{"en":"chick","ru":"цыплёнок","img":"chick.jpg","audio":"chick.mp3"},{"en":"chicken","ru":"курочка","img":"chicken.jpg","audio":"chicken.mp3"},{"en":"dog","ru":"пёс","img":"dog.jpg","audio":"dog.mp3"},{"en":"horse","ru":"лошадка","img":"horse.jpg","audio":"horse.mp3"},{"en":"pig","ru":"свинья","img":"pig.jpg","audio":"pig.mp3"},{"en":"rabbit","ru":"кролик","img":"rabbit.jpg","audio":"rabbit.mp3"},{"en":"sheep","ru":"овечка","img":"sheep.jpg","audio":"sheep.mp3"}]},{"name":"Animal2","cards":[{"en":"bird","ru":"птичка","img":"bird.jpg","audio":"bird.mp3"},{"en":"dolphin","ru":"дельфин","img":"dolphin.jpg","audio":"dolphin.mp3"},{"en":"fish","ru":"рыба","img":"fish.jpg","audio":"fish.mp3"},{"en":"frog","ru":"лягушка","img":"frog.jpg","audio":"frog.mp3"},{"en":"giraffe","ru":"жираф","img":"giraffe.jpg","audio":"giraffe.mp3"},{"en":"lion","ru":"лев","img":"lion.jpg","audio":"lion.mp3"},{"en":"mouse","ru":"мышка","img":"mouse.jpg","audio":"mouse.mp3"},{"en":"turtle","ru":"черепашка","img":"turtle.jpg","audio":"turtle.mp3"}]},{"name":"Clothes","cards":[{"en":"blouse","ru":"блузка","img":"blouse.jpg","audio":"blouse.mp3"},{"en":"boots","ru":"ботинки","img":"boots.jpg","audio":"boots.mp3"},{"en":"coat","ru":"пальто","img":"coat.jpg","audio":"coat.mp3"},{"en":"dress","ru":"платье","img":"dress.jpg","audio":"dress.mp3"},{"en":"pants","ru":"штаны","img":"pants.jpg","audio":"pants.mp3"},{"en":"shirt","ru":"рубашка","img":"shirt.jpg","audio":"shirt.mp3"},{"en":"shoes","ru":"туфли","img":"shoes.jpg","audio":"shoes.mp3"},{"en":"skirt","ru":"юбка","img":"skirt.jpg","audio":"skirt.mp3"}]},{"name":"Emotions","cards":[{"en":"angry","ru":"сердитый","img":"angry.jpg","audio":"angry.mp3"},{"en":"happy","ru":"счастливый","img":"happy.jpg","audio":"happy.mp3"},{"en":"laugh","ru":"смех","img":"laugh.jpg","audio":"laugh.mp3"},{"en":"sad","ru":"грустный","img":"sad.jpg","audio":"sad.mp3"},{"en":"scared","ru":"испуганный","img":"scared.jpg","audio":"scared.mp3"},{"en":"smile","ru":"улыбка","img":"smile.jpg","audio":"smile.mp3"},{"en":"surprised","ru":"удивлённый","img":"surprised.jpg","audio":"surprised.mp3"},{"en":"tired","ru":"уставший","img":"tired.jpg","audio":"tired.mp3"}]}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
__webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");
// import './ts/toggler.ts';
// import './ts/Card';
var App_1 = __webpack_require__(/*! ./ts/App */ "./src/ts/App.ts");
var app = new App_1.App();
app.render();
// console.log('App is working');
// function addToggleListener(buttonClass: string, targetClass: string, togglingClass: string) {
//   const button = document.querySelector(buttonClass) as HTMLButtonElement;
//   const target = document.querySelector(targetClass) as HTMLElement;
//   button.addEventListener('click', (e) => {
//     e.stopPropagation();
//     target.classList.toggle(togglingClass);
//   });
// }
// function showButton(buttonClass: string) {
//   const button = document.querySelector(buttonClass) as HTMLButtonElement;
//   button.hidden = false;
// }
// addToggleListener('.close-icon', '.offcanvas', 'show');
// addToggleListener('.close-icon', '.close-icon', 'open');
// closeOnCoverClickListener('.body', '.offcanvas', 'show');
// function closeOnCoverClickListener(coverClass: string, targetClass: string, togglingClass: string) {
//   const cover = document.querySelector(coverClass) as HTMLElement;
//   const target = document.querySelector(targetClass) as HTMLElement;
//   cover.addEventListener('click', (e) => {
//     if (e.target instanceof HTMLElement) {
//       //
//       if (target.classList.contains('show')) {
//         if (!e.target.closest(targetClass)) {
//           target.classList.remove(togglingClass);
//           document.querySelector('.close-icon')?.classList.remove('open');
//           showButton('.close-icon');
//           //
//         }
//       }
//     }
//   });
// }
// //Flipping
// const categoryCards = document.querySelectorAll('.category__card-content');
// let isFlipped = false;
// categoryCards.forEach((card) => {
//   card.addEventListener('click', flip);
//   card.addEventListener('click', playAudio);
//   card.addEventListener('mouseleave', flipBack);
// });
// function flip(e: Event) {
//   if (
//     e.target instanceof HTMLElement &&
//     e.currentTarget instanceof HTMLElement &&
//     e.target.classList.contains('bi-arrow-repeat')
//   ) {
//     console.log(e.currentTarget);
//     e.currentTarget.classList.add('flipped');
//     e.currentTarget.addEventListener('transitionend', () => {
//       isFlipped = true;
//     });
//   }
// }
// function flipBack(e: Event) {
//   if (e.currentTarget instanceof HTMLElement && e.currentTarget.classList.contains('flipped') && isFlipped) {
//     e.currentTarget.classList.remove('flipped');
//     isFlipped = false;
//   }
// }
// function playAudio(e: Event) {
//   if (
//     e.target instanceof HTMLElement &&
//     e.currentTarget instanceof HTMLElement &&
//     !e.target.classList.contains('bi-arrow-repeat')
//   ) {
//     const key = e.currentTarget.dataset.key as string;
//     const audio = e.currentTarget.querySelector(`audio`) as HTMLAudioElement;
//     audio.currentTime = 0;
//     audio.play();
//   }
// }

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
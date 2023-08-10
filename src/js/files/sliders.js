/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs, Scrollbar, FreeMode, Mousewheel } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера

	if (document.querySelector('.swiper')) {
		const thumbsSwiper = new Swiper('.thumbs-images', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs],

			// centeredSlides: true,
			// centeredSlidesBounds: true,
			// direction: "horizontal",
			slidesPerView: 4,
			spaceBetween: 16,
			freeMode: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			watchOverflow: true,

			//effect: 'fade',
			observer: true,
			watchOverflow: true,
			observeParents: true,
			// parallax: true,
			//autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.products-new__dotts',
			// 	clickable: true,
			// 	dynamicBullets: true
			// },

			breakpoints: {
				// 768: {
				// 	direction: "vertical",
				// 	slidesPerView: 3
				// },
			},
			on: {
				init: function (swiper) {

				}
			}
		});
		new Swiper('.product__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs],
			//effect: 'fade',
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			observer: true,
			watchOverflow: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
			// direction: "horizontal",
			thumbs: {
				swiper: thumbsSwiper
			},
			//autoHeight: true,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			on: {
				init: function (swiper) {

				}
			}
		});

		// Створюємо слайдер
		const mySwiper = new Swiper('.category-popup__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			/*
			  2023-08-02 - додано модуль Mousewheel
			*/
			modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
			direction: "vertical",
			freeMode: true,
			slidesPerView: "auto",
			// observer: true,
			// observeParents: true,
			// slidesPerView: 1,
			// spaceBetween: 0,
			// autoHeight: true,
			// speed: 800,

			// touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,

			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
				// hide: true,
				// dragSize: 56,
			},
			mousewheel: true,
			// mousewheel: {
			// 	sensitivity: 1,
			// 	eventsTarget: ".category-popup__slider",
			// },
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {

			}
		});

		mySwiper.on('slideChange', () => {
			const activeSlide = mySwiper.slides[mySwiper.activeIndex];
			const titleElement = activeSlide.querySelector('.category-popup__title');
			const spanElement = activeSlide.querySelector('.category-popup__span');
			const popupTitleElement = document.querySelector('.popup__row-title');
			const popupSpanElement = document.querySelector('.popup__row-span');
			popupTitleElement.innerText = titleElement.innerText;
			popupSpanElement.innerText = spanElement.innerText;
		});

	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});
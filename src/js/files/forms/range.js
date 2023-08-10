// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

// export function rangeInit() {
// 	const priceSlider = document.querySelector('#range');
// 	if (priceSlider) {
// 		let textFrom = priceSlider.getAttribute('data-from');
// 		let textTo = priceSlider.getAttribute('data-to');
// 		noUiSlider.create(priceSlider, {
// 			start: 0, // [0,200000]
// 			connect: [true, false],
// 			range: {
// 				'min': [0],
// 				'max': [200000]
// 			}
// 		});

// 		const priceStart = document.getElementById('price-start');
// 		const priceEnd = document.getElementById('price-end');
// 		priceStart.addEventListener('change', setPriceValues);
// 		priceEnd.addEventListener('change', setPriceValues);

// 		function setPriceValues() {
// 			let priceStartValue;
// 			let priceEndValue;
// 			if (priceStart.value != '') {
// 				priceStartValue = priceStart.value;
// 			}
// 			if (priceEnd.value != '') {
// 				priceEndValue = priceEnd.value;
// 			}
// 			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
// 		}
// 	}
// }
// rangeInit();




export function rangeInit() {

	const slider = document.getElementById('sliderPrice');
	if(slider) {
		const rangeMin = parseInt(slider.dataset.min);
		const rangeMax = parseInt(slider.dataset.max);
		const step = parseInt(slider.dataset.step);
		const filterInputs = document.querySelectorAll('input.range__input');

		noUiSlider.create(slider, {
				start: [rangeMin, rangeMax],
				connect: true,
				step: step,
				// tooltips: [true, wNumb({decimals: 1})],
				tooltips: [true, true],
				range: {
						'min': rangeMin,
						'max': rangeMax
				},

				// make numbers whole
				// format: {
				// 	to: value => value,
				// 	from: value => value
				// }
				format: {
					from: function(value) {
									return parseInt(value);
							},
					to: function(value) {
									return parseInt(value);
							}
					}
		});

		// bind inputs with noUiSlider
		slider.noUiSlider.on('update', (values, handle) => {
			filterInputs[handle].value = values[handle];
		});

		filterInputs.forEach((input, indexInput) => {
			input.addEventListener('change', () => {
				slider.noUiSlider.setHandle(indexInput, input.value);
			})
		});




	// 	const rangeItems = document.querySelectorAll('[data-range]');
	// 	if (rangeItems.length) {
	// 		rangeItems.forEach(rangeItem => {
	// 			const fromValue = rangeItem.querySelector('[data-range-from]');
	// 			const toValue = rangeItem.querySelector('[data-range-to]');
	// 			// console.log(fromValue.dataset.rangeFrom);
	// 			// console.log(Number(toValue.value));
	// 			const item = rangeItem.querySelector('[data-range-item]');
	// 			var inputs = [fromValue, toValue];
	// 			noUiSlider.create(item, {
	// 				start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
	// 				connect: true,
	// 				tooltips: [true, true],
	// 				// tooltips: [true, wNumb({decimals: 1})],
	// 						range: {
	// 							'min': [Number(fromValue.dataset.rangeFrom),50],
	// 							// '10%': [10, 10],
	// 							// '50%': [80, 50],
	// 							// '80%': 150,
	// 							'max': [Number(toValue.dataset.rangeTo),1000]
	// 						}
	// 			});


	// 			item.noUiSlider.on('update', function (values, handle) {
	// 				inputs[handle].value = values[handle];
	// 				// fromValue.value = values[handle];
	// 				// toValue.value = values[handle];
	// 			});



	// // Listen to keydown events on the input field.
	// inputs.forEach(function (input, handle) {

	// 	input.addEventListener('change', function () {
	// 			stepsSlider.noUiSlider.setHandle(handle, this.value);
	// 	});

	// 	input.addEventListener('keydown', function (e) {

	// 			var values = stepsSlider.noUiSlider.get();
	// 			var value = Number(values[handle]);

	// 			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
	// 			var steps = stepsSlider.noUiSlider.steps();

	// 			// [down, up]
	// 			var step = steps[handle];

	// 			var position;

	// 			// 13 is enter,
	// 			// 38 is key up,
	// 			// 40 is key down.
	// 			switch (e.which) {

	// 					case 13:
	// 							stepsSlider.noUiSlider.setHandle(handle, this.value);
	// 							break;

	// 					case 38:

	// 							// Get step to go increase slider value (up)
	// 							position = step[1];

	// 							// false = no step is set
	// 							if (position === false) {
	// 									position = 1;
	// 							}

	// 							// null = edge of slider
	// 							if (position !== null) {
	// 									stepsSlider.noUiSlider.setHandle(handle, value + position);
	// 							}

	// 							break;

	// 					case 40:

	// 							position = step[0];

	// 							if (position === false) {
	// 									position = 1;
	// 							}

	// 							if (position !== null) {
	// 									stepsSlider.noUiSlider.setHandle(handle, value - position);
	// 							}

	// 							break;
	// 			}
	// 	});
	// });
	// 		});
	// 	}
	}
}
rangeInit();



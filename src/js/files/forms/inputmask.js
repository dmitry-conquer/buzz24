/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}


document.addEventListener('DOMContentLoaded', function() {
  // Получение всех элементов input с классом phone-mask
  var phoneInputs = document.querySelectorAll('.phone-mask');

  // Определение маски для номеров телефонов
  var maskOptions = {
    mask: "+99 999 999 9999",
    placeholder: "+__ ___ ___ ____",
    oncomplete: function() {
      // Получить введенное значение
      var inputValue = this.value;

      // Проверить номера телефонов
      var isValid = false;
      if (inputValue.match(/^\+40/)) {
        isValid = inputValue.match(/^\+40 [0-9]{3} [0-9]{3} [0-9]{3}$/);
      } else if (inputValue.match(/^\+90/)) {
        isValid = inputValue.match(/^\+90 [0-9]{3} [0-9]{3} [0-9]{4}$/);
      } else if (inputValue.match(/^\+37 3/)) {
        isValid = inputValue.match(/^\+37 3[0-9]{2} [0-9]{3} [0-9]{4}$/);
      } else if (inputValue.match(/^\+38 0/)) {
        isValid = inputValue.match(/^\+38 0[0-9]{2} [0-9]{3} [0-9]{4}$/);
      }
// // Найти все элементы формы с классом "phone-mask"
// var phoneInputs = document.querySelectorAll('.phone-mask');
// // Пройти по каждому найденному элементу формы
// phoneInputs.forEach(function(input) {
//   // Добавить обработчик события на ввод данных в элемент формы
//   input.addEventListener('input', function(event) {
//     // Очистить строку от всего, кроме цифр
//     var cleaned = event.target.value.replace(/\D/g, '');
//     // Заменить содержимое элемента формы на очищенную строку
//     event.target.value = cleaned;
//   });
// });

      // Показать сообщение об ошибке, если номер неверный
      if (!isValid) {
        // alert("Номер телефона неверный");
				this.classList.add('_form-error');
				this.parentElement.classList.add('_form-error');
				let inputError = this.parentElement.querySelector('.form__error');
				if (inputError) this.parentElement.removeChild(inputError);
				if (this.dataset.error) {
					this.parentElement.insertAdjacentHTML('beforebegin', `<div class="form__error">${this.dataset.error}</div>`);
				}
        this.value = '';
      }
    }
  };

  // Обработка каждого элемента с классом phone-mask
  phoneInputs.forEach(function(phoneInput) {
    var inputMask = new Inputmask(maskOptions);
    inputMask.mask(phoneInput);
  });
});




// // Получаем все элементы с id "phone"
// const phoneInputs = document.querySelectorAll('.phone-mask');

// // Создаем маски для номеров телефонов
// const romaniaMask = '+40 999 999 999';
// const turkeyMask = '+90 (999) 999-9999';
// const moldovaMask = '+373 9999 99 999';
// const ukraineMask = '+380 (99) 999-99-99';

// // Создаем объект с соответствиями масок для стран
// const masks = {
//   '+40': romaniaMask,
//   '+90': turkeyMask,
//   '+373': moldovaMask,
//   '+380': ukraineMask,
// };


// Inputmask({
// 	mask: "[9999]",
// 	showMaskOnFocus: false
// }).mask(document.querySelectorAll('.sms-mask'));
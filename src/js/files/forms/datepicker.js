/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';


// if (document.querySelector('[data-datepicker]')) {
// 	const picker = datepicker('[data-datepicker]', {
// 		customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
// 		customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
// 		overlayButton: 'Применить',
// 		overlayPlaceholder: 'Год (4 цифры)',
// 		startDay: 1,
// 		formatter: (input, date, instance) => {
// 			const value = date.toLocaleDateString()
// 			input.value = value
// 		},
// 		onSelect: function (input, instance, date) {

// 		}
// 	});
// 	flsModules.datepicker = picker;
// }
const picker = {
	formatter: (input, date, instance) => {
		// This will display the date as `1/1/2019`.
		input.value = date.toDateString();
	},
	startDay: 1, // Calendar week starts on a Monday.
	customDays: ["S", "M", "T", "W", "Th", "F", "S"],
	customMonths: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
	minDate: new Date(2016, 5, 1), // June 1st, 2016.
	dateSelected: new Date(), // Today is selected.
	id: 1
};

const start = datepicker(".start", picker);
const end = datepicker(".end", picker);
start.getRange();
end.getRange();
console.log(start);


// const  start  =  datepicker ( '.start' ,  {  id : 1  } )
// const  end  =  datepicker ( '.end' ,  {  id : 1  } )
// 	start.getRange() // { start: <JS date object>, end: <JS date object> }
// end.getRange() // Gives you the same as above!


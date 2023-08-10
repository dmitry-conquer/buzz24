
// $(function() {

//     $('input[name="datefilter"]').daterangepicker({
//         alwaysShowCalendars: true,
//         // alwaysShowCalendars: true,
//         parentEl: ('.popup__content'),
//         autoUpdateInput: false,
//         locale: {
//             cancelLabel: 'Clear'
//         }
//     });

//     $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
//         $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
//     });

//     $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
//         $(this).val('');
//     });

//   });


  var picker = $('#daterangepicker1').daterangepicker({
    "language": "ru",
    "parentEl": "#daterangepicker1-container",
    "autoApply": true,
    "locale": {
        "format": "MM/DD/YYYY",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "сб"
        ],
        "monthNames": [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    }
  });
  // range update listener
  picker.on('apply.daterangepicker', function(ev, picker) {
    $("#daterangepicker-result").html('Selected date range: ' + picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
  });
  // prevent hide after range selection
  picker.data('daterangepicker').hide = function () {};
  // show picker on load
  picker.data('daterangepicker').show();





// $(document).ready(function() {
//   var current = 0,
//     $form = $(".popup__form"),
//     $steps = $form.find(".popup__body-step"),
//     numSteps = $steps.length;

//   // function setProgressBar(pos) {
//   //   console.log("Step: " + pos);
//   // }

//   function checkButtons() {
//     if (current <= 0) {
//       $(".popup__button-prev").hide();
//     } else {
//       $(".popup__button-prev").show();
//     }

//     if (current >= numSteps - 1) {
//       $(".popup__button-next").hide();
//       $(".submit").show();
//     } else {
//       $(".popup__button-next").show();
//       $(".submit").hide();
//     }
//   }

//   $(".popup__button-next").click(function() {
//     $($steps[current]).hide();
//     $($steps[++current]).show();
//     // setProgressBar(current);

//     checkButtons();
//   });

//   $(".popup__button-prev").click(function() {
//     $($steps[current]).hide();
//     $($steps[--current]).show();
//     // setProgressBar(current);

//     checkButtons();
//   });

//   checkButtons();
//   // setProgressBar(current);
// });



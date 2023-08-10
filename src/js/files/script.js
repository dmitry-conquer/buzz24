// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";







import { MarkerClusterer } from "@googlemaps/markerclusterer";


import { Loader } from "@googlemaps/js-api-loader";
let map;
// const center = { lat: 41.90476224706472, lng: 12.49822074385094 };
// const zoom = 14;
// const url = "https://maps.googleapis.com/maps/api/staticmap";
// @ts-ignore google.maps.plugins
const loader = new Loader({
   apiKey: "AIzaSyAiVOcHP59ZbDgwdKWr4C6j2-7QRbl7tQg",
   version: "weekly",
});

window.mobileCheck = function () {
   let check = false;
   (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
   return check;
};

const setDataDropdown = (element) => {
   element.removeAttribute('data-dropdown-hover');
   element.setAttribute('data-dropdown', '');
};

if (window.mobileCheck()) {
   const location = document.querySelector('.location-header__items');
   const headerLang = document.querySelector('.header__lang');
   const loginHeader = document.querySelector('.login-header__item');
   setDataDropdown(location)
   setDataDropdown(headerLang)
   setDataDropdown(loginHeader)
};

const wrapper = document.getElementById("map__button");
if (wrapper) {
   document.addEventListener("DOMContentLoaded", () => {
      wrapper.addEventListener("click", () => {
         wrapper.remove();
         loader.load().then(() => {
            var bounds = new google.maps.LatLngBounds();
            const map = new google.maps.Map(document.getElementById("map"), {
               center: { lat: 50.4411073, lng: 30.5444523 },
               zoom: 12,
               styles: [
                  {
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#f5f5f5"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.icon",
                     "stylers": [
                        {
                           "visibility": "off"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#616161"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.text.stroke",
                     "stylers": [
                        {
                           "color": "#f5f5f5"
                        }
                     ]
                  },
                  {
                     "featureType": "administrative.land_parcel",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#bdbdbd"
                        }
                     ]
                  },
                  {
                     "featureType": "poi",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#eeeeee"
                        }
                     ]
                  },
                  {
                     "featureType": "poi",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#757575"
                        }
                     ]
                  },
                  {
                     "featureType": "poi.park",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#e5e5e5"
                        }
                     ]
                  },
                  {
                     "featureType": "poi.park",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  },
                  {
                     "featureType": "road",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#ffffff"
                        }
                     ]
                  },
                  {
                     "featureType": "road.arterial",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#757575"
                        }
                     ]
                  },
                  {
                     "featureType": "road.highway",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#dadada"
                        }
                     ]
                  },
                  {
                     "featureType": "road.highway",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#616161"
                        }
                     ]
                  },
                  {
                     "featureType": "road.local",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  },
                  {
                     "featureType": "transit.line",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#e5e5e5"
                        }
                     ]
                  },
                  {
                     "featureType": "transit.station",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#eeeeee"
                        }
                     ]
                  },
                  {
                     "featureType": "water",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#c9c9c9"
                        }
                     ]
                  },
                  {
                     "featureType": "water",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  }
               ],
            });
            var markersLoc = [
               ['Mumbai', 48.2437167, 19.3394151],
               ['Pune', 48.2463182, 17.659755],
               ['Bhopal ', 47.0842848, 3.1437127],
               ['Agra', 50.4268, 30.5632],
               ['Delhi', 50.9684777, 58.38623459999999],
            ];
            var infoTitle = document.querySelectorAll('.info-content__title');
            for (var i = 0; i < infoTitle.length; i++) {
            };
            var infoTitleText = document.querySelectorAll('.info-content__title-text');
            for (var i = 0; i < infoTitleText.length; i++) {
            };
            var infoImg = document.querySelectorAll('.info-content__img');
            for (var i = 0; i < infoImg.length; i++) {
            };
            var infoName = document.querySelectorAll('.info-content__name-type');
            for (var i = 0; i < infoName.length; i++) {
            };
            var infoType = document.querySelectorAll('.info-content__descr-type');
            for (var i = 0; i < infoType.length; i++) {
            };
            var infoBrand = document.querySelectorAll('.info-content__name-brand');
            for (var i = 0; i < infoBrand.length; i++) {
            };
            var infoDescrBrand = document.querySelectorAll('.info-content__descr-brand');
            for (var i = 0; i < infoDescrBrand.length; i++) {
            };
            var infoText1 = document.querySelectorAll('.info-content__text-1');
            for (var i = 0; i < infoText1.length; i++) {
            };
            var infoText2 = document.querySelectorAll('.info-content__text-2');
            for (var i = 0; i < infoText2.length; i++) {
            };
            var infoText3 = document.querySelectorAll('.info-content__text-3');
            for (var i = 0; i < infoText3.length; i++) {
            };
            var infoText4 = document.querySelectorAll('.info-content__text-4');
            for (var i = 0; i < infoText4.length; i++) {
            };
            var infoHour = document.querySelectorAll('.info-content__button-hour');
            for (var i = 0; i < infoHour.length; i++) {
            };
            var infoDay = document.querySelectorAll('.info-content__button-day');
            for (var i = 0; i < infoDay.length; i++) {
            };
            var infoOrder = document.querySelectorAll('.info-content__button-order');
            for (var i = 0; i < infoOrder.length; i++) {
            };
            var infoBtnOrder = document.querySelectorAll('.info-content__button-order');
            for (var i = 0; i < infoBtnOrder.length; i++) {
            };
            // Info Window Content
            var infoWindowContent = [
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[0].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[0].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[0].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[0].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[0].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[0].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[0].innerHTML + '</button>'
                  + '<a href="' + infoOrder[0].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[0].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[1].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[1].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[1].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[1].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[1].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[1].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[1].innerHTML + '</button>'
                  + '<a href="' + infoOrder[1].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[1].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[2].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[2].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[2].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[2].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[2].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-2">' + infoText1[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[2].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[2].innerHTML + '</button>'
                  + '<a href="' + infoOrder[2].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[2].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[3].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[3].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[3].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[3].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[3].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[3].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[3].innerHTML + '</button>'
                  + '<a href="' + infoOrder[3].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[3].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[4].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[4].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[4].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[4].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[4].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[4].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[4].innerHTML + '</button>'
                  + '<a href="' + infoOrder[4].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[4].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
            ];
            // Display multiple markers on a map
            var infoWindow = new google.maps.InfoWindow({
               content: "",
               disableAutoPan: true,
            }), marker, i;
            // Loop through our array of markers & place each one on the map
            const image = {
               url: "img/main/marker.png",
               size: new google.maps.Size(51, 51),
               origin: new google.maps.Point(0, 0),
               anchor: new google.maps.Point(24, 55),
               scaledSize: new google.maps.Size(51, 51),
            };
            for (i = 0; i < markersLoc.length; i++) {
               var position = new google.maps.LatLng(markersLoc[i][1], markersLoc[i][2]);
               bounds.extend(position);
               const marker = new google.maps.Marker({
                  position: position,
                  map: map,
                  icon: image,
                  title: markersLoc[i][0]
               });
               // markersArray.push(marker);
               // Each marker to have an info window
               google.maps.event.addListener(marker, 'click', (function (marker, i) {
                  return function () {
                     infoWindow.setContent(infoWindowContent[i][0]);
                     infoWindow.open(map, marker);
                  }
               })(marker, i));
               // Automatically center the map fitting all markers on the screen
               map.fitBounds(bounds);
            }
         });
      });
   });
}

const mapWapper = document.querySelector("map__info-wrapper");
if (mapWapper) {
   var mapWapperClick = function mapWapperClick() {
      wrapper.addEventListener('click', function () {
         mapWapper.style.display = 'block';
         mapWapper.classList.add("active");
      })
   }

   document.addEventListener('DOMContentLoaded', mapWapperClick);
}



const wrapperMap = document.getElementById("map__button-map");
if (wrapperMap) {
   document.addEventListener("DOMContentLoaded", () => {

      wrapperMap.addEventListener("click", () => {
         wrapperMap.remove();
         loader.load().then(() => {
            // Styles a map in night mode.
            var bounds = new google.maps.LatLngBounds();
            const map = new google.maps.Map(document.getElementById("map-map"), {
               center: { lat: 50.4411073, lng: 30.5444523 },
               zoom: 12,
               styles: [
                  {
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#f5f5f5"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.icon",
                     "stylers": [
                        {
                           "visibility": "off"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#616161"
                        }
                     ]
                  },
                  {
                     "elementType": "labels.text.stroke",
                     "stylers": [
                        {
                           "color": "#f5f5f5"
                        }
                     ]
                  },
                  {
                     "featureType": "administrative.land_parcel",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#bdbdbd"
                        }
                     ]
                  },
                  {
                     "featureType": "poi",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#eeeeee"
                        }
                     ]
                  },
                  {
                     "featureType": "poi",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#757575"
                        }
                     ]
                  },
                  {
                     "featureType": "poi.park",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#e5e5e5"
                        }
                     ]
                  },
                  {
                     "featureType": "poi.park",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  },
                  {
                     "featureType": "road",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#ffffff"
                        }
                     ]
                  },
                  {
                     "featureType": "road.arterial",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#757575"
                        }
                     ]
                  },
                  {
                     "featureType": "road.highway",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#dadada"
                        }
                     ]
                  },
                  {
                     "featureType": "road.highway",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#616161"
                        }
                     ]
                  },
                  {
                     "featureType": "road.local",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  },
                  {
                     "featureType": "transit.line",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#e5e5e5"
                        }
                     ]
                  },
                  {
                     "featureType": "transit.station",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#eeeeee"
                        }
                     ]
                  },
                  {
                     "featureType": "water",
                     "elementType": "geometry",
                     "stylers": [
                        {
                           "color": "#c9c9c9"
                        }
                     ]
                  },
                  {
                     "featureType": "water",
                     "elementType": "labels.text.fill",
                     "stylers": [
                        {
                           "color": "#9e9e9e"
                        }
                     ]
                  }
               ],
            });
            var markersLoc = [
               ['Mumbai', 48.2437167, 19.3394151],
               ['Pune', 48.2463182, 17.659755],
               ['Bhopal ', 47.0842848, 3.1437127],
               ['Agra', 50.4268, 30.5632],
               ['Delhi', 50.9684777, 58.38623459999999],
            ];
            var infoTitle = document.querySelectorAll('.info-content__title');
            for (var i = 0; i < infoTitle.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoTitleText = document.querySelectorAll('.info-content__title-text');
            for (var i = 0; i < infoTitleText.length; i++) {
               //  console.log(infoTitleText[i].innerHTML);
            };
            var infoImg = document.querySelectorAll('.info-content__img');
            for (var i = 0; i < infoImg.length; i++) {
               // console.log(infoImg[i].innerHTML);
            };
            var infoName = document.querySelectorAll('.info-content__name-type');
            for (var i = 0; i < infoName.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoType = document.querySelectorAll('.info-content__descr-type');
            for (var i = 0; i < infoType.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoBrand = document.querySelectorAll('.info-content__name-brand');
            for (var i = 0; i < infoBrand.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoDescrBrand = document.querySelectorAll('.info-content__descr-brand');
            for (var i = 0; i < infoDescrBrand.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoText1 = document.querySelectorAll('.info-content__text-1');
            for (var i = 0; i < infoText1.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoText2 = document.querySelectorAll('.info-content__text-2');
            for (var i = 0; i < infoText2.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoText3 = document.querySelectorAll('.info-content__text-3');
            for (var i = 0; i < infoText3.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoText4 = document.querySelectorAll('.info-content__text-4');
            for (var i = 0; i < infoText4.length; i++) {
               // console.log(infoTitle[i].innerHTML);
            };
            var infoHour = document.querySelectorAll('.info-content__button-hour');
            for (var i = 0; i < infoHour.length; i++) {
               // console.log(infoHour[i].innerHTML);
            };
            var infoDay = document.querySelectorAll('.info-content__button-day');
            for (var i = 0; i < infoDay.length; i++) {
               // console.log(infoDay[i].innerHTML);
            };
            var infoOrder = document.querySelectorAll('.info-content__button-order');
            for (var i = 0; i < infoOrder.length; i++) {
               // console.log(infoOrder[i].innerHTML);
            };
            var infoBtnOrder = document.querySelectorAll('.info-content__button-order');
            for (var i = 0; i < infoBtnOrder.length; i++) {
               // console.log(infoDay[i].innerHTML);
            };
            // Info Window Content
            var infoWindowContent = [
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[0].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[0].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[0].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[0].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[0].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[0].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[0].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[0].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[0].innerHTML + '</button>'
                  + '<a href="' + infoOrder[0].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[0].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[1].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[1].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[1].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[1].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[1].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[1].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[1].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[1].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[1].innerHTML + '</button>'
                  + '<a href="' + infoOrder[1].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[1].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[2].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[2].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[2].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[2].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[2].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-2">' + infoText1[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[2].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[2].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[2].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[2].innerHTML + '</button>'
                  + '<a href="' + infoOrder[2].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[2].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[3].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[3].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[3].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[3].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[3].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[3].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[3].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[3].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[3].innerHTML + '</button>'
                  + '<a href="' + infoOrder[3].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[3].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
               ['<div class="info-content">' +
                  '<div class="info-content__wrapp">' +
                  '<div class="info-content__body-title">' +
                  '<div class="info-content__body-title">' + infoTitle[4].innerHTML + '</div>' +
                  '<div class="info-content__title-text">' + infoTitleText[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__wrapper">' +
                  '<div class="info-content__image">' +
                  '<img class="info-content__img" src="' + infoImg[4].src + '" alt="">'
                  + '</div>'
                  + '<div class="info-content__main">'
                  + '<div class="info-content__header">'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-type">' + infoName[4].innerHTML + '</div>'
                  + '<div class="info-content__descr-type">' + infoType[4].innerHTML + '</div>'
                  + '</div>'
                  + '<div class="info-content__row">'
                  + '<div class="info-content__name-brand">' + infoBrand[4].innerHTML + '</div>'
                  + '<div class="info-content__descr-brand">' + infoDescrBrand[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__footer">'
                  + '<div class="info-content__text info-content__text-1">' + infoText1[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-2">' + infoText2[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-3">' + infoText3[4].innerHTML + '</div>'
                  + '<div class="info-content__text info-content__text-4">' + infoText4[4].innerHTML + '</div>'
                  + '</div>'
                  + '</div>'
                  + '</div>'
                  + '<div class="info-content__price">'
                  + '<button type="submit" class="info-content__button-price info-content__button-hour btn">' + infoHour[4].innerHTML + '</button>'
                  + '<button type="submit" class="info-content__button-price info-content__button-day btn">' + infoDay[4].innerHTML + '</button>'
                  + '<a href="' + infoOrder[4].href + '" target="_blank" class="info-content__button-price info-content__button-order btn btn-c">' + infoBtnOrder[4].innerHTML + '</a>'
                  + '</div>'
                  + '</div>'],
            ];
            // Display multiple markers on a map
            var infoWindow = new google.maps.InfoWindow({
               content: "",
               disableAutoPan: true,
            }), marker, i;
            // Loop through our array of markers & place each one on the map
            const image = {
               url: "img/main/marker.png",
               size: new google.maps.Size(51, 51),
               origin: new google.maps.Point(0, 0),
               anchor: new google.maps.Point(24, 55),
               scaledSize: new google.maps.Size(51, 51),
            };
            for (i = 0; i < markersLoc.length; i++) {
               var position = new google.maps.LatLng(markersLoc[i][1], markersLoc[i][2]);
               bounds.extend(position);
               marker = new google.maps.Marker({
                  position: position,
                  map: map,
                  icon: image,
                  title: markersLoc[i][0]
               });
               // Each marker to have an info window
               google.maps.event.addListener(marker, 'click', (function (marker, i) {
                  return function () {
                     infoWindow.setContent(infoWindowContent[i][0]);
                     infoWindow.open(map, marker);
                  }
               })(marker, i));
               // Automatically center the map fitting all markers on the screen
               map.fitBounds(bounds);
            }


         });
      });
   });
}



// ====================================================================================================

// прокрутка вверх
var sttElem = document.querySelector('.arrow-up');
if (sttElem) {
   var screanHeight = window.innerHeight;

   var sttScroll = function sttScroll() {
      document.addEventListener('scroll', function (e) {
         if (screanHeight <= window.scrollY) {
            sttElem.classList.add('arrow-up__active');
         } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
            sttElem.classList.remove('arrow-up__active');
            sttElem.style.pointerEvents = 'auto';
         }
      });
   };

   var sttClick = function sttClick() {
      sttElem.addEventListener('click', function () {
         var docHeight = window.scrollY;
         var progress = 0;
         var position = docHeight;
         var speed = 5;
         sttElem.style.pointerEvents = 'none';

         var sttAnim = function sttAnim() {
            progress += 1;
            position -= progress * speed;
            window.scrollTo(0, position);

            if (position > 0) {
               requestAnimationFrame(sttAnim);
            }
         };

         requestAnimationFrame(sttAnim);
      });
   };

   var sttFunc = function sttFunc() {
      sttScroll();
      sttClick();
   };

   document.addEventListener('DOMContentLoaded', sttFunc);

}

// ====================================================================================================

// const locationBody = document.querySelector(".location-header__body");
// if (locationBody) {
//    const locationButtonAgree = document.querySelector(".location-header__button");
//    locationButtonAgree.addEventListener("click", () => {
//       locationBody.classList.add("hide");
//    });
// };

// if (window.matchMedia("(min-width: 768px)").matches) {
//    const loginTitle = document.getElementById('header__title-login');
//    if (loginTitle) {
//       document.documentElement.classList.add("login-hide");
//       setTimeout(function () {
//          document.documentElement.classList.remove("login-hide");
//       }, 10000);
//    };


//    const headerTitleLogin = document.querySelector('.login-header__title');
//    const loginHeaderBody = document.querySelector('.login-header__body');

//    headerTitleLogin.addEventListener('mouseenter', function () {
//       loginHeaderBody.classList.add('visible');
//       headerTitleLogin.classList.add('active');
//       setTimeout(function () {
//          document.documentElement.classList.remove("login-hide");
//       }, 10);
//    });

//    document.addEventListener('keydown', function (e) {
//       if (e.key === 'Tab' || e.key === 'Escape') {
//          headerTitleLogin.classList.remove('active');
//          loginHeaderBody.classList.remove('visible');
//       }
//    });


//    const loginHeaderItem = document.querySelector('.login-header__item');
//    loginHeaderItem.addEventListener('mouseout', event => {
//       if (!loginHeaderItem.contains(event.relatedTarget)) {
//          if (loginHeaderBody.classList.contains('visible')) {
//             headerTitleLogin.classList.remove('active');
//             loginHeaderBody.classList.remove('visible');
//             document.documentElement.classList.remove("_bg-body");
//          }
//       }
//    });
// }

// ====================================================================================================

document.querySelectorAll('[data-dropdown]').forEach(function (dropDownWrapper) {
   const dropDownBtn = dropDownWrapper.querySelector('[data-dropdown-button]');
   const dropDownList = dropDownWrapper.querySelector('[data-dropdown-list]');
   const dropDownListItems = dropDownList?.querySelectorAll('[data-dropdown-item]');
   const dropDownInput = dropDownWrapper.querySelector('[data-dropdown-input]');

   dropDownBtn.addEventListener('click', function (e) {
      dropDownList?.classList.toggle('visible');
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
   });

   if (dropDownListItems) {
      dropDownListItems.forEach(function (listItem) {
         listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.setAttribute('data-value', this.dataset.value);
            dropDownBtn.focus();
            dropDownInput.setAttribute('value', this.dataset.value);
            dropDownList.classList.remove('visible');
            dropDownBtn.classList.remove('active');
            dropDownBtn.parentElement.classList.remove('active');

         });
      });
   }


   document.addEventListener('click', function (e) {
      // if (e.target !== dropDownBtn) {
      if (!dropDownBtn.contains(e.target)) {
         dropDownBtn.classList.remove('active');
         dropDownList?.classList.remove('visible');
         dropDownBtn.parentElement.classList.remove('active');
      }
   });
   document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
         dropDownBtn.classList.remove('active');
         dropDownList?.classList.remove('visible');
         dropDownBtn.parentElement.classList.remove('active');
      }
   });
});


document.querySelectorAll('[data-dropdown-hover]').forEach(function (dropDownWrapper) {
   const dropDownBtn = dropDownWrapper.querySelector('[data-dropdown-button]');
   const dropDownList = dropDownWrapper.querySelector('[data-dropdown-list]');
   const dropDownListItems = dropDownList.querySelectorAll('[data-dropdown-item]');
   const dropDownInput = dropDownWrapper.querySelector('[data-dropdown-input]');

   dropDownBtn.addEventListener('click', function (e) {
      console.log(dropDownList.classList);

      dropDownList.classList.toggle('visible');
      this.classList.toggle('active');
      this.parentElement.classList.toggle('active');
   });

   dropDownBtn.addEventListener('mouseenter', function (e) {
      dropDownList.classList.add('visible');
      this.classList.add('active');
      this.parentElement.classList.add('active');
   });

   dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
         e.stopPropagation();
         dropDownBtn.innerText = this.innerText;
         dropDownBtn.setAttribute('data-value', this.dataset.value);
         dropDownBtn.focus();
         dropDownInput.setAttribute('value', this.dataset.value);
         dropDownList.classList.remove('visible');
         dropDownBtn.classList.remove('active');
         dropDownBtn.parentElement.classList.remove('active');
      });
   });
   document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
         dropDownBtn.classList.remove('active');
         dropDownList.classList.remove('visible');
         dropDownBtn.parentElement.classList.remove('active');
      }
   });
});


const locationHeaderTitle = document.querySelector('.location-header__title');
const locationHeaderBody = document.querySelector('.location-header__body');

if (!locationHeaderBody.classList.contains('hide')) {
   locationHeaderTitle.addEventListener('mouseover', function () {
      locationHeaderBody.classList.add('hide');
   });
}



const dropdownElements = document.querySelectorAll('[data-dropdown-hover]');

dropdownElements.forEach(dropdown => {
   dropdown.addEventListener('mouseout', event => {
      const dropDownList = dropdown.querySelector('[data-dropdown-list]');
      const dropDownBtn = dropdown.querySelector('[data-dropdown-button]');

      if (!dropdown.contains(event.relatedTarget)) {
         if (dropDownList.classList.contains('visible')) {
            dropDownList.classList.remove('visible');
            dropDownBtn.classList.remove('active');
            dropDownBtn.parentElement.classList.remove('active');
         }
      }
   });
});

// ====================================================================================================
var checkBox = document.getElementById("myCheck");
checkBox.onclick = function () {
   if (this.checked) {
      document.body.classList.add("dark-theme");
   } else {
      document.body.classList.remove("dark-theme");
   }
};

// ====================================================================================================


var gridRows = document.getElementById("grid-rows");
var gridColumns = document.getElementById("grid-columns");

if (gridRows) {
   gridRows.onclick = function () {
      if (!gridRows.classList.contains("active")) {
         gridRows.classList.add("active");
         document.body.classList.add("rows");
         gridColumns.classList.remove("active");
         document.body.classList.remove("columns");
      } else {
         return;
      }
   }
   gridColumns.onclick = function () {
      if (!gridColumns.classList.contains("active")) {
         gridColumns.classList.add("active");
         document.body.classList.add("columns");
         gridRows.classList.remove("active");
         document.body.classList.remove("rows");
      } else {
         return;
      }
   }
}

// ====================================================================================================


var cookieAlert = document.querySelector(".cookies");
if (cookieAlert) {
   const acceptCookies = document.querySelector('.cookies__accept');
   const closeCookies = document.querySelector('.cookies__button-close');
   const cookiesAccepted = getCookie('cookiesAccepted');
   const cookiesRefused = getCookie('cookiesRefused');
   // Add an event listener to handle the scroll event
   let scrollHandler = function () {
      const screenPosition = window.innerHeight * 2;

      if (window.pageYOffset > screenPosition) {
         cookieAlert.classList.add("show");
      }
   };


   if (!cookiesAccepted && !cookiesRefused) {
      window.addEventListener('scroll', scrollHandler);
   }
   acceptCookies.addEventListener('click', function () {
      setCookie('cookiesAccepted', 'true', 365);
      cookieAlert.classList.remove("show");
      console.log('cookiesAccepted');
      window.removeEventListener('scroll', scrollHandler);
   });

   closeCookies.addEventListener('click', function () {
      setCookie('cookiesRefused', 'true', 365);
      cookieAlert.classList.remove("show");
      console.log('cookiesRefused');
      window.removeEventListener('scroll', scrollHandler);
   });

   function setCookie(name, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
   }

   function getCookie(name) {
      const cookieArr = document.cookie.split(';');
      for (let i = 0; i < cookieArr.length; i++) {
         const cookiePair = cookieArr[i].split('=');
         if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
         }
      }
      return null;
   }
   if (cookiesAccepted || cookiesRefused) {
      cookieAlert.classList.remove("show");
   }
}


// ====================================================================================================


document.addEventListener("DOMContentLoaded", () => {

   const inputFile = document.querySelectorAll(".upload-file__input");

   inputFile.forEach(function (el) {
      let textSelector = document.querySelector(".upload-file__label-text");
      let fileList;

      el.addEventListener("change", function (e) {

         fileList = [];
         for (let i = 0; i < el.files.length; i++) {
            fileList.push(el.files[i]);
         }

         fileList.forEach(file => {
            uploadFile(file);
         });
      });

      const uploadFile = (file) => {

         if (file.size > 5 * 1024 * 1024) {
            alert("Файл должен быть не более 5 МБ.");
            return;
         }

         if (file && file.length > 1) {
            if (file.length <= 4) {
               textSelector.textContent = `Выбрано ${file.length} файла`;
            }
            if (file.length > 4) {
               textSelector.textContent = `Выбрано ${file.length} файлов`;
            }
         } else {
            textSelector.textContent = `Загружено`;
         }
      }

   });

});



// ====================================================================================================







const searchInput = document.querySelector('#search-input');
const suggestionsList = document.querySelector('#suggestions-list');
const clearInputBtn = document.querySelector('.search-header__button-clear');

function clearInput() {
   searchInput.value = '';
   clearInputBtn.classList.remove('visible');
}

function selectSuggestion(e) {
   const clickedListItem = e.target;
   const selectedSuggestion = clickedListItem.textContent;
   searchInput.value = selectedSuggestion;
   suggestionsList.innerHTML = '';
}

searchInput.addEventListener('input', () => {
   const inputValue = searchInput.value.trim().toLowerCase();

   suggestionsList.innerHTML = '';
   clearInputBtn.classList.add('visible');
   if (!inputValue) {
      return;
   }

   function createSuggestionItem(text) {
      const li = document.createElement('li');
      li.textContent = text;
      li.addEventListener('click', selectSuggestion);
      return li;
   }

   // Массив с подсказками
   const suggestions = ['Погрузчик на склад', 'Погрузить дрова в селе', 'Подйомник со стрелой', 'Автовышки', 'Сепараторы', 'Краны', 'Мусоровозы', 'Погрузчики', 'Самосвалы', 'Экскаваторы', 'Экскаваторы-погрузчики', 'Мини-экскаваторы', 'Бульдозеры', 'Фронтальные погрузчики', 'Мини-погрузчики', 'Автокраны', 'Телескопические погрузчики', 'Вилочные погрузчики', 'Погрузчики-манипуляторы', 'Гусеничные краны', 'Складская техника'];

   const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(inputValue)
   );

   filteredSuggestions.forEach(suggestion => {
      const li = createSuggestionItem(suggestion);
      suggestionsList.appendChild(li);
   });
});

clearInputBtn.addEventListener('click', clearInput);







// ====================================================================================================









const loginEmailInput = document.getElementById('login-email');
const loginTelInput = document.getElementById('login-tel');
const signEmailInput = document.getElementById('sign-email');
const signTelInput = document.getElementById('sign-tel');
const emailLogin = document.querySelector('.login-popup__email-login');
const telLogin = document.querySelector('.login-popup__tel-login');
const emailSign = document.querySelector('.login-popup__email-sign');
const telSign = document.querySelector('.login-popup__tel-sign');

if (loginEmailInput) {
   function loginInputs() {
      if (loginEmailInput.checked) {
         telLogin.style.display = 'none';
         emailLogin.style.display = 'block';
      } else if (loginTelInput.checked) {
         emailLogin.style.display = 'none';
         telLogin.style.display = 'block';
      }
   }
   function signInputs() {
      if (signEmailInput.checked) {
         telSign.style.display = 'none';
         emailSign.style.display = 'block';
      } else if (signTelInput.checked) {
         emailSign.style.display = 'none';
         telSign.style.display = 'block';
      }
   }

   loginEmailInput.addEventListener('change', loginInputs);
   loginTelInput.addEventListener('change', loginInputs);
   signEmailInput.addEventListener('change', signInputs);
   signTelInput.addEventListener('change', signInputs);
}



// ====================================================================================================




const htmlEl = document.querySelector('html');
const bgEls = document.querySelectorAll('._bg');
const observer = new MutationObserver((mutationsList, observer) => {
   mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.classList.contains('active') && mutation.target.classList.contains('_bg')) {
         htmlEl.classList.add('_bg-body');
      } else if (mutation.type === 'attributes' && mutation.attributeName === 'class' && !mutation.target.classList.contains('active') && mutation.target.classList.contains('_bg')) {
         const activeEls = document.querySelectorAll('.active._bg');
         if (activeEls.length === 0) {
            htmlEl.classList.remove('_bg-body');
         };
      };
   });
});


const mediaQuery = window.matchMedia('(min-width: 768px)');
const handleMediaQuery = (mediaQuery) => {
   if (mediaQuery.matches) {
      bgEls.forEach((el) => {
         observer.observe(el, { attributes: true });
      });
   } else {
      htmlEl.classList.remove('_bg-body');
   }
};

handleMediaQuery(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQuery);


// ====================================================================================================

const rootEl = document.querySelector('html');
const langButton = document.querySelector('.lang-header__button');

const observerRoot = new MutationObserver((mutationsList, observer) => {
   mutationsList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target.classList.contains('active') && mutation.target.classList.contains('lang-header__button')) {
         rootEl.classList.add('_bg-body');
      } else if (mutation.type === 'attributes' && mutation.attributeName === 'class' && !mutation.target.classList.contains('active') && mutation.target.classList.contains('lang-header__button')) {
         const activeEls = document.querySelectorAll('.active.lang-header__button');
         if (activeEls.length === 0) {
            rootEl.classList.remove('_bg-body');
         }
      }
   });
});

const minWidthMediaQuery = window.matchMedia('(max-width: 768px)');

const handleMinWidthMediaQuery = (mediaQuery) => {
   if (mediaQuery.matches) {
      observerRoot.observe(langButton, { attributes: true });
   } else {
      rootEl.classList.remove('_bg-body');
   }
};

handleMinWidthMediaQuery(minWidthMediaQuery);

minWidthMediaQuery.addEventListener('change', handleMinWidthMediaQuery);


// =======================================================================================================================================================================================================================

const searchHeader = document.querySelector('.search-header');

searchHeader.addEventListener('mouseout', event => {
   const searchList = document.querySelector('.search-header__suggestions-list');
   if (!searchHeader.contains(event.relatedTarget)) {
      searchList.innerHTML = '';
   }
});


// =======================================================================================================================================================================================================================



const form1 = document.querySelector('.popup__form-1');
const form2 = document.querySelector('.popup__form-2');
const form3 = document.querySelector('.popup__form-3');

const next1 = document.querySelector('.next-1');
const prev2 = document.querySelector('.prev-2');
const prev3 = document.querySelector('.prev-3');
const next2 = document.querySelector('.next-2');
const step2 = document.querySelector('.popup__step-2');
const step3 = document.querySelector('.popup__step-3');
const steps = document.querySelector('.popup__steps');

next1.onclick = function () {
   form1.classList.add('slide2');
   form2.classList.add('slide2');
   form1.classList.remove('slide3');
   form2.classList.remove('slide3');
   step2.classList.remove('color');
   step3.classList.add('color');
}
prev2.onclick = function () {
   form2.classList.remove('slide2');
   form1.classList.add('slide3');
   form2.classList.add('slide3');
   step2.classList.add('color');
   step3.classList.remove('color');
}
next2.onclick = function () {
   form2.classList.add('slide4');
   form3.classList.add('slide4');
   form2.classList.remove('slide2');
   form1.classList.remove('slide3');
   form2.classList.remove('slide3');
   steps.classList.add('hide');
}
prev3.onclick = function () {
   form3.classList.remove('slide4');
   form2.classList.add('slide2');
   form2.classList.remove('slide4');
   steps.classList.remove('hide');
}




// =======================================================================================================================================================================================================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
   document.body.classList.add("dark-theme");
   document.getElementById("myCheck").checked = true;
}

// =======================================================================================================================================================================================================================
var body = document.querySelector('body');
var sideButtonWrap = document.querySelector('.side-button__wrap');
var buttonClose = document.querySelector('.side-button__close');


var marginRight = parseInt(window.getComputedStyle(body).getPropertyValue('margin-right'));

if (marginRight < 0) {
   marginRight = -marginRight;
}
sideButtonWrap.style.marginRight = marginRight + "px";
window.addEventListener('resize', function () {
   var marginRight = parseInt(window.getComputedStyle(body).getPropertyValue('margin-right'));

   if (marginRight < 0) {
      marginRight = -marginRight;
   }
   sideButtonWrap.style.marginRight = marginRight + "px";
});

if (buttonClose) {
   buttonClose.addEventListener('click', function () {
      sideButtonWrap.classList.add("close");
   })
}

// document.querySelector('.side-button__close').addEventListener('click', _ => {
//    document.querySelector('.side-button__wrap').classList.add('close');
// })

// =======================================================================================================================================================================================================================

const labels = document.querySelectorAll('.radio__label-icon');

labels.forEach((label) => {
   label.addEventListener('mouseenter', () => {
      const text = label.getAttribute('data-text');
      document.getElementById('text').innerText = text;
   });
});




// =======================================================================================================================================================================================================================
const labelStar = document.querySelector('.radio__label-icon._icon-star');
const labelAttention = document.querySelector('.radio__label-icon._icon-attention');
const labelText = document.querySelector('#text');
const answer1 = document.getElementById('answer-first-1');
const answer2 = document.getElementById('answer-first-2');

if (answer1) {
   answer1.addEventListener('change', () => {
      if (answer1.checked) {
         labelStar.classList.add("color");
         labelStar.classList.remove("grey");
         labelText.innerHTML = labelStar.dataset.text;
         labelAttention.classList.remove("color");
         labelAttention.classList.add("grey");
      }
   });

   answer2.addEventListener('change', () => {
      if (answer2.checked) {
         labelAttention.classList.add("color");
         labelAttention.classList.remove("grey");
         labelText.innerHTML = labelAttention.dataset.text;
         labelStar.classList.remove("color");
         labelStar.classList.add("grey");
      }
   });
}





// =======================================================================================================================================================================================================================

const inputElement = document.querySelector('.successfully__sms-code');
inputElement.addEventListener('input', () => {
   const inputValue = inputElement.value;
   const numericValue = inputValue.replace(/\D/g, '');
   const maxLength = 4;
   if (numericValue.length > maxLength) {
      inputElement.value = numericValue.slice(0, maxLength);
   } else {
      inputElement.value = numericValue;
   }
});


// =======================================================================================================================================================================================================================


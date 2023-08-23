
import MicroModal from 'micromodal';
MicroModal.init({
   disableScroll: true
});


/*
  add_equipment modal
*/


const addWrapper = document.querySelector('.popup-add__inner');
if (addWrapper) {
   const addPrevSlide = document.querySelector('.popup-add__button_prev');
   const addNextSlide = document.querySelector('.popup-add__button_next');
   const addSteps = document.querySelectorAll('.popup-add__step');
   const addSlides = document.querySelectorAll('.popup-add__slide');
   const maxSlides = addSlides.length;

   let i = 0;

   addPrevSlide.style.display = 'none';
   addPrevSlide.addEventListener('click', () => {

      i--;
      if (i <= 0) {
         i = 0;
         addPrevSlide.style.display = 'none';
      };
      addWrapper.style.transform = `translateX(-${100 * i}%)`;
      activeStep(i);
      addNextSlide.style.display = 'block';
   }
   )
   addNextSlide.addEventListener('click', () => {
      addPrevSlide.style.display = 'block';

      i++;
      if (i >= maxSlides) i = maxSlides - 1;
      addWrapper.style.transform = `translateX(-${100 * i}%)`;
      activeStep(i)
      if (i === 3) {
         getResults();
         addNextSlide.style.display = 'none';
         addPrevSlide.style.display = 'none';
      };
   })

   function activeStep(i) {
      addSteps.forEach(step => {
         step.classList.remove('active-step');
      })
      addSteps[i]?.classList.add('active-step');
   }

   function getListValue(item) {
      const selectedItemId = item.querySelector('button').dataset.value;
      const options = item.querySelectorAll('li');
      let result;
      options.forEach(option => {
         if (option.dataset.value == selectedItemId) {
            result = option.textContent;
         }
      })
      return result || '-'
   }

   function getResults() {
      const selectCategories = document.querySelector('.popup-add__categories');
      const selectlocation = document.querySelector('.popup-add__location');
      const selectBrand = document.querySelector('.popup-add__brand');
      const perHours = document.getElementById('popup-add-2hours');
      const perDay = document.getElementById('popup-add-24hours');
      const descArea = document.getElementById('popup-add-description');

      const resultCategories = document.getElementById('popup-add-result-category');
      const resultLocation = document.getElementById('popup-add-result-location');
      const resultBrand = document.getElementById('popup-add-result-brand');
      const resultPerHours = document.getElementById('popup-add-result-perhours');
      const resultPerDay = document.getElementById('popup-add-result-perday');
      const resultDesc = document.getElementById('popup-add-result-desc');

      resultDesc.textContent = descArea.value || '-';
      resultPerHours.textContent = perHours.value || '-';
      resultPerDay.textContent = perDay.value || '-';
      resultCategories.textContent = getListValue(selectCategories);
      resultLocation.textContent = getListValue(selectlocation);
      resultBrand.textContent = getListValue(selectBrand);
   }

}


  




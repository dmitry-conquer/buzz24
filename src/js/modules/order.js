const orderCategory = document.querySelector('.order-category');
const orderLocation = document.querySelector('.order-location');
const orderButton = document.querySelector('.order-button');
const errorMessage = document.querySelector('.order-error-info');
const successMessage = document.querySelector('.auth-success-message')

if (orderButton) {
   orderButton.addEventListener('click', (e) => {
      const orderCategoryId = orderCategory.querySelector('button').dataset.value;
      const orderLocationId = orderLocation.querySelector('button').dataset.value;
      if (orderCategoryId == false || orderLocationId == false || successMessage.style.display !== 'block') {
         e.preventDefault();
         e.stopPropagation();
         errorMessage.classList.add('error-message');
      } else {
         errorMessage.classList.remove('error-message');
      }
   })
}

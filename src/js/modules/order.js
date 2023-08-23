const orderCategory = document.querySelector('.order-category');
const orderCategoryButton = document.querySelector('.order-category button');
const orderLocation = document.querySelector('.order-location');
const orderLocationButton = document.querySelector('.order-location button');
const orderButton = document.querySelector('.order-button');
const errorMessage = document.querySelector('.order-error-info');
const successMessage = document.querySelector('.auth-success-message')

if (orderButton) {
   orderButton.addEventListener('click', (e) => {
      const orderCategoryId = orderCategory.querySelector('button').dataset.value;
      const orderLocationId = orderLocation.querySelector('button').dataset.value;
      if (orderCategoryId == false) {
         e.preventDefault();
         e.stopPropagation();
         orderCategoryButton.style.border = '2px solid brown';
         errorMessage.classList.add('error-message');
      } else {
         orderCategoryButton.style.border = '1px solid #A2A2A2';
         errorMessage.classList.remove('error-message');
      }

      if (orderLocationId == false) {
         e.preventDefault();
         e.stopPropagation();
         orderLocationButton.style.border = '2px solid brown';
         errorMessage.classList.add('error-message');
      } else {
         orderLocationButton.style.border = '1px solid #A2A2A2';
         errorMessage.classList.remove('error-message');
      }

      if (successMessage.style.display !== 'block'){
         e.preventDefault();
         e.stopPropagation();
         errorMessage.classList.add('error-message');
      } else {
         errorMessage.classList.remove('error-message');
      }
   
   })
}

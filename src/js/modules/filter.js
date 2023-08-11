/*
  10.08.2023 [START]
*/

/*
  фільтрація
*/

export const useFilter = () => {

   const sidebarClose = document.querySelector('.sidebar__close');
   const sidebarOpen = document.querySelector('.open-filter');
   const sidebar = document.querySelector('.sidebar');
   if (sidebar) {
      sidebarClose.addEventListener('click', () => {
         sidebar.classList.remove('active');
      })
      sidebarOpen.addEventListener('click', () => {
         sidebar.classList.add('active');
      })
      
      let selectedItems = [];
      const filterResetLocal = document.querySelectorAll('.sidebar__items-container button');
      const filterReset = document.querySelector('.filter__reset');
      const filterCheckboxes = document.querySelectorAll('.sidebar__item input');
      const filteredItemsContainers = document.querySelectorAll('.sidebar__selected-items');
      filterCheckboxes.forEach(checkbox => {
         checkbox.addEventListener('change', handleFilter)
      })
      filterReset.addEventListener('click', filtersReset);
      filterResetLocal.forEach(item => {
         item.addEventListener('click', filtersReset);
         if (selectedItems.length === 0) {
            item.classList.add('hidden')
         }
      })
      
      function filtersReset() {
         filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
               checkbox.checked = false;
            }
         })
         selectedItems = [];
         renderList();
      }
      
      function handleFilter() {
         selectedItems = [];
         filterCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
               const item = checkbox.nextElementSibling;
               const itemText = item.querySelector('.sidebar__item-text').textContent;
               selectedItems.push(itemText);
            }
         })
         renderList();
      }
      
      function renderList() {
         const template = selectedItems.map(item => `<span class="sidebar__selected-item">${item}</span>`).join('');
         filteredItemsContainers.forEach(container => container.innerHTML = template);
         filterResetLocal.forEach(item => {
            selectedItems.length === 0 ? item.classList.add('hidden') : item.classList.remove('hidden');
         })
      }
   }

}



/*
  10.08.2023 [END]
*/
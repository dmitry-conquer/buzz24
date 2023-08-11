export const useTranslate = () => {
   const elementsToTranslate = document.querySelectorAll('[data-translate]');
   const translationsURL = {
      UK_UA: "https://api.npoint.io/38e0577f8bc9a1ef8354",
      EN: "https://api.npoint.io/69ced25cec9eb8aa2f4c",
      PL_PL: "",
      RO_RO: "",
      TR_TR: "",
   }

   const changeLangTrigers = document.querySelectorAll('.location-header__radio-input');
   changeLangTrigers.forEach(item => {
      item.addEventListener('change', () => {
         if (item.checked) {
            changeLang(item);
         }
      })
   })

   function changeLang(item) {
      const translateLang = item.value;
      getTranlsate(translateLang)

   }

   async function getTranlsate(translateLang) {
      try {
        const response = await fetch(translationsURL[translateLang] || translationsURL.UK_UA);
        const translations =  await response.json();
        elementsToTranslate.forEach(element => {
         const translateKey = element.getAttribute("data-translate");
         // const userLanguage = navigator.language; // Отримуємо мову користувача
  
         const translation = translations[translateKey];

         if (element.tagName === 'INPUT') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }

         
       });
      } catch (error) {
        console.log(error);
      }
    }
    getTranlsate()
}
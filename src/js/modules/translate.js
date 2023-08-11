export const useTranslate = () => {
   const elementsToTranslate = document.querySelectorAll('[data-translate]');
   elementsToTranslate.forEach(element => {
      // console.log(element);
   })
   async function getTranlsate() {
      try {
        const response = await fetch("../public/ru.json");
        const translations =  await response.json();
        console.log(translations);
      //   elementsToTranslate.forEach(element => {
      //    const translateKey = element.getAttribute("data-translate-key");
      //    const userLanguage = navigator.language; // Отримуємо мову користувача
  
      //    // Знаходимо відповідний переклад для поточної мови користувача
      //    const translation = translations[translateKey][userLanguage] || translations[translateKey]["en"];
  
      //    // Встановлюємо переклад у вміст елемента
      //    element.textContent = translation;
      //  });
      } catch (error) {
        console.log(error);
      }
    }
    getTranlsate()
}
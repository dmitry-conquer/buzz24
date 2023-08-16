
import MicroModal from 'micromodal';
MicroModal.init();

const loginPopup = document.getElementById('popup-login');
const getCodeTimer = document.getElementById('get-code-timer');
const authCurrentTel = document.getElementById('auth-current-tel');
const telAuthTrigger = document.getElementById('tel-auth-trigger');
const telAuthTriggerWrapper = document.querySelector('.login-popup__social-wrapper');
const telInfo = document.querySelector('.login-popup__tel-info');

const telAuthInput = document.getElementById('tel-auth-input');
const telAuthTelConfirm = document.getElementById('tel-auth-tel-confirm');
const telAuthConfirmWrapper = document.querySelector('.login-popup__tel-input');
const telAuthCodeWrapper = document.querySelector('.login-popup__code');

const telAuthCodeConfirm = document.getElementById('tel-auth-code-confirm');
const telAuthCodeInput = document.getElementById('tel-auth-code-input');
const authErrorMessage = document.getElementById('auth-error-message');
const authSuccessMessage = document.getElementById('auth-success-message');
const authResult = document.querySelector('.login-popup__auth-result');
const codeTryAgain = document.getElementById('auth-code-again');
const repeatMessage = document.querySelector('.login-popup__repeat');
const numberMessage = document.querySelector('.login-popup__tel-number');
const popupLogin = document.getElementById('popup-login');
const closeAuthModal = document.querySelector('.popup-success__button');





if (loginPopup) {
   let timer;
  telAuthTrigger.addEventListener('click', () => {
   telAuthConfirmWrapper.style.display = 'flex';
   telAuthTriggerWrapper.style.display = 'none';
  })

  telAuthTelConfirm.addEventListener('click', () => {
   const currentNumber = telAuthInput.value;
   if (isTelValid(currentNumber)) {
      telAuthConfirmWrapper.style.display = 'none';
      telAuthCodeWrapper.style.display = 'block';
      authCurrentTel.textContent = currentNumber;
      startTimer();
   } else {
      console.log('Oops');
   }
  })

  telAuthCodeConfirm.addEventListener('click', () => {
   const receivedCode = '1234';
   if (telAuthCodeInput.value == receivedCode) {
     authErrorMessage.style.display = 'none';
     telInfo.style.display = 'none';
     authSuccessMessage.style.display = 'block';
      
   } else {
      authErrorMessage.style.display = 'flex';
      authResult.style.display = 'block';
      numberMessage.style.display = 'none';
        telAuthCodeInput.value = '';
   }
  })


  closeAuthModal.addEventListener('click', () => {
   popupLogin.classList.remove('popup_show');
   document.documentElement.classList.remove('popup-show');
   telAuthTriggerWrapper.style.display = 'block';
   telAuthCodeWrapper.style.display = 'none';
   authErrorMessage.style.display = 'none';
   telAuthInput.value = '';
   telAuthCodeInput.value = '';
   clearInterval(timer);
   console.log('YES');
   MicroModal.close('popup-success-auth'); // [2]

  })


  codeTryAgain.addEventListener('click', () => {
   codeTryAgain.style.display = 'none';
    repeatMessage.style.display = 'block';
    authErrorMessage.style.display = 'none';
    numberMessage.style.display = 'block';
    telAuthCodeInput.value = '';
   clearInterval(timer);
   startTimer();
  })

  function isTelValid(currentNumber) {
   if (currentNumber.match(/^\+40/)) {
      return currentNumber.match(/^\+40 [0-9]{3} [0-9]{3} [0-9]{3}$/);
    } else if (currentNumber.match(/^\+90/)) {
      return currentNumber.match(/^\+90 [0-9]{3} [0-9]{3} [0-9]{4}$/);
    } else if (currentNumber.match(/^\+37 3/)) {
      return currentNumber.match(/^\+37 3[0-9]{2} [0-9]{3} [0-9]{4}$/);
    } else if (currentNumber.match(/^\+38 0/)) {
      return currentNumber.match(/^\+38 0[0-9]{2} [0-9]{3} [0-9]{4}$/);
    } else {
      return false;
    }
  }

  function startTimer() {
   const timeoutTime = 119000 + Date.now(); // 2 min 119000
   timer = setInterval(() => {
   let ms = timeoutTime - Date.now();
   let secs = Math.round(ms / 1000);
   let leftMins = Math.floor(secs / 60);
   let leftSec = secs % 60;
   let result = secs > 0 ? `${leftMins.toString().padStart(2, 0)}:${leftSec.toString().padStart(2, 0)}` : '00:00';
   if (secs <= 0) {
      codeTryAgain.style.display = 'block';
      repeatMessage.style.display = 'none';
      clearInterval(timer);
   }
   getCodeTimer.textContent = result;
  }, 1000);
}
  
}
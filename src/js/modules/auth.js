
document.addEventListener('click', (e) => {
  const telAuthTrigger = e.target.closest('.tel-auth-trigger');
  if (!telAuthTrigger) return;
 
    const authParent = telAuthTrigger.closest('.auth-parent');

    // const loginPopup = document.getElementById('popup-login');
    const authCurrentTel = authParent.querySelector('.auth-current-tel');
    const getCodeTimer = authParent.querySelector('.get-code-timer');
    const telAuthTriggerWrapper = authParent.querySelector('.login-popup__social-wrapper');
    // const telInfo = document.querySelector('.login-popup__tel-info');
    const telAuthInput = authParent.querySelector('.tel-auth-input');
    const telAuthTelConfirm = authParent.querySelector('.tel-auth-tel-confirm');
    const telAuthConfirmWrapper = authParent.querySelector('.login-popup__tel-input');
    const telAuthCodeWrapper = authParent.querySelector('.login-popup__code');
    const telAuthCodeConfirm = authParent.querySelector('.tel-auth-code-confirm');
    const telAuthCodeInput = authParent.querySelector('.tel-auth-code-input');
    const authErrorMessage = authParent.querySelector('.auth-error-message');
    const authSuccessMessage = authParent.querySelector('.auth-success-message');
    const authResult = authParent.querySelector('.login-popup__auth-result');
    const codeTryAgain = authParent.querySelector('.auth-code-again');
    const repeatMessage = authParent.querySelector('.login-popup__repeat');
    const numberMessage = authParent.querySelector('.login-popup__tel-number');
    const authButtonRow = authParent.querySelector('.tab-order__row');
    // const popupLogin = document.getElementById('popup-login');


   let timer;
    telAuthConfirmWrapper.style.display = 'flex';
    telAuthTriggerWrapper.style.display = 'none';
    if (authButtonRow) {
      authButtonRow.style.display = 'none';
    }
    
 
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
      telAuthCodeWrapper.style.display = 'none';
      authSuccessMessage.style.display = 'block';
      telAuthInput.value = '';
      telAuthCodeInput.value = '';
       
    } else {
       authErrorMessage.style.display = 'flex';
       authResult.style.display = 'block';
       numberMessage.style.display = 'none';
         telAuthCodeInput.value = '';
    }
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
   





})






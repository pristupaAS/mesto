function showInputError(formElement, inputElement, errorMessage, objectValidation) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectValidation.errorClass);
};

function hideInputError(formElement, inputElement, objectValidation) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectValidation.inputErrorClass);
  errorElement.classList.remove(objectValidation.errorClass);
  errorElement.textContent = '';
};

function checkValidity(formElement, inputElement, objectValidation) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objectValidation);
  } else {
    hideInputError(formElement, inputElement, objectValidation);
  }
};

function setEventListeners(formElement, objectValidation) {
  const inputList = Array.from(formElement.querySelectorAll(objectValidation.inputSelector));
  const buttonElement = formElement.querySelector(objectValidation.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, objectValidation);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkValidity(formElement, inputElement, objectValidation);
      toggleButtonState(inputList, buttonElement, objectValidation);
    });
  });
};

function searchInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

function enableValidation (objectValidation){
  const formList = Array.from(document.querySelectorAll(objectValidation.formSelector));
   formList.forEach((formElement) => {
    setEventListeners(formElement, objectValidation);
  });
};

function toggleButtonState (inputList, buttonElement, objectValidation) {
 if (searchInvalidInput(inputList, objectValidation)) {
  buttonElement.classList.add(objectValidation.inactiveButtonClass);
  buttonElement.setAttribute('disabled','disabled')
} else {
  buttonElement.classList.remove(objectValidation.inactiveButtonClass);
  buttonElement.removeAttribute('disabled','disabled')
}
};

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});



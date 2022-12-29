export class FormValidator {
  constructor(objectValidation, form) {
    this._formSelector = objectValidation.formSelector;
    this._inputSelector = objectValidation.inputSelector;
    this._submitButtonSelector = objectValidation.submitButtonSelector;
    this._inactiveButtonClass = objectValidation.inactiveButtonClass;
    this._inputErrorClass = objectValidation.inputErrorClass;
    this._errorClass = objectValidation.errorClass;
    this._form = form;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(this._form, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _searchInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    inputList.forEach((object) => {
      this._setEventListeners(object);
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._searchInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled", "disabled");
    }
  }
}

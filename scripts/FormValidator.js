const formSelector = document.querySelector('.popup-form');
const inputSelector = formSelector.querySelector('.popup__input');
const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
const inactiveButtonClass = formSelector.querySelector('.popup__button_disabled');

 class FormValidator {
    constructor(data, validatorElement) {
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._validatorElement = validatorElement;
    }

    _isValid() { //проверяет валидность
        const isInputValid = validatorElement.validity.valid;
        if (!isInputValid) {
            _showInputError(this._formSelector, this._inputSelector, this._inputSelector.validationMessage);
        } else {
            this._hideInputError(this._formSelector, this._inputSelector);
        }
    }

    _showInputError = (inputSelector, errorMessage) => { // показывает ошибку
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        inputSelector.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add('.popup__input_type_error-active');
    }

    _hideInputError = (inputSelector) => { //скрывает ошибку 
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        inputSelector.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = " ";
    }

    hasInvalidInput = () => { //проверка невалидности поля 
        this._inputList.forEach(inputSelector => {
            this._hideInputError(inputSelector)
        })
        this._toggleButtonState();
    };

    _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
        const hasNotValidInput = this._inputList.some(inputSelector => !inputSelector.validity.valid);
        if (hasNotValidInput) {
            this._buttonElement.setAttribute("disabled", true);
        } else {
            this._buttonElement.removeAttribute("disabled");
        }
    };

    _setEventListeners() {
        this._validatorElement.addEventListener('submit', (event) => {
            event.preventDefault()
        });
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
        this._inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            this._isValid(formSelector, inputSelector);
            this._toggleButtonState()
        })
    });
    this._toggleButtonState();
};

enableValidation() {
    this._setEventListeners()
}

}

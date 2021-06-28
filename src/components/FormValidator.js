export default class FormValidator {
    constructor(data, validatorElement) {
        this._validatorElement = validatorElement;
        this._inputSelector = data.inputSelector;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._formSelector = this._validatorElement.querySelector(data.formSelector);
        this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formSelector.querySelector(data.submitButtonSelector);
        
    }

    _isValid = (inputSelector) => { //проверяет валидность
        const isInputValid = inputSelector.validity.valid;
        if (!isInputValid) {
            this._showInputError(inputSelector, inputSelector.validationMessage);
        } else {
            this._hideInputError(inputSelector);
        }
    }

    _showInputError = (inputSelector, errorMessage) => { // показывает ошибку
        inputSelector.classList.add(this._inputErrorClass);
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError = (inputSelector) => { //скрывает ошибку 
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        inputSelector.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = " ";
    }

    resetValidation = () => { //проверка невалидности поля 
        this._inputList.forEach(inputSelector => {
            this._hideInputError(inputSelector)
        })
        this._toggleButtonState();
    };

    _toggleButtonState = () => {
        const hasNotValidInput = this._inputList.some(inputSelector => !inputSelector.validity.valid);
        if (hasNotValidInput) {
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.removeAttribute("disabled");
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _setEventListeners() {
        this._formSelector.addEventListener('submit', (event) => {
            event.preventDefault()
            this._buttonElement.setAttribute("disabled", true);
            this._buttonElement.classList.add(this._inactiveButtonClass);
        });
        this._inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            this._isValid(inputSelector);
            this._toggleButtonState();
        })
    });
    this._toggleButtonState(); 
};

resetValidation() {
    this._inputList.forEach((inputSelector) => {
        this._hideInputError(inputSelector);
    });
    this._toggleButtonState();
}

enableValidation() {
    this._setEventListeners()
}

}

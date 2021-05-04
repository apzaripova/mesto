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

    _showInputError = () => { // показывает ошибку
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        inputSelector.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add('.popup__input_type_error-active');
    }

    _hideInputError = () => { //скрывает ошибку 
        const errorElement = this._formSelector.querySelector(`.${inputSelector.id}-error`); 
        inputSelector.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = " ";
    }


    _isValid(validatorElement) { //проверяет валидность
        const isInputValid = validatorElement.validity.valid;
        if (!isInputValid) {
            _showInputError(this._formSelector, this._inputSelector, this._inputSelector.validationMessage);
        } else {
            this._hideInputError(this._formSelector, this._inputSelector);
        }
    }

    _hasInvalidInput = (inputList) => { //проверка невалидности поля 
        return inputList.some((inputSelector) => {
            return !inputSelector.validity.valid;
        });
    };

    _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(inactiveButtonClass);
            buttonElement.setAttribute("disabled", true);
        } else {
            buttonElement.classList.remove(inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
        }
    };

    _enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => { // функция добавления обработчиков всем формам
        const formList = Array.from(document.querySelectorAll(this._formSelector));
    
        formList.forEach((formSelector) => {
            formSelector.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
            
            setEventListeners(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass);
        });
    };

    _setEventListeners() {
        this._validatorElement.addEventListener('submit', (event) => {
            event.preventDefault()
        });
        const inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
        const buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            this._isValid(formSelector, inputSelector);
            this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
    }
}

enableValidation();
const formSelector = document.querySelector('.popup-form');
const inputSelector = formSelector.querySelector('.popup__input');
const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
const inactiveButtonClass = formSelector.querySelector('.popup__button_disabled');
const errorClass = formSelector.querySelector('.popup__input_type_error_active');
console.log(inputErrorClass);

const showInputError = (formSelector, inputSelector, errorMessage, inputErrorClass) => { //функция добавляет класс с ошибкой
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); 
    inputSelector.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formSelector, inputSelector, inputErrorClass, errorClass) => { //функция удаляет класс с ошибкой
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); 
    inputSelector.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = " ";
};

const isValid = (formSelector, inputSelector) => { //функция, которая проверяет валидность формы
    if (!inputSelector.validity.valid) {
        showInputError(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputError(formSelector, inputSelector);
    }
};

const setEventListeners = (formSelector, inputSelector, submitButtonSelector, inactiveButtonClass) => { // функция добавления обработчиков всем полям формы
    const inputList = Array.from(formSelector.querySelectorAll(inputSelector));
    const buttonElement = formSelector.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(formSelector, inputSelector);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => { // функция добавления обработчиков всем формам
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        
        setEventListeners(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass);
    });
};

const hasInvalidInput = (inputList) => { //функция, проверяющая невалидность поля 
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
};

enableValidation({
    formSelector: '.popup-form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_type_error_active'
  }); 
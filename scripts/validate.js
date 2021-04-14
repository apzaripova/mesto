const formSelector = document.querySelector('.popup-form');
const inputSelector = formSelector.querySelector('.popup__input');
const formError = formSelector.querySelector(`.${inputSelector.id}-error`);
const inactiveButtonClass = formSelector.querySelector('.popup__button_disabled');

const showInputErrror = (formSelector, inputSelector, errorMessage) => { //функция добавляет класс с ошибкой
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); 
    inputSelector.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input_type_error_active');
};

const hideInputErrror = (formSelector, inputSelector) => { //функция удаляет класс с ошибкой
    const errorElement = formSelector.querySelector(`.${inputSelector.id}-error`); 
    inputSelector.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input_type_error_active');
    errorElement.textContent = " ";
};

const isValid = (formSelector, inputSelector) => { //функция, которая проверяет валидность формы
    if (!inputSelector.validity.valid) {
        showInputErrror(formSelector, inputSelector, inputSelector.validationMessage);
    } else {
        hideInputErrror(formSelector, inputSelector);
    }
};

const setEventListeners = (formSelector) => { // функция добавления обработчиков всем полям формы
    const inputList = Array.from(formSelector.querySelectorAll('.popup__input'));
    const submitButtonSelector = formSelector.querySelector('.popup__button');
    toggleButtonState(inputList, submitButtonSelector);
    inputList.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            isValid(formSelector, inputSelector);
            toggleButtonState(inputList, submitButtonSelector);
        });
    });
};

const enableValidation = () => { // функция добавления обработчиков всем формам
    const formList = Array.from(document.querySelectorAll('.form'));

    formList.forEach((formSelector) => {
        formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        
        setEventListeners(formSelector);
    });
};

const hasInvalidInput = (inputList) => { //функция, проверяющая невалидность поля 
    return inputList.some((inputSelector) => {
        return !inputSelector.validity.valid;
    });
};

const toggleButtonState = (inputList, submitButtonSelector) => {
    if (hasInvalidInput(inputList)) {
        submitButtonSelector.classList.add('popup__button_disabled');
    } else {
        submitButtonSelector.classList.remove('popup__button_disabled');
    }
};

enableValidation();
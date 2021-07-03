import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup-form');
        this._submitHandler = submitHandler;
        this._submitButton = this._form.querySelector('.popup__button');
        this._initialValueSubmitButton = this._submitButton.textContent;
    }

    _getInputValues() {
        const values = {};
        const inputs = Array.from(this._form.querySelectorAll('.popup__input'));
        inputs.forEach(item => {
            values[item.name] = item.value;
        })
        return values;
    }

    close() {
        this._form.reset();
        super.close();
    }

    renderLoading(isLoading, initialDownloadMessage = 'Cохранение...') {
        if (isLoading) {
          this._submitButton.textContent = initialDownloadMessage;
        } else {
          this._submitButton.textContent = this._initialValueSubmitButton;
        }
      }

    setEventListeners() {
       super.setEventListeners();

       this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submitHandler(this._getInputValues());
       });
    }
}
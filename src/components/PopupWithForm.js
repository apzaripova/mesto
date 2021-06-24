import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler;
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

    setEventListeners() {
       super.setEventListeners();

       this._form = this._popup.querySelector('.popup-form');
       this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submitHandler(this._getInputValues());
       });
    }
}
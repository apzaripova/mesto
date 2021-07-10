import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, submit) {
      super(popupSelector);
      this._form = this._popup.querySelector('.popup-form');
      this._submit = submit;
    }
    
    setConfirmHandler(submit) {
      this._submit = submit;
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._submit();
      });
    }
    }
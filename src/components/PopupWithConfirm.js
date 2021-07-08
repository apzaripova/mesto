import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, { submit }) {
      super(popupSelector);
      this._form = this._popup.querySelector('.popup-form');
      this._submit = submit;
      this._submitEvtHandler = this._submitEvtHandler.bind(this);
    }
  
    _submitEvtHandler(evt) {
      evt.preventDefault();
      this._submit(this._item);
      this._form.removeEventListener('submit', this._submitEvtHandler);
    }
  
    setEventListeners() {
      this._form.addEventListener('submit', this._submitEvtHandler);
      super.setEventListeners();
    }
  
    open(item) {
      this._item = item;
      super.open();
    }
  }
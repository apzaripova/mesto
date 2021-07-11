import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, handleSubmitCallBack) {
      super(popupSelector);
      this._form = this._popup.querySelector('.popup-form');
      this._handleSubmitCallback = handleSubmitCallBack;

      this._popupButton = this._form.querySelector('.popup__button')
      this._popupButtonTextContent = this._popupButton.textContent
    }
    
    setConfirmHandler(handleSubmitCallBack) {
      this._handleSubmitCallback = handleSubmitCallBack;
    }

    renderLoadingWhileDeleting(isLoading) {
      if(isLoading) {
        this._popupButton.textContent = 'Удаление...'
      } else {
        this._popupButton.textContent = this._popupButtonTextContent
      }
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._handleSubmitCallback();
      });
    }
    }
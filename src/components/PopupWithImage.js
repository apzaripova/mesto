import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupFigcaption = this._popup.querySelector('.popup__figcaption');
        this._popupPicture = this._popup.querySelector('.popup__picture');
    }

    open(item) {
        this._popupFigcaption.textContent = item.name;
        this._popupPicture.url = item.link;
        this._popupPicture.alt = item.name;
        super.open();
    }
}
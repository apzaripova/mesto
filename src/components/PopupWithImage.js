import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupFigcaption = this._popup.querySelector('.popup__figcaption');
        this._popupPicture = this._popup.querySelector('.popup__picture');
    }

    open(name, link) {
        this._popupFigcaption.textContent = name;
        this._popupPicture.src = link;
        this._popupPicture.alt = name;
        super.open();
    }
}
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupFigcaption = document.querySelector('.popup__figcaption');
        this._popupPicture = document.querySelector('.popup__picture');
    }

    open(link, name) {
        this._popupFigcaption.textContent = name;
        this._popupPicture.url = link;
        this._popupPicture.alt = name;
        super.open();
    }
}
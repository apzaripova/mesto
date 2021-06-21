import Popup from './Popup.js';
import {popupPicture, popupFigcaption} from '../pages/index.js';

export default class PopupWithImage extends Popup {
    constructor(data, popup) {
        super(popup);
        this.name = data.name;
        this.link = data.link;
    }

    open() {
        popupPicture.src = link;
        popupPicture.alt = name;
        popupFigcaption.textContent = name;
        openPopup(popupTypeImage);
    }
}
import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
    }

    _submitEvtHandler(evt) {
        evt.preventDefault();
        
    }
}
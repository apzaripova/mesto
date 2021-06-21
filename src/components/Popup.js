export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open() {
        this._popup.classList.add('popup_active');

        document.addEventListener('keyup', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keyup', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            const popupActive = document.querySelector('.popup_active');
            this.close(popupActive);
          }
    }

    setEventListeners() {
        this._popup.addEventListener('click', () => {
            this.close();
        })
    }
} 
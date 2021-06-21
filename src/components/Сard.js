import {openImgPopup} from '../pages/index.js';

export default class Card {
    constructor({name, link}, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__photo').alt = this._name;

        return this._element;
    }

    _deleteCardClick = () => {
        this._element.remove();
    }

    _handleLikeClick = () => {
        this._element.querySelector('.card__button-like').classList.toggle('card__button-like_active');
    }


    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', this._handleLikeClick);

        this._element.querySelector('.card__button-delete').addEventListener('click', this._deleteCardClick);

        this._element.querySelector('.card__photo').addEventListener('click', () => {
            openImgPopup(this._link, this._name);
        });
}
}


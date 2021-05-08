import {openImgPopup} from './index.js';

export default class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._element = document.querySelector(cardSelector).content.children[0].cloneNode(true);
        this._cardButtonLike = this._element.querySelector('.card__button-like');
        this._cardButtonDelete = this._element.querySelector('.card__button-delete');
        this._cardPhoto = this._element.querySelector('.card__photo');
    }

    generateCard() {

        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__photo').alt = this._name;

        this._setEventListeners();

        return this._element;
    }

    _deleteCardClick = () => {
        this._element.remove();
    }

    _handleLikeClick = () => {
        this._cardButtonLike.classList.toggle('card__button-like_active');
    }


    _setEventListeners() {
        this._cardButtonLike.addEventListener('click', this._handleLikeClick);

        this._cardButtonDelete.addEventListener('click', this._deleteCardClick);

        this._cardPhoto.addEventListener('click', () => {
            openImgPopup(this._link, this._name);
        });
}
}


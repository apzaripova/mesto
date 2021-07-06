export default class Card {
    constructor(item, cardSelector, ownerId, {handleCardClick, handleDeleteCardClick, setLike, deleteLike}) {
        this._name = item.name;
        this._link = item.link;
        this._cardSelector = cardSelector;
        this._ownerId = ownerId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._setLike = setLike;
        this._deleteLike = deleteLike;
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

    setLikeCount(data) {
        this._element.querySelector('.card__count-like').textContent = String(data.likes.length);
      }


    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', this._handleLikeClick);

        this._element.querySelector('.card__button-delete').addEventListener('click', this._deleteCardClick);


        this._element.querySelector('.card__photo').addEventListener('click', () => { 
            this._handleCardClick();
        });
}
}


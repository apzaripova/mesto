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

    deleteCard() {
        this._deleteElem(this._element);
    }

    _deleteElem() {
        this._element.remove();
        this._element = null;
    }

    _dislike(item) {
        this._removeLikedClass();
        this._deleteLike(item);
    }

    _like(item) {
        this._addLikedClass();
        this._setLike(item);
    }

    _removeLikedClass() {
        this._element.querySelector('.card__button-like').classList.remove('card__button-like_active');
    }

    _addLikedClass() {
        this._element.querySelector('.card__button-like').classList.add('card__button-like_active');
    }

    setLikeCount(item) {
        this._element.querySelector('.card__count-like').textContent = String(item.likes.length);
    }

    _checkIsOwnCard() {
        if (this._item.owner._id !== this._ownerId) {
            this._deleteElem(this._deleteButton);
        }
    }

    _checkLikedState() {
        this._item.likes.forEach((likeOwner) => {
            if(likeOwner._id === this._ownerId) {
                this._addLikedClass();
            }
        })
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
        this._deleteButton = this._element.querySelector('.card__button-like');
        this.setLikeCount(this._item);
        this._checkIsOwnCard();
        this._checkLikedState();

        return this._element;
    }

    setLikeCount(data) {
        this._element.querySelector('.card__count-like').textContent = String(data.likes.length);
      }


    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', () => {
            if(this._element.querySelector('.card__button-like').classList.contains('card__button-like_active')) {
                this._dislike(this._item);
            } else {
                this._like(this._item);
            }
        });

        this._deleteButton.addEventListener('click', this._handleDeleteCardClick);


        this._element.querySelector('.card__photo').addEventListener('click', () => { 
            this._handleCardClick();
        });
}
}


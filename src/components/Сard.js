export default class Card {
    constructor(item, {handleCardClick, handleLikeClick, handleDeleteCardClick}, cardSelector, api, userId) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;


        this._cardSelector = cardSelector;


        this._api = api;
        this._id = item._id; // id карточки
        this._ownerId = item.owner._id; // id создателя карточки
        this._userId = userId; // id текущего пользователя


        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
    }

    // получение карточки
    _getTemplate() {
        this._element = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    }

    // отрисовка карточки 
    generateCard() {
        this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.card__photo').src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        this._element.querySelector('.card__photo').alt = this._name;
        this._element.querySelector('.card__count-like').textContent = this._likes.length;

        if(!(this._ownerId === this._userId)) {
            this._element.querySelector('.card__button-delete').style.display = 'none'
          }
          
          if(this._likes.find((obj) => this._userId === obj._id)) {
            this._element.querySelector('.card__button-like').classList.add('card__button-like_active')
          }

        return this._element;
    }

    // Лайк
    handleLikeCard() {
        const likeButton = this._element.querySelector('.card__button-like');
        const likeCount = this._element.querySelector('.card__count-like');

        if(!(likeButton.classList.contains('card__button-like_active'))) {
            this._api.setLike(this._id)
              .then((item) => {
                likeButton.classList.add('card__button-like_active')
                likeCount.textContent = item.likes.length
              })
              .catch((err) => {
                console.log(err)
              })
          } else {
            this._api.deleteLike(this._id)
              .then((item) => {
                likeButton.classList.remove('card__button-like_active')
                likeCount.textContent = item.likes.length
              })
              .catch((err) => {
                console.log(err)
              })
          }
    }

    // Удаление карточки
    handleRemoveCard() {
        this._element.remove();
        this._element = null;
    }

    // слушатели событий 
    _setEventListeners() {
        this._element.querySelector('.card__button-like').addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._element.querySelector('.card__button-delete').addEventListener('click', () => {
            this._handleDeleteCardClick();
        });


        this._element.querySelector('.card__photo').addEventListener('click', () => { 
            this._handleCardClick();
        });
}
}


export default class Card {
    constructor(item, {handleCardClick, handleLikeClick, handleDeleteCard}, cardSelector, userId) {
        this._name = item.name;
        this._link = item.link;
        this._likes = item.likes;

        this._cardSelector = cardSelector;

        this._id = item._id; // id карточки
        this._ownerId = item.owner._id; // id создателя карточки
        this._userId = userId; // id текущего пользователя

        this._isOwner = item.isOwner;
        this._isLiked = item.isLiked;

        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteCard = handleDeleteCard;
    }

    // получение карточки
    _getTemplate() {
        this._element = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    }

    // отрисовка карточки 
    generateCard() {
        this._getTemplate();
        this._setEventListeners();

        const cardPhoto = this._element.querySelector('.card__photo');
        this._cardLikes = this._element.querySelector('.card__count-like');

        cardPhoto.src = this._link;
        this._element.querySelector('.card__title').textContent = this._name;
        cardPhoto.alt = this._name;

        this._cardLikes.textContent = this._likes.length;
    
        if(!(this._ownerId === this._userId)) {
          this._element.querySelector('.card__button-delete').style.display = 'none'
        }
        
        if (this._isLiked) {
          this._renderLike();
        }
        return this._element;
  }

    // Лайк
    _renderLike() {
      this._element.querySelector('.card__button-like').classList.toggle('card__button-like_active');
    }

    toggleLike() {
      this._renderLike();
      
      if (this._isLiked) {
        this._cardLikes.textContent = Number(this._cardLikes.textContent) - 1;
      } else {
        this._cardLikes.textContent = Number(this._cardLikes.textContent) + 1;
      }
  
      this._isLiked = !this._isLiked;
    }
  

    // Удаление карточки
    handleRemoveCard() {
        this._element.remove();
        this._element = null;
    }

    // слушатели событий 
    _setEventListeners() {
      this._element.querySelector('.card__button-like').addEventListener('click', () => {
        this._handleLikeClick(this._id, this._isLiked);
  
      });

        this._element.querySelector('.card__button-delete').addEventListener('click', () => {
            this._handleDeleteCard();
        });


        this._element.querySelector('.card__photo').addEventListener('click', () => { 
            this._handleCardClick(this._name, this._link);
        });
}
}

 import './index.css';
 import Card from '../components/Сard.js';
 import Section from '../components/Section.js';
 import FormValidator from '../components/FormValidator.js';
 import PopupWithImage from '../components/PopupWithImage.js';
 import PopupWithForm from '../components/PopupWithForm.js';
 import UserInfo from '../components/UserInfo.js';
 import Api from '../components/Api.js';
 import PopupWithConfirm from '../components/PopupWithConfirm.js';

const popup = document.querySelector('.popup');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupInfo = document.querySelector('#profileEdit');
const popupCard = document.querySelector('#newCard');
const avatarForm = document.querySelector('#avatarForm');
const popupCloseButton = document.querySelector('.popup__close-button');
const closeCard = document.querySelector('#closeCard')
const closeImage = document.querySelector('#closeImage');
const profileAddButton = document.querySelector('.profile__add-button');
const popupInputTypeTitle = document.querySelector('.popup__input_type_title');
const popupInputTypeLink = document.querySelector('.popup__input_type_link');
const popupPicture = document.querySelector('.popup__picture');
const popupFigcaption = document.querySelector('.popup__figcaption');
const cardsList = document.querySelector('.cards__list');
const formSelector = document.querySelector('.popup-form');
const inputSelector = formSelector.querySelector('.popup__input');
const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
const inactiveButtonClass = formSelector.querySelector('.popup__button_disabled');
const cardButtonLike = document.querySelector('.card__button-like');
const cardButtonDelete = document.querySelector('.card__button-delete');
const cardPhoto = document.querySelector('.card__photo');
const profileAvatarButton = document.querySelector('.profile__avatar-button');
const enableValidation = {
  formSelector: '.popup-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_error_active'
};

let tempCard = null;
let ownerId = null;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
  headers: {
  authorization: '7756de4b-55ba-47f8-9f76-db9dfc9e3dd4',
    'Content-Type': 'application/json'
  }
});


api.getInitialItem()
  .then(([userItem, cardsItem]) => {
    ownerId = userItem._id;
    userInfo.setUserInfo(userItem);
    cardsItem.reverse()
    .forEach(cardItem => cardList.addItem(createCard(cardItem)))
  })
  .catch((err) => {
    console.log(err);
  })

// валидация формы
const editFormValidation = new FormValidator(enableValidation, popupInfo);
editFormValidation.enableValidation();

const pictureFormValidation = new FormValidator(enableValidation, popupCard);
pictureFormValidation.enableValidation();

// функция добавления новой карточки 
function createCard(item) { 
  const card = new Card(item, '.card-template', ownerId, {
    handleCardClick: (item) => {
    popupPicture.src = item.link;
    popupPicture.alt = item.link;
    popupFigcaption.textContent = item.name;

    popupWithImage.open();
  },
    handleDeleteCardClick: () => {
      tempCard = card;
      popupWithConfirm.open();
    },
    setLike: (item) => {
      api.setLike(item)
      .then((item) => {
        card.setLikeCount(item);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    deleteLike: (item) => {
      api.deleteLike(item)
      .then((item) => {
        card.setLikeCount(item);
      })
      .catch((err) => {
        console.log(err);
      })
    }

  });
  
  return card.generateCard();
};


const cardList = new Section({
  renderer: (item) => {
    const card = createCard(item);
    const cardElement = card.generateCard();
    card.setLikeCount(item);
    cardList.addItem(cardElement, 'append');
  }
}, cardsList);


const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


const userInfo = new UserInfo('.profile__name', '.profile__description', '.popup_avatar');

//добавление новой карточки
const addCardPopup = new PopupWithForm('.popup_type_new-card', (item) => {
  addCardPopup.renderLoading(true, 'Сохранение...');
  api.postCard(item)
  .then((res) => {
    const card = createCard(res);
    const cardElement = card.generateCard();
    cardsList.addItem(cardElement, 'prepend');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    addCardPopup.renderLoading(false);
    addCardPopup.close();
  })
});

//информация о пользователе
const editProfilePopup = new PopupWithForm('.popup_type_edit', (item) => {
    editProfilePopup.renderLoading(true, 'Сохранение...');
    console.log(item);
    api.setUserInfo(item)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.renderLoading(false);
      editProfilePopup.close();
    })
  }
);



// обновление аватара пользователя
const popupWithUpdateAvatar = new PopupWithForm('.popup_avatar', (item) => {
    popupWithUpdateAvatar.renderLoading(true, 'Сохранение...');
    api.setUserAvatar(item)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithUpdateAvatar.renderLoading(false);
      popupWithUpdateAvatar.close();
    })
  }
);

// удаление карточки
const popupWithConfirm = new PopupWithConfirm('.popup_confirm', {
  submit: (item) => {
    api.deleteCard(item)
    .then(() => {
      tempCard.deleteCard();
    })
    .then(() => {
      tempCard = null;
      popupWithConfirm.close();
    })
    .catch((err) => {
      console.log(err);
    })
  }
})


profileButtonEdit.addEventListener('click', () => {
  popupInputTypeName.value = profileName.textContent;
  popupInputTypeJob.value = profileDescription.textContent;

  editProfilePopup.open();
  editFormValidation.enableValidation();
  editFormValidation.resetValidation();
})

profileAddButton.addEventListener('click', () => {
  addCardPopup.open();
  pictureFormValidation.enableValidation();
  pictureFormValidation.resetValidation();
})

profileAvatarButton.addEventListener('click', () => {
  popupWithUpdateAvatar.open();
})

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
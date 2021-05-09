 import Card from './Сard.js';
 import { initialCards } from './initial-cards.js';

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeJob = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupInfo = document.querySelector('#popupInfo');
const popupCard = document.querySelector('#popupCard');
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




function createCard(name, link) {
  const card = new Card(name, link, '.card-template');
  return card.generateCard();
};

initialCards.forEach(item => {
    cardsList.append(createCard(item.name, item.link));
});


function addCard(item) {
  const card = createCard(item.name, item.link);
  cardsList.prepend(card);
}

  const formSubmitHandlerAdd = e => { //создание карточки через попап
      e.preventDefault()
      const item = {name: popupInputTypeTitle.value, link: popupInputTypeLink.value};
      addCard(item);
      closePopup(popupTypeNewCard);
      popupInputTypeTitle.value = '';
      popupInputTypeLink.value = '';
  }

export function openImgPopup(link, name) { //открытие попапа редактирования профиля
  popupPicture.src = link;
  popupPicture.alt = name;
  popupFigcaption.textContent = name;
  openPopup(popupTypeImage);
}

function openPopup(popup) { //фукнкция открытия
    popup.classList.add('popup_active');

    document.addEventListener('keydown', closePopupEscape);
  }

function openUserPopup() {
    popupInputTypeName.value = profileName.textContent;
    popupInputTypeJob.value = profileDescription.textContent;
    openPopup(popupTypeEdit);
}

function closePopup(popup) { //функция закрытия
  popup.classList.remove('popup_active');

  document.removeEventListener('keydown', closePopupEscape);
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputTypeName.value;
    profileDescription.textContent = popupInputTypeJob.value;
    closePopup(popupTypeEdit);
}

function closePopupClick(evt, popup) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')){
    closePopup(popup);
  }
};

function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
};

popupInfo.addEventListener('submit', formSubmitHandler);
popupCard.addEventListener('submit', formSubmitHandlerAdd);
profileButtonEdit.addEventListener('click', openUserPopup);
popupCloseButton.addEventListener('click', () => closePopup(popupTypeEdit));
profileAddButton.addEventListener('click', () => openPopup(popupTypeNewCard));
closeCard.addEventListener('click', () => closePopup(popupTypeNewCard));
closeImage.addEventListener('click', () => closePopup(popupTypeImage));
popupTypeEdit.addEventListener('click', (evt) => closePopupClick(evt, popupTypeEdit));
popupTypeNewCard.addEventListener('click', (evt) => closePopupClick(evt, popupTypeNewCard));
popupTypeImage.addEventListener('click', (evt) => closePopupClick(evt, popupTypeImage));
popupTypeEdit.addEventListener('keydown', (evt) => closePopupEscape(evt, popupTypeEdit));
popupTypeNewCard.addEventListener('keydown', (evt) => closePopupEscape(evt, popupTypeNewCard));
popupTypeImage.addEventListener('keydown', (evt) => closePopupEscape(evt, popupTypeImage));



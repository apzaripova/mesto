 import Card from './card.js';
 import {initialCards} from './initial-cards.js';

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


function createCard(name, link) {
  const card = new Card(name, link, '.card-template');
  return card.generateCard();
};

initialCards.forEach(item => {
    cardsList.append(createCard(item.name, item.link));
});


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

    popup.addEventListener('keyup', closePopupEscape);
  }

function openUserPopup() {
    popupInputTypeName.value = profileName.textContent;
    popupInputTypeJob.value = profileDescription.textContent;
    openPopup(popupTypeEdit);
}

function closePopup(popup) { //функция закрытия
  popup.classList.remove('popup_active');

  popup.removeEventListener('keyup', closePopupEscape);
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

function closePopupEscape(evt, popup) {
  if (evt.key === "Escape") {
    closePopup(popup);
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






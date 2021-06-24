 import './index.css';
 import Card from '../components/Сard.js';
 import Section from '../components/Section.js';
 import { initialCards } from '../utils/constants.js';
 import FormValidator from '../components/FormValidator.js';
 import Popup from '../components/Popup.js';
 import PopupWithImage from '../components/PopupWithImage.js';
 import PopupWithForm from '../components/PopupWithForm.js';
 import UserInfo from '../components/UserInfo.js';

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
const popupInfo = document.querySelector('#profileEdit');
const popupCard = document.querySelector('#newCard');
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
const enableValidation = {
  formSelector: '.popup-form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_error_active'
};

// валидация формы

const editFormValidation = new FormValidator(enableValidation, popupInfo);
editFormValidation.enableValidation();

const pictureFormValidation = new FormValidator(enableValidation, popupCard);
pictureFormValidation.enableValidation();

function createCard(item) { // функция добавления новой карточки 
  const card = new Card(item, '.card-template', () => {
    popupPicture.src = item.link;
    popupPicture.alt = item.link;
    popupFigcaption.textContent = item.name;

    popupWithImage.open();
  });
  return card.generateCard();
};


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.append(createCard(item));
  }
}, cardsList);

cardList.renderItems();

const popupWithImage = new PopupWithImage('.popup_type_image');
popupWithImage.setEventListeners();


const userInfo = new UserInfo('.profile__name', '.profile__desctiption');

const addCardPopup = new PopupWithForm('.popup_type_new-card', (item) => {
  createCard(item);
  addCardPopup.close();
});

const editProfilePopup = new PopupWithForm('.popup_type_edit', (popupInputTypeName, popupInputTypeJob) => {
  userInfo.setUserInfo(popupInputTypeName.value, popupInputTypeJob.value);
  editProfilePopup.close();
});


profileButtonEdit.addEventListener('click', () => {
  popupInputTypeName.value = profileName.textContent;
  popupInputTypeJob.value = profileDescription.textContent;

  editProfilePopup.open();
  editFormValidation.enableValidation();
})

profileAddButton.addEventListener('click', () => {
  addCardPopup.open();
  pictureFormValidation.enableValidation();
})

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
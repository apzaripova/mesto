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
const newCard = document.querySelector('#new-card');

  const cardsList = document.querySelector('.cards__list');
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.card')

  function createCard(item) { //фукнция создания карточки
    const card = cardTemplate.cloneNode(true)

    const cardPhoto = card.querySelector('.card__photo');
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = item.name;
    cardPhoto.src = item.link;
    cardPhoto.alt = item.name;

    const cardButtonLike = card.querySelector('.card__button-like');
    cardButtonLike.addEventListener('click', () => {
        cardButtonLike.classList.toggle('card__button-like_active');
    });

    const cardButtonDelete = card.querySelector('.card__button-delete');
    cardButtonDelete.addEventListener('click', () => {
        card.remove();
    });

    cardPhoto.addEventListener('click',() => {openImgPopup(item)});

    return card;
  }

    initialCards.reverse().forEach(card => { 
      addCard(card);
    });

  function addCard(item) { //функция добавления карточки
    const card = createCard(item);
    cardsList.prepend(card);  // в начало 
}

  const formSubmitHandlerAdd = e => { //создание карточки через попап
      e.preventDefault()
      const item = {name: popupInputTypeTitle.value, link: popupInputTypeLink.value};
      addCard(item);
      closePopup(popupTypeNewCard);
      popupInputTypeTitle.value = '';
      popupInputTypeLink.value = '';
  }

function openImgPopup(item) { //открытие попапа редактирования профиля
  popupPicture.src = item.link;
  popupPicture.alt = item.name;
  popupFigcaption.textContent = item.name;
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

function closePopupClick(evt) {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')){
    closePopup(popup);
  }
};

function closePopupEscape(evt) {
  if (evt.key === "Escape") {
    closePopup(popup);
  }
}

popupInfo.addEventListener('submit', formSubmitHandler);
popupCard.addEventListener('submit', formSubmitHandlerAdd);
profileButtonEdit.addEventListener('click', openUserPopup);
popupCloseButton.addEventListener('click', () => closePopup(popupTypeEdit));
profileAddButton.addEventListener('click', () => openPopup(popupTypeNewCard));
closeCard.addEventListener('click', () => closePopup(popupTypeNewCard));
closeImage.addEventListener('click', () => closePopup(popupTypeImage));
popup.addEventListener('click', closePopupClick);







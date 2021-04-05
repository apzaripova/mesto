let popup = document.querySelector('.popup');
let popupAdd = document.querySelector('.popup-add');
let popupOpened = document.querySelector('.popup__opened');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupForm = document.querySelector('.popup__form');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileAddButtton = document.querySelector('.profile__add-button');
let cardTitle = document.querySelector('.card__title');
let cardPhoto = document.querySelector('.card__photo');
let popupInputTypeTitle = document.querySelector('.popup__input_type_title');
let popupInputTypeLink = document.querySelector('.popup__input_type_link');
let cardButtonLikeActive = document.querySelector('.card__button-like_active');
let popupCloseButtonImg = document.querySelector('.popup__close-button_img');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const cardsList = document.querySelector('.cards__list');
  const cardTemplate = document.querySelector('.card-template').content.querySelector('.card')

  function createCard(item) { //фукнция создания карточки
    const card = cardTemplate.cloneNode(true)

    const cardPhoto = card.querySelector('.card__photo');
    const cardTitle = card.querySelector('.card__title');
    cardTitle.textContent = item.name;
    cardPhoto.src = item.link;

    const cardButtonLike = card.querySelector('.card__button-like');
    cardButtonLike.addEventListener('click', () => {
        cardButtonLike.classList.toggle('card__button-like_active');
    });

    const cardButtonDelete = card.querySelector('.card__button-delete');
    cardButtonDelete.addEventListener('click', () => {
        card.remove();
    });

    const formImgClickHandler = e => {
      cardPhoto.classList.toggle('.popup-opened');
    }
    cardPhoto.addEventListener('click', formImgClickHandler);

    return card;
  }

  initialCards.forEach(card => { 
    addCard(card);
  });

  function addCard(item) { //функция добавления карточки
    const card = createCard(item);
    cardsList.append(card);  // в начало 
}

  const formSubmitHandlerAdd = e => { //создание карточки через попап
      e.preventDefault()
      const item = {name: popupInputTypeTitle.value, link: popupInputTypeLink.value};
      addCard(card);
      closePopupAdd();
  }


function openPopup() {
    popupInputTypeName.value = profileName.textContent;
    popupInputTypeJob.value = profileDescription.textContent;
    popup.classList.add('popup_active');
}

function openPopupAdd() {
    popupAdd.classList.add('popup_active');
}
function closePopup() {
    popup.classList.remove('popup_active');
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputTypeName.value;
    profileDescription.textContent = popupInputTypeJob.value;
    closePopup();
}

profileAddButtton.addEventListener('submit', formSubmitHandlerAdd);
popupForm.addEventListener('submit', formSubmitHandler);
profileButtonEdit.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
profileAddButtton.addEventListener('click', openPopupAdd);
popupCloseButtonImg.addEventListener('click', closePopupAdd);





const popupUser = document.querySelector('.popup-user');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupInfo = document.querySelector('#popupInfo');
let popupCard = document.querySelector('#popupCard');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupCloseButtonAdd = document.querySelector('.popup__close-button_add');
let popupCloseButtonImg = document.querySelector('.popup__close-button_img');
let profileAddButton = document.querySelector('.profile__add-button');
let popupInputTypeTitle = document.querySelector('.popup__input_type_title');
let popupInputTypeLink = document.querySelector('.popup__input_type_link');
let popupPicture = document.querySelector('.popup__picture');
let popupFigcaption = document.querySelector('.popup__figcaption');

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

  const reversedCards = initialCards.reverse();
  
  reversedCards.forEach(card => { 
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
      closePopup(popupAdd);
  }

function openImgPopup(item) {
  console.log(item);
  popupPicture.src = item.link;
  popupPicture.alt = item.name;
  popupFigcaption.textContent = item.name;
  openPopup(popupImage);
}

  function openPopup(popup) {
    popup.classList.add('popup_active');
  }

function openUserPopup() {
    popupInputTypeName.value = profileName.textContent;
    popupInputTypeJob.value = profileDescription.textContent;
    openPopup(popupUser);
}

function closePopup(popup) {
  popup.classList.remove('popup_active'); 
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputTypeName.value;
    profileDescription.textContent = popupInputTypeJob.value;
    closePopup(popupUser);
}

popupInfo.addEventListener('submit', formSubmitHandler);
popupCard.addEventListener('submit', formSubmitHandlerAdd);
profileButtonEdit.addEventListener('click', openUserPopup);
popupCloseButton.addEventListener('click', () => {closePopup(popupUser)});
profileAddButton.addEventListener('click', () => {openPopup(popupAdd)});
popupCloseButtonAdd.addEventListener('click', () => {closePopup(popupAdd)});
popupCloseButtonImg.addEventListener('click', () => {closePopup(popupImage)});







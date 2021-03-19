let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupCloseButton = document.querySelector('.popup__close-button');
let popupButton = document.querySelector('.popup__button');
let popupInputName = document.querySelector('.popup__input_name');
let popupInputJob = document.querySelector('.popup__input_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupForm = document.querySelector('.popup__form');

function openPopup() {
    popupInputName.value = profileName.textContent;
    popupInputJob.value = profileDescription.textContent;
    popup.classList.add('popup_active');
}

function closePopup() {
    popup.classList.remove('popup_active');
}


profileButtonEdit.addEventListener('click', openPopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputName.value;
    profileDescription.textContent = popupInputJob.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler); 

popupCloseButton.addEventListener('click', closePopup);




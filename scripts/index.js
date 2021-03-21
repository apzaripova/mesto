let popup = document.querySelector('.popup');
let profileButtonEdit = document.querySelector('.profile__button-edit');
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeJob = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupForm = document.querySelector('.popup__form');
let popupCloseButton = documnet.querySelector('.popup__close-button');

function openPopup() {
    popupInputTypeName.value = profileName.textContent;
    popupInputTypeJob.value = profileDescription.textContent;
    popup.classList.add('popup_active');
}

function closePopup() {
    popup.classList.remove('popup_active');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = popupInputTypeName.value;
    profileDescription.textContent = popupInputTypeJob.value;
    closePopup();
}

popupForm.addEventListener('submit', formSubmitHandler); 
profileButtonEdit.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);




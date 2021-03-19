let popup = document.querySelector('.popup');
let profileButton = document.querySelector('.profile__button');
let popupClose = document.querySelector('.popup__close');
let popupButton = document.querySelector('.popup__button');
let popupName = document.querySelector('.popup_name');
let popupJob = document.querySelector('.popup_job');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_active');
}

function closePopup() {
    profileName.textContent = popupName.value;
    profileDescription.textContent = popupJob.value;
    popup.classList.remove('popup_active');
}


profileButton.addEventListener('click', function(){
    popupName.value = profileName.textContent;
    popupJob.value = profileDescription.textContent;
    openPopup();
});

function formSubmitHandler (evt) {
    evt.preventDefault();
    closePopup();
}

popupButton.addEventListener('submit', formSubmitHandler); 

popupClose.addEventListener('click', closePopup);




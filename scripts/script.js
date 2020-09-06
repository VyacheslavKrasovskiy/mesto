const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.button_type_edit');
const popupCloseButton = document.querySelector('.button_type_close');
const popupSaveButton = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const loadUserData = () =>{
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

const popupOpen = (event) => {
    loadUserData();
    popup.classList.add('popup_open');
}

const popupClose = () => {
    popup.classList.remove('popup_open');
}

const formSubmit = (event) => {
    event.preventDefault();
    saveUserData();
    popupClose(event);

}

popupOpenButton.addEventListener('click', popupOpen) 
popupCloseButton.addEventListener('click', popupClose)
popupSaveButton.addEventListener('submit', formSubmit);




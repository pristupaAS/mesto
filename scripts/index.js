import { settings } from './settings.js';
import Card from './Card.js';
import { FormValidator } from './FormValidator.js';

const profileOpenButton = document.querySelector('.profile__button');
const profileCloseButton = document.querySelector('.popup__close');
const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_new-card');
export const imagePopup = document.querySelector('.popup-image');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const profileForm =  document.querySelector('.popup__form_profile');
const profileInputName = document.querySelector('.popup__input_content_name');
const profileJobInput = document.querySelector('.popup__input_content_job');
const cardAddPopup = document.querySelector('.button-add');
const cardExitPopup =  document.querySelector('.popup__close_new-card');
const imageClose = document.querySelector('.popup-image__close');
const cardInputName = document.querySelector('.popup__input_new-card_name');
const cardInputSrc = document.querySelector('.popup__input_new-card_url');
const cardForm = document.querySelector('.popup__form_new-card');
const cardContent = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content
export const imageName = document.querySelector('.popup-image__name');
export const imageScreen = document.querySelector('.popup-image__big');
const buttonCloseList = document.querySelectorAll('.popup__close');
const overlayCloselist = document.querySelectorAll('.popup');
const cardButtonNewCard = document.querySelector('.popup__button_new-card');
const popups = document.querySelectorAll('.popup');

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

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeButtonEscape)
};

 function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeButtonEscape)
};

// buttonCloseList.forEach(button => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// overlayCloselist.forEach(overlay => {
//   overlay.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('popup_opened')){closePopup(evt.target);}
// });
// });

function closeButtonEscape(event){
  if (event.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'))
  }
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

// const generateCard = (object) => {
//   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
//   const imageNameObject = cardElement.querySelector('.element__group');
//   imageNameObject.textContent = object.name;
//   const imageElement = cardElement.querySelector('.element__image');
//   imageElement.src = object.link;
//   imageElement.alt = object.name;
//   const imageOpen = cardElement.querySelector('.element__image');
//   imageOpen.addEventListener('click', () => {
//     openPopup(imagePopup);
//     imageScreen.src = object.link;
//     imageScreen.alt = object.name;
//     imageName.textContent = object.name;
//   });
//   const like = cardElement.querySelector('.element__group-like');
//   like.addEventListener('click', (event) => {
//     event.target.classList.toggle('element__group-like_active');
//   });
//   const deleteCard = cardElement.querySelector('.trash');
//   deleteCard.addEventListener('click', (event) => {
//     event.target.closest('.element').remove();
//   });
//   return cardElement;
// };

const handleCardButton = (event) => {
  event.preventDefault();
  renderCard({name: cardInputName.value, link: cardInputSrc.value});
  event.target.reset();
  cardValidation.resetValidation();
  closePopup(cardPopup);
};

function createCard(object) {
  const card = new Card(object, cardTemplate);
  const cardElement = card.getView();
  return cardElement
}

const renderCard = (object) => {
  cardContent.prepend(createCard(object));
};

initialCards.forEach((object) => {
  renderCard(object);
});

function handleProfileButton (evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileJobInput.value ;
  closePopup(profilePopup);
};

profileOpenButton.addEventListener('click', () => {
  openPopup(profilePopup);
  profileValidation.resetValidation();
  profileInputName.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});

cardAddPopup.addEventListener('click', () => {openPopup(cardPopup)});
profileForm.addEventListener('submit', handleProfileButton);
cardForm.addEventListener("submit", handleCardButton);

const profileValidation = new FormValidator(settings, profilePopup);
const cardValidation = new FormValidator(settings, cardPopup);
profileValidation.enableValidation();
cardValidation.enableValidation();

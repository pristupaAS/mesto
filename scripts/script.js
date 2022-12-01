const profileOpenButton = document.querySelector('.profile__button');
const profileCloseButton = document.querySelector('.popup__close');
const profilePopup = document.querySelector('.popup_profile');
const cardPopup = document.querySelector('.popup_new-card');
const imagePopup = document.querySelector('.popup-image');
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

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

const generateCard = (object) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const imageName = document.querySelector('.popup-image__name');
  const imageScreen = document.querySelector('.popup-image__big');
  const imageNameObject = cardElement.querySelector('.element__group');
  imageNameObject.textContent = object.name;
  const imageElement = cardElement.querySelector('.element__image');
  imageElement.src = object.link;
  imageElement.alt = object.name;
  const imageOpen = cardElement.querySelector('.element__image');
  imageOpen.addEventListener('click', () => {
    openPopup(imagePopup);
    imageScreen.src = object.link;
    imageScreen.alt = object.name;
    imageName.textContent = object.name;
  });
  const like = cardElement.querySelector('.element__group-like');
  like.addEventListener('click', (event) => {
    event.target.classList.toggle('element__group-like_active');
  });
  const deleteCard = cardElement.querySelector('.trash');
  deleteCard.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });
  return cardElement;
}

const cardSubmit = (event) => {
  event.preventDefault();
  renderCard({name: cardInputName.value, link: cardInputSrc.value});
    cardInputName.value = '';
    cardInputSrc.value = '';
    closePopup(cardPopup);
};

const renderCard = (object) => {
  cardContent.prepend(generateCard(object));
};

initialCards.forEach((object) => {
  renderCard(object);
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileJobInput.value ;
  closePopup(profilePopup);
}

profileOpenButton.addEventListener('click', () => {
  openPopup(profilePopup);
  profileInputName.value = profileName.textContent;
  profileJobInput.value = profileJob.textContent;
});
profileCloseButton.addEventListener('click', () => {closePopup(profilePopup)});
cardAddPopup.addEventListener('click', () => {openPopup(cardPopup)});
cardExitPopup.addEventListener('click', () => {closePopup(cardPopup)});
imageClose.addEventListener('click', () => {closePopup(imagePopup)});
profileForm.addEventListener('submit', formSubmitHandler);
cardForm.addEventListener("submit", cardSubmit);

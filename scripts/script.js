const openButton = document.querySelector('.profile__button');
const closeButton = document.querySelector('.popup__close');
const popen = document.querySelector('.popup');
const profName = document.querySelector('.profile__name');
const profJob = document.querySelector('.profile__job');
const formElement =  document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_content_name');
const jobInput = document.querySelector('.popup__input_content_job');
const cardOpen = document.querySelector('.button-add');
const cardMake = document.querySelector('.popup_new-card');
const cardExit =  document.querySelector('.popup__close_new-card');
const popupImage = document.querySelector('.popup-image');
const cardBack = document.querySelector('.popup-image__close');

function cardClose() {
  cardMake.classList.remove('popup_opened');
}

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

const formCard = document.querySelector('.popup__form_new-card');
const mainContent = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

const generateCard = (object) => {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const nameImage = document.querySelector('.popup-image__name');
  const imageBig = document.querySelector('.popup-image__big')
  const nameObj = cardElement.querySelector('.element__group');
  nameObj.textContent = object.name;
  const image = cardElement.querySelector('.element__image');
  image.src = object.link;
  const imageOpen = cardElement.querySelector('.element__image');
  imageOpen.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    imageBig.src = object.link;
    nameImage.textContent = object.name;
  });
  const like = cardElement.querySelector('.element__group-like');
  like.addEventListener('click', (event) => {
    event.target.closest('.element__group-like').classList.toggle('element__group-like_active');
  });
  const deleteCard = cardElement.querySelector('.trash');
  deleteCard.addEventListener('click', (event) => {
    event.target.closest('.element').remove();
  });
  return cardElement;
}

const cardSubmit = (event) => {
  event.preventDefault();
  const inputName = document.querySelector('.popup__input_new-card_name');
  const inputSrc = document.querySelector('.popup__input_new-card_url');
  if ((inputName.value === '') || (inputSrc.value === '')) {
    inputName.value = '';
    inputSrc.value = '';
    cardClose();
  } else { renderCard({name: inputName.value, link: inputSrc.value});
    inputName.value = '';
    inputSrc.value = '';
  cardClose();}
  cardClose();
};

const renderCard = (object) => {
  mainContent.prepend(generateCard(object));
};

initialCards.forEach((object) => {
  renderCard(object);
});



function open() {
  popen.classList.add('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = profJob.textContent;
}

function close() {
  popen.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profName.textContent = nameInput.value;
  profJob.textContent = jobInput.value ;
  close();
}

openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
cardOpen.addEventListener('click', () => {
  cardMake.classList.add('popup_opened');
});
cardExit.addEventListener('click', cardClose);
cardBack.addEventListener('click', () => {
  popupImage.classList.remove('popup_opened')});

formElement.addEventListener('submit', formSubmitHandler);
formCard.addEventListener("submit", cardSubmit);

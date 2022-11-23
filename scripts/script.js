let openButton = document.querySelector('.profile__button');
let closeButton = document.querySelector('.popup__close');
let popen = document.querySelector('.popup');
let profName = document.querySelector('.profile__name');
let profJob = document.querySelector('.profile__job');
let formElement =  document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_content_name');
let jobInput = document.querySelector('.popup__input_content_job');

let cardOpen = document.querySelector('.button-add');
let cardMake = document.querySelector('.popup__new-card');
let cardExit =  document.querySelector('.popup__close_new-card');
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

function cardopen() {
  cardMake.classList.add('popup_opened');
}

function cardclose() {
  cardMake.classList.remove('popup_opened');
}





























function open() {
  popen.classList.add('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = profJob.textContent;
}

function close() {
  popen.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                              // Так мы можем определить свою логику отправки.
                                              // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Вставьте новые значения с помощью textContent
  profName.textContent = nameInput.value;
  profJob.textContent = jobInput.value ;
  close();
}

openButton.addEventListener('click', open);
closeButton.addEventListener('click', close);
cardOpen.addEventListener('click', cardopen);
cardExit.addEventListener('click', cardclose);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

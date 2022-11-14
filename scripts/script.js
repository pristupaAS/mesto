let openButton = document.querySelector('.profile__button');
let closeButton = document.querySelector('.popup__close');
let popen = document.querySelector('.popup');
let profName = document.querySelector('.profile__name');
let profJob = document.querySelector('.profile__job');
let formElement =  document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_content_name');
let jobInput = document.querySelector('.popup__input_content_job');

function open() {
  popen.classList.add('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = profJob.textContent;
}

function close() {
  popen.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
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
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

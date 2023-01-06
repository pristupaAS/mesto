import { openPopup, imagePopup, imageScreen, imageName } from "./index.js";

class Card {
  constructor({ name, link }, cardTemplate) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate

  }

  _getTemplateCard() {
    const card = this._cardTemplate.querySelector(".element").cloneNode(true);
    return card;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("element__group-like_active");
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleOpenImage() {
    openPopup(imagePopup);
    imageScreen.src = this._link;
    imageScreen.alt = this._name;
    imageName.textContent = this._name;
  }

  _setEventListeners() {
    this._deleteCard = this._newCard.querySelector(".trash");
    this._deleteCard.addEventListener("click", () => this._handleDeleteCard());

    this._cardImage = this._newCard.querySelector(".element__image");
    this._cardImage.addEventListener("click", () => this._handleOpenImage());

    this._likeButton = this._newCard.querySelector(".element__group-like");
    this._likeButton.addEventListener("click", () => this._handleLikeCard());
  }

  _setData() {
    const title = this._newCard.querySelector(".element__group");
    title.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;

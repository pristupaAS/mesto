import { openPopup, imagePopup, imageScreen, imageName } from "./index.js";

class Card {
  constructor({ name, link }) {
    this._name = name;
    this._link = link;
  }

  _getTemplateCard() {
    const card = document.querySelector("#card").content.querySelector(".element").cloneNode(true);
    return card;
  }

  _handleLikeCard() {
    const laik = this._newCard.querySelector(".element__group-like");
    laik.classList.toggle("element__group-like_active");
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleOpenImage() {
    openPopup(imagePopup);
    imageScreen.src = this._link;
    imageScreen.alt = this._name;
    imageName.textContent = imageScreen.alt;
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector(".trash");
    deleteCard.addEventListener("click", () => this._handleDeleteCard());

    const openImage = this._newCard.querySelector(".element__image");
    openImage.addEventListener("click", () => this._handleOpenImage());

    const likeButton = this._newCard.querySelector(".element__group-like");
    likeButton.addEventListener("click", () => this._handleLikeCard());
  }

  _setData() {
    const title = this._newCard.querySelector(".element__group");
    title.textContent = this._name;
    const nameLink = this._newCard.querySelector(".element__image");
    nameLink.src = this._link;
  }

  getView() {
    this._newCard = this._getTemplateCard();
    this._setEventListeners();
    this._setData();

    return this._newCard;
  }
}

export default Card;

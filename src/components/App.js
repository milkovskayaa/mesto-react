import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(cardData) {
    setImagePopupOpen(true);
    setSelectedCard(cardData);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <ImagePopup
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen}
        card={selectedCard}
      />
      {/* попап редактирования профиля */}
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name={"edit-profile"}
        title={"Редактировать профиль"}
        buttonText={"Сохранить"}
        onClose={closeAllPopups}
      >
        <input
          id="username"
          type="text"
          name="username"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          required
          placeholder="Введите имя"
        />
        <span className="error-username error-message"></span>
        <input
          id="job"
          type="text"
          name="job"
          className="popup__input popup__input_type_about"
          minLength="2"
          maxLength="200"
          required
          placeholder="Укажите свой род деятельности"
        />
        <span className="error-job error-message"></span>
      </PopupWithForm>
      {/* попап добавления карточки */}
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name={"add-card"}
        title={"Новое место"}
        buttonText={"Создать"}
        onClose={closeAllPopups}
      >
        <input
          id="cardname"
          type="text"
          name="cardname"
          className="popup__input popup__input_type_card-name"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          required
        />
        <span className="error-cardname error-message"></span>
        <input
          id="cardlink"
          type="url"
          name="link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="error-cardlink error-message"></span>
      </PopupWithForm>
      {/* попап обновления аватара */}
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={"update-avatar"}
        title={"Обновить аватар"}
        buttonText={"Сохранить"}
        onClose={closeAllPopups}
      >
        <input
          id="avatar"
          type="url"
          name="avatar"
          className="popup__input popup__input_type_link"
          required
          placeholder="Ссылка на изображение"
        />
        <span className="error-avatar error-message"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;

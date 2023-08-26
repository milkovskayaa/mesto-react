import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {

  const[isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const[isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const[isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="root">
      <div className="page">
        <Header/>
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer/>
      </div>
      <ImagePopup/>
      {/* попап редактирования профиля */}
      <PopupWithForm isOpen={isEditProfilePopupOpen} name={'edit-profile'} title={'Редактировать профиль'} buttonText={'Сохранить'} onClose={closeAllPopups}>
        <input id="username"  type="text" name="username" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required placeholder="Введите имя"/>
        <span className="error-username error-message"></span>
        <input id="job" type="text" name="job" className="popup__input popup__input_type_about" minLength="2" maxLength="200" required placeholder="Укажите свой род деятельности"/>
        <span className="error-job error-message"></span>
      </PopupWithForm>
    {/* попап добавления карточки */}
      <PopupWithForm isOpen={isAddPlacePopupOpen} name={'add-card'} title={'Новое место'} buttonText={'Создать'} onClose={closeAllPopups}>
        <input id="cardname" type="text" name="cardname" className="popup__input popup__input_type_card-name" minLength="2" maxLength="30" placeholder="Название" required/>
        <span className="error-cardname error-message"></span>
        <input id="cardlink" type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required/>
        <span className="error-cardlink error-message"></span>
      </PopupWithForm>
    {/* попап обновления аватара */}
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name={'update-avatar'} title={'Обновить аватар'} buttonText={'Сохранить'} onClose={closeAllPopups}>
        <input id="avatar" type="url" name="avatar" className="popup__input popup__input_type_link" required placeholder="Ссылка на изображение"/>
        <span className="error-avatar error-message"></span>
      </PopupWithForm>
 
    {/* попап удаления карточки */}
    <div className="popup popup_confirm">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" value="Да" className="popup__submit popup__submit_type_confirm" aria-label="Подтвердить">Да</button>
      </div>
    </div>    
    {/* темплейт карточки */}
    <template id="template-card" className="card-template">
      <div className="elements__item">
        <img src="#" alt="" className="elements__img"/>
        <div className="elements__about">
          <h2 className="elements__name"></h2>
          <div className="elements__like-group">
            <button className="elements__like" type="button" aria-label="Лайк"></button>
            <p className="elements__like-count">0</p>
          </div>
          <button className="elements__delete" type="button" aria-label="Удалить"></button>
        </div>
      </div>
    </template>
    </div>
  );
}


export default App;

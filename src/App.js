import headerLogo from './images/logo.svg';

function App() {
  return (
    <div className="root">
    <div className="page">
      <header className="header">
        <img src={headerLogo} alt="Логотип" className="header__logo"/>
      </header>
      <main className="content">
        <section className="profile">
          <div type="button" className="profile__overlay-img">
            <img src="#" alt="Фотография профиля" className="profile__img"/>
         </div>
          <div className="profile__info">
            <div className="profile__info-user">
              <h1 className="profile__username"></h1>
              <p className="profile__about"></p>
            </div>
            <button className="profile__button profile__button_type_edit" type="button" aria-label="Редактировать"></button>
          </div>
          <button className="profile__button profile__button_type_add" type="button" aria-label="Добавить"></button>
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      </footer>
    </div>
    {/* попап редактирования профиля */}
    <div className="popup popup_edit-profile">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_type_edit" name="form-profile" noValidate>
          <input id="username"  type="text" name="username" className="popup__input popup__input_type_name" minLength="2" maxLength="40" required placeholder="Введите имя"/>
          <span className="error-username error-message"></span>
          <input id="job" type="text" name="job" className="popup__input popup__input_type_about" minLength="2" maxLength="200" required placeholder="Укажите свой род деятельности"/>
          <span className="error-job error-message"></span>
          <button type="submit" value="Сохранить" className="popup__submit popup__submit_type_edit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </div>
    {/* попап добавления карточки */}
    <div className="popup popup_add-card">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form popup__form_type_add" name="form-card" noValidate>
          <input id="cardname" type="text" name="cardname" className="popup__input popup__input_type_card-name" minLength="2" maxLength="30" placeholder="Название" required/>
          <span className="error-cardname error-message"></span>
          <input id="cardlink" type="url" name="link" className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required/>
          <span className="error-cardlink error-message"></span>
          <button type="submit" value="Создать" className="popup__submit popup__submit_type_add" aria-label="Сохранить">Создать</button>
        </form>
      </div>
    </div>
    {/* попап удаления карточки */}
    <div className="popup popup_confirm">
      <div className="popup__container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" value="Да" className="popup__submit popup__submit_type_confirm" aria-label="Подтвердить">Да</button>
      </div>
    </div>
    {/* попап просмотра фотографий */}
    <div className="popup popup_card-image">
      <div className="popup__image-container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <img role="button" src="" alt="" className="popup__image"/>
        <p className="popup__image-name">Байкал</p>
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

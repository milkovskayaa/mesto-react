import React from 'react';
function Main({onEditProfile, onAddPlace, onEditAvatar}) {

  return(
    <main className="content">
        <section className="profile">
          <div type="button" className="profile__overlay-img" onClick={onEditAvatar}>
            <img src="#" alt="Фотография профиля" className="profile__img"/>
         </div>
          <div className="profile__info">
            <div className="profile__info-user">
              <h1 className="profile__username"></h1>
              <p className="profile__about"></p>
            </div>
            <button className="profile__button profile__button_type_edit" onClick={onEditProfile} type="button" aria-label="Редактировать"></button>
          </div>
          <button className="profile__button profile__button_type_add" onClick={onAddPlace} type="button" aria-label="Добавить"></button>
        </section>
        <section className="elements"></section>
      </main>
  )
};

export default Main;
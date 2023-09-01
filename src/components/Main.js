import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInfoProfile()
      .then((userData) => {
        const userName = userData.name;
        const userDescription = userData.about;
        const userAvatar = userData.avatar;
        setUserName(userName);
        setUserDescription(userDescription);
        setUserAvatar(userAvatar);
      })
      .catch(console.error);
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__overlay-img"
          onClick={onEditAvatar}
        >
          <img
            src={userAvatar}
            alt="Фотография профиля"
            className="profile__img"
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-user">
            <h1 className="profile__username">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button
            className="profile__button profile__button_type_edit"
            onClick={onEditProfile}
            type="button"
            aria-label="Редактировать"
          ></button>
        </div>
        <button
          className="profile__button profile__button_type_add"
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить"
        ></button>
      </section>
      <section className="elements">
        {cards.map((item) => (
          <Card key={item._id} onCardClick={onCardClick} {...item} />
        ))}
      </section>
    </main>
  );
}

export default Main;

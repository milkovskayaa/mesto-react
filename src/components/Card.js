import React from "react";

function Card({onCardClick, ...props}) {

  function handleClick() {
    onCardClick(props);
  }  

  return(
    <div className="elements__item">
    <img src={props.link} alt={props.name} className="elements__img" onClick={handleClick}/>
    <div className="elements__about">
      <h2 className="elements__name">{props.name}</h2>
      <div className="elements__like-group">
        <button className="elements__like" type="button" aria-label="Лайк"></button>
        <p className="elements__like-count">{props.likes.length}</p>
      </div>
      <button className="elements__delete" type="button" aria-label="Удалить"></button>
    </div>
  </div>
  )
};

export default Card;
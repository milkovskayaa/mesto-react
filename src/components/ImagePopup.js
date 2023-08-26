import React from 'react';
function ImagePopup() {
  return(
    <div className="popup popup_card-image">
      <div className="popup__image-container">
        <button className="popup__button-close" aria-label="Закрыть" type="button"></button>
        <img role="button" src="" alt="" className="popup__image"/>
        <p className="popup__image-name">Байкал</p>
      </div>
    </div>
  )
};

export default ImagePopup;
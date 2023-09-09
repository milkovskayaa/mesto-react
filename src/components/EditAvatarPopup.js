import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose}) {

  return(
    <PopupWithForm isOpen={isOpen} name={"update-avatar"} title={"Обновить аватар"} buttonText={"Сохранить"} onClose={onClose}>
      <input id="avatar" type="url" name="avatar" className="popup__input popup__input_type_link" required placeholder="Ссылка на изображение"/>
      <span className="error-avatar error-message"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
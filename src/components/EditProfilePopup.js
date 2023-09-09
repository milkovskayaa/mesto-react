import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      isOpen={isOpen} onClose={onClose}
      name={"edit-profile"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
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
  );
}

export default EditProfilePopup;

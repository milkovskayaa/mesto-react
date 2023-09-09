import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const avatarRef = React.useRef();

  function handleAvatarChange(e) {
    avatarRef.value = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name={"update-avatar"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      onClose={onClose}
    >
      <input
        id="avatar"
        ref={avatarRef}
        onChange={handleAvatarChange}
        type="url"
        name="avatar"
        className="popup__input popup__input_type_link"
        required
        placeholder="Ссылка на изображение"
      />
      <span className="error-avatar error-message"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

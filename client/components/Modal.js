import React, { useState } from "react";

const Modal = ({
  id,
  name,
  username,
  email,
  phone,
  onClose,
  contacts,
  setContacts,
}) => {
  const [newName, setNewName] = useState(name);
  const [newUserName, setNewUserName] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);

  const onChangeName = (e) => {
    setNewName(e.target.value);
  };
  const onChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setNewPhone(e.target.value);
  };

  const saveChanges = () => {
    const currentUser = contacts.find((it) => it.id === id);
    currentUser.name = newName
    currentUser.username = newUserName;
    currentUser.email = newEmail;
    currentUser.phone = newPhone;
    setContacts([...contacts])
    localStorage.setItem("contacts", JSON.stringify(contacts));
    onClose(false);
  };
  return (
    <div className="modal__content">
      <div>
        <input className="contacts__input contacts__input-margin" type="text" value={newName} onChange={onChangeName} />
      </div>
      <div>
        <input className="contacts__input contacts__input-margin" type="text" value={newUserName} onChange={onChangeUserName} />
      </div>
      <div>
        <input className="contacts__input contacts__input-margin" type="text" value={newEmail} onChange={onChangeEmail} />
      </div>
      <div>
        <input className="contacts__input contacts__input-margin" type="text" value={newPhone} onChange={onChangePhone} />
      </div>
      <button className="contacts__btn" type="button" onClick={saveChanges}>
        save
      </button>
    </div>
  );
};

export default Modal;

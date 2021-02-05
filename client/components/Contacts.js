import React, { useState } from "react";
import Modal from "./Modal"

const Contacts = ({
  id,
  name,
  username,
  email,
  phone,
  contacts,
  setContacts,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const handlerOpenModal = () => {
    setModalActive(true);
  };
  const handlerCloseModal = () => {
    setModalActive(false);
  };
  return (
    <div className="contact">
      {modalActive ? (
        <Modal
          active={modalActive}
          onClose={handlerCloseModal}
          id={id}
          name={name}
          username={username}
          email={email}
          phone={phone}
          contacts={contacts}
          setContacts={setContacts}
        />
      ) : (
        <>
          <div className="contact__name contact__field">{name}</div>
          <div className="contact__username contact__field">{username}</div>
          <div className="contact__email contact__field">{email}</div>
          <div className="contact__phone contact__field">{phone}</div>
          <button
            className="contacts__btn"
            type="button"
            onClick={handlerOpenModal}
          >
            edit
          </button>
        </>
      )}
    </div>
  );
};

export default Contacts;

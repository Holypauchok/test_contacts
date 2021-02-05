import React, { useState, useEffect } from "react";
import axios from "axios";
import Contacts from "../components/Contacts";
import Sort from "../components/Sort";
import SearchInput from "../components/SearchInput";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios("http://demo.sibers.com/users").then(({ data: users }) => {
      setContacts(users);
      localStorage.setItem("contacts", JSON.stringify(users));
    });
  }, []);

  return (
    <div className="contacts">
      <div className="contacts__title">Contacts</div>
      <div className="contacts__menu">
        <Sort contacts={contacts} setContacts={setContacts} />
        <SearchInput contacts={contacts} setContacts={setContacts} />
      </div>
      <div className="contacts__item">
        {contacts.map((cont) => (
          <Contacts
            contacts={contacts}
            setContacts={setContacts}
            key={cont.id}
            {...cont}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;

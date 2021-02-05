import React, { useState } from 'react'

const SearchInput = ({ setContacts }) => {
  const [searchInput, setSearchInput] = useState("");
  const onChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const onSearch = () => {
    setContacts([
      ...contacts.filter((it) => it.name.indexOf(searchInput ? searchInput[0].toUpperCase() + searchInput.slice(1) : searchInput) >= 0),
    ]);
  };

  return (
    <div>
      <input className="contacts__input" type="text" value={searchInput} onChange={onChangeInput} />
      <button className="search__button" type="button" onClick={onSearch} />
    </div>
  );
};

export default SearchInput

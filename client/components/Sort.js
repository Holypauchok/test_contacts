import React from 'react'

const Sort = ({ contacts, setContacts }) => {
  const onSortName = () => {
    contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    setContacts([...contacts]);
  };
  return (
    <div className="contacts__sort">
      <button type="button" className="contacts__btn" onClick={onSortName}>
        Sort By Name
      </button>
    </div>
  );
};

export default Sort

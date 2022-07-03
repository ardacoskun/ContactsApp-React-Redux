import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../store/contactsSlice";
import Item from "./Item";
const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <ul className="list">
      {contacts.length > 0 &&
        contacts.map((contact) => <Item key={contact.id} contact={contact} />)}
    </ul>
  );
};

export default List;

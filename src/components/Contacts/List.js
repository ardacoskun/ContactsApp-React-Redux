import React from "react";
import { useSelector } from "react-redux";
import { contactSelectors, deleteAllContacts } from "../../store/contactsSlice";
import { useDispatch } from "react-redux";
import Item from "./Item";

const List = () => {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure want to delete all your contacts ? ")) {
      dispatch(deleteAllContacts());
    }
  };

  return (
    <div>
      {total > 0 && (
        <div className="deleteAllBtn" onClick={handleDeleteAll}>
          Delete All
        </div>
      )}
      <ul className="list">
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <Item key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default List;

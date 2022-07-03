import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../store/contactsSlice";

const Item = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete this contact ?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phoneNumber}</span>
      <div className="edit">
        <span>
          <Link to={`/edit/${contact.id}`}>Edit</Link>
        </span>
        <span className="deleteBtn" onClick={() => handleDelete(contact.id)}>
          x
        </span>
      </div>
    </li>
  );
};

export default Item;

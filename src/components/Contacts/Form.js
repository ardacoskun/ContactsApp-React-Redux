import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../../store/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return false;

    //Add Multiple Contacts
    // const names = name.split(",");
    // const data = names.map((name) => ({ id: nanoid(), name }));
    // dispatch(addContacts(data));

    dispatch(addContact({ id: nanoid(), name }));
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </form>
    </div>
  );
};

export default Form;

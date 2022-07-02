import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    //Add Multiple Contacts
    // const names = name.split(",");
    // const data = names.map((name) => ({ id: nanoid(), name }));
    // dispatch(addContacts(data));

    dispatch(addContact({ id: nanoid(), name, phoneNumber: number }));
    setName("");
    setNumber("");
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
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;

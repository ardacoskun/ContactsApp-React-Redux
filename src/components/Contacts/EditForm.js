import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateContact } from "../../store/contactsSlice";

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phoneNumber);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !number) return false;

    dispatch(
      updateContact({
        id: contact.id,
        changes: {
          name,
          phoneNumber: number,
        },
      })
    );

    navigate("/");
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
        <div className="btn">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

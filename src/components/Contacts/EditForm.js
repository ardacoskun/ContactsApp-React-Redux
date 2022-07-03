import React, { useState } from "react";

const EditForm = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phoneNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

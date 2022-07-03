import React from "react";

const Item = ({ contact }) => {
  return (
    <li>
      <span>{contact.name}</span>
      <span>{contact.phoneNumber}</span>
    </li>
  );
};

export default Item;

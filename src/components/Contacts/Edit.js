import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import EditForm from "./EditForm";
import { useSelector } from "react-redux";
import { contactSelectors } from "../../store/contactsSlice";

const Edit = () => {
  const { id } = useParams();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  if (!contact) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Edit</h1>
      <div className="editHomeBtn">
        <Link to="/">Back to Contacts</Link>
      </div>
      <EditForm contact={contact} />
    </div>
  );
};

export default Edit;

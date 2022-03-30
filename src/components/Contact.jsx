import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import ViewContact from "./ViewContact";
import "./adressbook.css";

const Contact = ({ contact, contact: { firstName, lastName, methods } }) => {
  const [viewingContact, setViewingContact] = useState(false);

  return (
    <li className="contact-li">
      {firstName} {lastName}, {methods[0].name}: {methods[0].value}
      <button
        className="icon-btn"
        onClick={() => setViewingContact(!viewingContact)}
      >
        {viewingContact ? (
          <FontAwesomeIcon icon={faSearchMinus} />
        ) : (
          <FontAwesomeIcon icon={faSearchPlus} />
        )}
      </button>
      {viewingContact ? (
        <ViewContact contact={contact} viewing={setViewingContact} />
      ) : null}
    </li>
  );
};

export default Contact;

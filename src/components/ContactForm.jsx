import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const saveContact = () => {
	  console.log("length: ",firstName.length);
    if (firstName.length > 0) {
      const newContact = {
        id: props.contactId,
        firstName: firstName,
        lastName: lastName,
        methods: [
          { id: 0, name: "phone", value: phone },
          { id: 1, name: "mail", value: mail },
        ],
      };
      props.nextId(props.contactId + 1);
      props.set(props.contacts.concat(newContact));
    }
    props.setIsAdding(false);
  };
  return (
    <div className="contact-form">
      <h3>Add Contact</h3>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <h4>Methods:</h4>
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Mail:
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <div className="contact-form-buttons">
        <button onClick={saveContact}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </button>
        <button onClick={() => props.setIsAdding(false)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

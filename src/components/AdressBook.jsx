import React, { useState } from "react";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import "./adressbook.css";

function AdressBook(props) {
  const [contacts, setContacts] = useState(props.contacts);
  const[isAdding,setIsAdding] = useState(false);
  const[idCounter,setIdCounter] = useState(findHighestId(props.contacts));

  function findHighestId(contacts) {
    let highestId = 0;
    contacts.forEach((contact) => {
      if (contact.id > highestId) {
        highestId = contact.id;
      }
    });
    return highestId;
  }
  return (
    <section className="contacts-container">
	<header className="adress-header">
      <h1>Contacts</h1>
	  <button onClick={()=>{setIsAdding(!isAdding)}}>{isAdding?"Cancel":"Add Contact"}</button>
	</header>
      <ul>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} setContacts={setContacts}/>
        ))}
      </ul>
	  {isAdding ? <ContactForm contacts={contacts} set={setContacts} setIsAdding={setIsAdding} contactId={idCounter} nextId={setIdCounter}/> : null}
    </section>
  );
}

export default AdressBook;

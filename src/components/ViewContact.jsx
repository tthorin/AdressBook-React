import { useState } from "react";

const ViewContact = ({ contact, viewing }) => {
  const [edited, setEdited] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [localFirst, setLocalFirst] = useState(contact.firstName);
  const [localLast, setLocalLast] = useState(contact.lastName);
  const [localContact, setLocalContact] = useState(contact);

  const inputLostFocus = (value, local) => {
    if (value !== local) setEdited(true);
    setEditItem("");
    console.log("local:", localContact.firstName, "prop:", contact.firstName,"edited:", edited);
  };

  const stuff = [];
  Object.keys(localContact).map((key, i) => {
    if (key !== "id")
      if (key === "methods") {
        localContact[key].map((method, j) => {
          stuff.push(
            <p key={String(localContact.id) + i + j} onClick={()=>setEditItem(method.name)}>
              {method.name}: {method.value}
            </p>
          );
        });
      } else {
        stuff.push(
          <p key={String(localContact.id) + i} onClick={()=>setEditItem(key)}>
            {key}: {localContact[key]}
          </p>
        );
      }
  });

  const stuff2 = [];
  Object.keys(localContact).map((key, i) => {
    if (key !== "id")
      if (key === "methods") {
        localContact[key].map((method, j) => {
          stuff2.push(
            <input key={String(localContact.id) + i + j} onBlur={(e) =>
				inputLostFocus(e.target.value, localContact[key][j].value)
			  }
            type="text"
            value={localContact[key][j]["value"]}
            onChange={(e) =>
              setLocalContact({ ...localContact, [method.value]: e.target.value })
            }/>
          );
        });
      } else {
        stuff2.push(
            <input key={String(localContact.id) + i} onBlur={(e) =>
				inputLostFocus(e.target.value, localContact[key].value)
			  }
            type="text"
            value={localContact[key]}
            onChange={(e) =>
              setLocalContact({ ...localContact, [key]: e.target.value })
            }/>
          );
      }
  });

  return (
    <div className="contact-details">
      {/* <header> */}
        {/* {editItem === "firstName" ? (
          <input
            onBlur={(e) =>
              inputLostFocus(e.target.value, localContact.firstName)
            }
            type="text"
            value={localContact.firstName}
            onChange={(e) =>
              setLocalContact({ ...localContact, firstName: e.target.value })
            }
          />
        ) : (
          <h3 onClick={() => setEditItem("firstName")}>
            {localContact.firstName}
          </h3>
        )}
        {editItem === "lastName" ? (
          <input
            onBlur={(e) => inputLostFocus(e.target.value, localLast)}
            type="text"
            value={localLast}
            onChange={(e) => setLocalLast(e.target.value)}
          />
        ) : (
          <h3 onClick={() => setEditItem("lastName")}>{localLast}</h3>
        )}
      </header>
      <ul>
        {contact.methods.map((method) => (
          <li key={method.id}>
            {method.name}: {method.value}
          </li>
        ))}
      </ul> */}
      {/* <button onClick={() => viewing(false)}>Close</button> */}
      {editItem === "firstName" ? stuff2[0] : stuff[0]}
	  {editItem === "lastName" ? stuff2[1] : stuff[1]}
	  {editItem === "phone" ? stuff2[2] : stuff[2]}
	  {editItem === "mail" ? stuff2[3] : stuff[3]}
    </div>
  );
};

export default ViewContact;

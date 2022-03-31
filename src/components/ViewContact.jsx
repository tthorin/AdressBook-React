import { useState } from "react";

const ViewContact = ({ contact, update }) => {
  const [edited, setEdited] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [localContact, setLocalContact] = useState({...contact});

  const inputLostFocus = (local, fromProp) => {
    console.log(typeof updateContact);
    if (local !== fromProp) update(localContact);
    setEditItem("");   
  };

  const prettify = (str) =>{
    let output = str
    if(output.match(/[A-Z]/)){
      output = output.replace(/([A-Z])/g, " $1".toLowerCase());
    }
    output = output.substring(0,1).toUpperCase() + output.substring(1);
    return output;
  }

  const changeMethodValue = (e,i) => {
    let newMethods = [...localContact.methods];
    newMethods[i].value = e.target.value;
    setLocalContact({...localContact, methods: newMethods});  
  }

  return (
    <div className="contact-details">
      {editItem !== "firstName"
      ?<p onClick={()=>setEditItem("firstName")}>First name: {localContact.firstName}</p>
      :<input type="text" onBlur={(e)=>inputLostFocus(e.target.value,contact.firstName)}
         value={localContact.firstName}
          onChange={(e)=>setLocalContact({...localContact,firstName:e.target.value})}/>}
      {editItem !== "lastName"
      ?<p onClick={()=>setEditItem("lastName")}>Last name: {localContact.lastName}</p>
      :<input type="text" onBlur={(e)=>inputLostFocus(e.target.value,contact.firstName)}
         value={localContact.lastName}
          onChange={(e)=>setLocalContact({...localContact,lastName:e.target.value})}/>}
      {localContact.methods.map((method, i) => 
        (editItem !== method.id
      ?<p key={"p"+method.id} onClick={()=>setEditItem(method.id)}>{prettify(method.name)}: {method.value}</p>
      :<input key={"i"+method.id} type="text" onBlur={(e)=>inputLostFocus(e.target.value,contact.methods[i].value)}
         value={localContact.methods[i].value} onChange={(e)=>changeMethodValue(e,i)}/>)
      )}
    </div>
  );
};

export default ViewContact;

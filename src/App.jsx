import { useState } from "react";
import AdressBook from "./components/AdressBook";
import "./App.css";

let contacts = [
  {
    id: 0,
    firstName: "Pelle",
    lastName: "Plutt",
    methods: [
		{id:0,name: "phone", value: "0701234567"},
		{id:1,name: "mail", value: "pelle.plutt@mail.com"}
	]
  },
  {
    id: 1,
    firstName: "Petra",
    lastName: "Plutt",
    methods: [
		{id:0,name: "phone", value: "0701345678"},
		{id:1,name: "mail", value: "petra.plutt@mail.com"}
	]
  },
];

function App() {
  return <div className="app">
	  <AdressBook contacts={contacts} />
  </div>;
}

export default App;

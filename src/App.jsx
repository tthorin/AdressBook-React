import AdressBook from "./components/AdressBook";
import TimerDock from "./components/TimerDock";
import { contacts } from "./data/contacts";
import "./App.css";



function App() {
  return <div className="app">
    <TimerDock />
	  <AdressBook contacts={contacts} />
  </div>;
}

export default App;

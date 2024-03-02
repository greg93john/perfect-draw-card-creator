import { useState } from 'react';
import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [tabName, setTabName] = useState("Deck");

  const [deckData, setDeckData] = useState(
    {
      warriors: {
        id: 0,
        cards:
        {
          
        }
      },

      items: {
        id: 1,
        cards:
        {
          
        }
      },

      invocations: {
        id: 2,
        cards:
        {
          
        }
      }
    }
  );

  function ChangeTabTo(varName) {
    setTabName(varName);
  }

  function UpdateDeckData(key, val) {
    setDeckData({ ...deckData, [key]: val });
  }

  return (
    <div className="page-container">
      <NavBar activeTabName={tabName} buttonFunction={ChangeTabTo} />
      <MainView deckData={deckData} updateDeckData={UpdateDeckData} tabName={tabName} />
      <Footer />
    </div>
  );
}

export default App;

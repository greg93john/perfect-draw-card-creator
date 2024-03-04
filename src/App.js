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

  function ExportDeckData() {
    let _deckData = deckData;
    
    // Convert object to JSON string
    const jsonData = JSON.stringify(_deckData, null, "\t"); // The second argument (null) is for replacer function, and the third argument ("\t") is for indentation

    // Create a new Blob object with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the href attribute of the link to the Blob object
    downloadLink.href = URL.createObjectURL(blob);

    // Set the download attribute and file name with custom extension
    downloadLink.download = 'save.perf';

    // Append the link to the document body and trigger the click event
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Remove the link from the document body
    document.body.removeChild(downloadLink);
  }

  function ImportDeckData(importVal) {

  }

  function UpdateDeckData(key, val) {
    setDeckData({ ...deckData, [key]: val });
  }

  return (
    <div className="page-container">
      <NavBar activeTabName={tabName} buttonFunction={ChangeTabTo} saveDeckData={ExportDeckData} />
      <MainView deckData={deckData} updateDeckData={UpdateDeckData} tabName={tabName} />
      <Footer />
    </div>
  );
}

export default App;

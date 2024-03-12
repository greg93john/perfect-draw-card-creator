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
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'save.perf';
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  }

  function GetNumberOfCards() {
    const num = Object.keys(deckData.warriors.cards).length + Object.keys(deckData.items.cards).length + Object.keys(deckData.invocations.cards).length;
    return num;
  }

  function ImportDeckData(importVal) {
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      const importedData = JSON.parse(event.target.result);
      let isCompatible = true;


      const originalKeys = Object.keys(deckData);
      const importKeys = Object.keys(importedData);

      if (originalKeys.length !== importKeys.length) {
        isCompatible = false;
      } else {
        let totalNumOfCards = 0;
        originalKeys.map((_type) => {
          if (deckData[_type].id !== importedData[_type].id || !importedData[_type].hasOwnProperty('cards')) {
            isCompatible = false;
          }
          const _importedCards = Object.keys(importedData[_type].cards);
          totalNumOfCards += _importedCards.length;
        });
        if (totalNumOfCards < 0 || totalNumOfCards > 8) {
          isCompatible = false;
        }
      }

      if (isCompatible) {
        setDeckData(importedData);
      } else {
        alert('imported file type is not compatible!');
      }
    });

    reader.readAsText(importVal);
  }

  function UpdateDeckData(key, val) {
    setDeckData({ ...deckData, [key]: val });
  }

  return (
    <div className="page-container">
      <NavBar activeTabName={tabName} buttonFunction={ChangeTabTo} numOfCards={GetNumberOfCards()} />
      <MainView deckData={deckData} updateDeckData={UpdateDeckData} tabName={tabName} importDeckData={ImportDeckData} saveDeckData={ExportDeckData} />
      <Footer />
    </div>
  );
}

export default App;

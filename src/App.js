import { useState } from 'react';
import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [tabName, setTabName] = useState("Deck");

  function ChangeTabTo(varName) {
    setTabName(varName);
  }

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
  
  function GetNumberOfCards() {
    const num = Object.keys(deckData.warriors.cards).length + Object.keys(deckData.items.cards).length + Object.keys(deckData.invocations.cards).length;
    return num;
  }

  function ExportDeckData() {
    let _deckData = deckData;

    const disableSaveButton = (val) => {
      let saveDataButton = document.getElementById('save-data-button');
      if (saveDataButton) {
        saveDataButton.innerHTML = val ? "Saving..." : "Save Data"
        saveDataButton.disabled = val;
      }
    }

    disableSaveButton(true);

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

    disableSaveButton(false);
  }


  function ImportDeckData(importVal) {
    const reader = new FileReader();

    const disableImportDataButton = (val) => {
      let importDataButton = document.getElementById('import-data-button');
      if (importDataButton) {
        importDataButton.innerHTML = val ? "Importing Data..." : "Import Data"
        importDataButton.disabled = val;
      }
    }

    disableImportDataButton(true);

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
          } else {
            const _importedCards = Object.keys(importedData[_type].cards);
            totalNumOfCards += _importedCards.length;
          }
        });

        if (totalNumOfCards < 0 || totalNumOfCards > 8) {
          isCompatible = false;
        }
      }


      if (isCompatible) {

        const dataURItoBlob = (dataURI) => {
          // convert base64/URLEncoded data component to raw binary data held in a string
          let byteString;
          if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
          else
            byteString = decodeURI(dataURI.split(',')[1]);

          const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          const ia = new Uint8Array(byteString.length);

          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }

          return new Blob([ia], { type: mimeString });
        }

        const unpackImportedCardImages = (_importedCards) => {
          Object.keys(_importedCards).map((_cardName) => {
            if(_importedCards[_cardName].customImg) {
              _importedCards[_cardName].customImgBlob = dataURItoBlob(_importedCards[_cardName].customImg);
              _importedCards[_cardName].customImgURL = URL.createObjectURL(_importedCards[_cardName].customImgBlob);
            }
          });
          return _importedCards;
        }

        Object.keys(importedData).map((_cardType) => {
          importedData[_cardType].cards = unpackImportedCardImages(importedData[_cardType].cards);
        });

        setDeckData(importedData);
      } else {
        alert('imported file is not compatible!');
      }
      disableImportDataButton(false);
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

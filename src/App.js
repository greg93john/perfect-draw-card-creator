import { useState } from 'react';
import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [tabName, setTabName] = useState("About");

  const [charData, setCharData] = useState(
    {
      level: 0,
      xp: 0,
      classDC: 20,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
      size: "Medium",
      speed: 35,
      gender: "Not Set",
      deity: "Not Set",
      age: "Not Set",
      languages: "Not Set",
      editNotes: "Notes",
      currentBulk: 0,
      encumbered: 0,
      maximum: 0,
      currency:
      {
        platinum: 0,
        gold: 0,
        silver: 0,
        copper: 0,
      },
    }
  );

  function ChangeViewTo(varName) {
    setTabName(varName);
  }

  function UpdateCharData(key, val) {
    setCharData({...charData, [key]:val });
  }

  return (
    <div className="page-container">
      <NavBar activeTabName={tabName} buttonFunction={ChangeViewTo} />
      <MainView charData={charData} updateCharData={UpdateCharData} tabName={tabName} />
      <Footer />
    </div>
  );
}

export default App;

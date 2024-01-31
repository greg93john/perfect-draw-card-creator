import { useState } from 'react';
import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [tabName, setTabName] = useState("About");

  function ChangeViewTo(varName) {
    setTabName(varName);
  }

  return (
    <div className="page-container">
      <NavBar buttonFunction={ChangeViewTo}/>
      <MainView tabName={tabName} />
      <Footer />
    </div>
  );
}

export default App;

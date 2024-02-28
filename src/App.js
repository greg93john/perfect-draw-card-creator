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
          "B.B.B. Star Soldier": {
            id: 0,
            strength: "Strong",
            isAce: true,
            effect:
              "{Teamwork} - Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.\n\n" +
              "{Piercer (1)} - When this card defeats another card in battle, it deals damage to that cards controller equal to the piercer value.\n\n" +
              "{Followup} - You can play an additional card after this one."
          },

          "B.B.B. Support Copter": {
            id: 1,
            strength: "Normal",
            isAce: false,
            effect:
              "{Teamwork} - Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.\n\n" +
              "All other warriors you control are {Strenghened} - (When a card is strenghened, {Weak} cards become {Normal}, {Normal} cards become {Strong}, {Strong} cards gain {Overwhelm}.)"
          },

          "B.B.B. Explosives Planter": {
            id: 2,
            strength: "Weak",
            isAce: false,
            effect:
              "{Teamwork} - Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.\n\n" +
              "Target opponent {Fumbles}. (Describe an action you don't want the opponent to take, You can counter that action for free until the start of your next turn.)"
          }
        }
      },

      items: {
        id: 1,
        cards:
        {
          "B.B.B. toybox": {
            id: 0,
            strength: "Normal",
            effect:
              "When this is played and at the start of each turn, create a {Weak} warrior.\n\n" +
              "All warriors have {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)",
          }
        }
      },

      invocations: {
        id: 2,
        cards:
        {
          "B.B.B. build instructions": {
            id: 0,
            effect:
              "Draw 3 cards\n\n" +
              "You can only use this card if it's the last card in your hand.",
          },

          "B.B.B. backup squadron": {
            id: 1,
            effect: "Create four {Weak} warriors with {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)"
          }
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

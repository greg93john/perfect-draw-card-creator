import { useState } from 'react';
import './App.css';
import MainView from "./components/MainView";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [tabName, setTabName] = useState("Deck");

  const [cardData, setCardData] = useState(
    {
      type: "warrior"

    }
  )

  const [charData, setCharData] = useState(
    {
      name: "Elena Guerrero",
      pronouns: "She/Her",
      level: 0,
      xp: 0,
      passion: 3,
      skill: -1,
      friendship: 1,
      
      deck:
      {
        warriors: {
          id: 0,
          cards:
          {
            "B.B.B. Star Soldier": {
              id: 0,
              strength: "Normal",
              isAce: true,
              effects:
                [
                  { id: 0, title:"Teamwork", description: "Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals." },
                  { id: 1, title:"Piercer (1)", description: "When this card defeats another card in battle, it deals damage to that cards controller equal to the piercer value." },
                  { id: 2, title:"Followup", description: "You can play an additional card after this one." }
                ]
            },

            "B.B.B. Support Copter": {
              id: 1,
              strength: "Normal",
              isAce: false,
              effects:
                [
                  { id: 0, title: "Teamwork", description: "Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals." },
                  { id: 1, title: null, description: "All other warriors you control are {Strenghened} - (When a card is strenghened, {Weak} cards become {Normal}, {Normal} cards become {Strong}, {Strong} cards gain {Overwhelm}.)" }
                ]
            },

            "B.B.B. Explosives Planter": {
              id: 2,
              strength: "Normal",
              isAce: false,
              effects:
                [
                  { id: 0, title: "Teamwork", description: "Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals." },
                  { id: 1, title: null, description: "Target opponent {Fumbles}. (Describe an action you don't want the opponent to take, You can counter that action for free until the start of your next turn.)" }
                ]
            },

            "B.B.B. Tactical Officer": {
              id: 3,
              strength: "Weak",
              isAce: false,
              effects:
                [
                  { id: 0, title: "Teamwork", description: "Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals." },
                  { id: 1, title: "", description: "You may play an additional staple or cast an additional invocation the turn you play this." }
                ]
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
              effects:
                [
                  { id: 0, description: "When this is played and at the start of each turn, create a {Weak} warrior." },
                  { id: 1, description: "All warriors have {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)" }
                ]
            }
          }
        },

        invocations: {
          id: 2,
          cards:
          {
            "B.B.B. build instructions": {
              id: 0,
              effects:
                [
                  { id: 0, description: "Draw 3 cards" },
                  { id: 1, description: "You can only use this card if it's the last card in your hand." }
                ]
            },

            "B.B.B. backup squadron": {
              id: 1,
              effects:
                [
                  { id: 0, description: "Create four {Weak} warriors with {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)" }
                ]
            }
          }
        }
      }
    }
  );

  function ChangeTabTo(varName) {
    setTabName(varName);
  }

  function UpdateCharData(key, val) {
    setCharData({ ...charData, [key]: val });
  }

  return (
    <div className="page-container">
      <NavBar activeTabName={tabName} buttonFunction={ChangeTabTo} />
      <MainView charData={charData} updateCharData={UpdateCharData} tabName={tabName} />
      <Footer />
    </div>
  );
}

export default App;

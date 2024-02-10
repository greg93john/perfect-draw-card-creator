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

      name: "Elena Guerrero",
      pronouns: "She/Her",
      passion: 3,
      skill: -1,
      friendship: 1,
      exp: 0,
      cards:
      {
        warriors: {
          BBB_Star_Soldier: {
            strength: "Normal",
            isAce: true,
            effects:
              [
                "{Teamwork} - (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.)",
                "{Piercer} 1 - (When this card defeats another card in battle, it deals damage to that cards controller equal to the piercer value.)",
                "{Followup} - (You can play an additional card after this one.)"
              ]
          },

          BBB_Support_Copter: {
            strength: "Normal",
            isAce: false,
            effects:
              [
                "{Teamwork} - (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.)",
                "All other warriors you control are {Strenghened} - (When a card is strenghened, {Weak} cards become {Normal}, {Normal} cards become {Strong}, {Strong} cards gain {Overwhelm}.)"
              ]
          },

          BBB_Explosives_Planter: {
            strength: "Normal",
            isAce: false,
            effects:
              [
                "{Teamwork} - (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.)",
                "Target opponent {Fumbles}. (Describe an action you don't want the opponent to take, You can counter that action for free until the start of your next turn.)"
              ]
          },

          BBB_Tactical_Officer: {
            strength: "Weak",
            isAce: false,
            effects:
              [
                "{Teamwork} - (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strength totals.)",
                "You may play an additional staple or cast an additional invocation the turn you play this."
              ]
          },
        },

        items: {
          BBB_toybox: {
            strength: "normal",
            effects : 
            [
              "When this is played and at the start of each turn, create a {Weak} warrior.",
              "All warriors have {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)"
            ]
          }
        },

        invocations: {
          BBB_build_instructions: {
            effects: 
            [
              "Draw 3 cards",
              "You can only use this card if it's the last card in your hand."
            ]
          },

          BBB_backup_squadron: {
            effects:
            [
              "Create four {Weak} warriors with {Teamwork}. (Cards with teamwork can pair up with each other and up to one card without teamwork to combine their strengh totals.)"
            ]
          }
        },

        specials: {

        },

        customs: {

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

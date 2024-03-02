import Deck from './tab-bodies/Deck';
import Exports from './tab-bodies/Exports';

function MainView(props) {

  function ShowTabBody(name) {

    switch (name.toLowerCase()) {

      case "deck": return (<Deck deckData={props.deckData} updateDeckData={props.updateDeckData} />);

      case "exports": return (<Exports deck={props.deckData} />);

      default: return (<div></div>);
    }

  }

  return (
    <div className="content-wrap container px-0">
      <div className="card text-center">

        {ShowTabBody(props.tabName)}

      </div>
    </div>
  );
}

export default MainView;

import Deck from './tab-bodies/Deck';

function MainView(props) {

  function ShowTabBody(name) {

    switch (name.toLowerCase()) {

      case "deck": return (<Deck deckData={props.deckData} updateDeckData={props.updateDeckData} />);

      default: return (<div></div>);
    }

  }

  return (
    <div className="content-wrap container">
      <div className="row">
        <div className="col">

          <div className="card text-center">

            {ShowTabBody(props.tabName)}

          </div>

        </div>
      </div>
    </div>
  );
}

export default MainView;

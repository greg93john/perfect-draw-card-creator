import Deck from './tab-bodies/Deck';

function MainView(props) {

  function ShowTabBody(name) {

    switch (name.toLowerCase()) {

      case "deck": return (<Deck charData={props.charData} updateCharData={props.updateCharData} />);

      default: return (<div></div>);
    }

  }

  return (
    <div className="content-wrap container">
      <div className="row">
        <div className="col">

          <div className="card text-center">
            <div className="card-header">
              <h1>{props.tabName}</h1>
            </div>

            {ShowTabBody(props.tabName)}

          </div>

        </div>
      </div>
    </div>
  );
}

export default MainView;

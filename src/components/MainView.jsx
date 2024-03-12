import Deck from './tab-bodies/Deck';
import Data from './tab-bodies/Data';

function MainView(props) {

  function ShowTabBody(name) {

    switch (name.toLowerCase()) {

      case "deck": return (<Deck deckData={props.deckData} updateDeckData={props.updateDeckData} />);

      case "data": return (<Data deck={props.deckData} importDeckData={props.importDeckData} saveDeckData={props.saveDeckData} />);

      default: return (<div></div>);
    }

  }

  return (
    <div className="row mx-0">
      <div className='col-lg-1 d-none d-lg-flex h-100 align-items-center justify-content-center position-fixed z-background-images'>
        <img className='h-100' src="images/The_Destined-Action_Pose.png" alt="The Destined Action Pose Image" />
      </div>

      <div className="col-xs-12 col-lg-10 offset-lg-1">
        <div className="content-wrap px-0">
          <div className="card text-center mt-3 tab-body-container">
            {ShowTabBody(props.tabName)}
          </div>
        </div>
      </div>

      <div className='col-lg-1 d-none d-lg-flex h-100 align-items-center justify-content-center position-fixed offset-lg-11 z-background-images'>
        <img className='h-100' src="images/The_Medium-Action_Pose.png" alt="The Medium Action Pose Image" />
      </div>
    </div>
  );
}

export default MainView;

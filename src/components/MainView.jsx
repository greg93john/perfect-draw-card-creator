import About from './tab-bodies/About';
import Feats from './tab-bodies/Feats';
import Gear from './tab-bodies/Gear';
import Skills from './tab-bodies/Skills';

function MainView(props) {

  function ShowTabBody(name) {

    switch (name.toLowerCase()) {
      case "about": return(<About charData ={props.charData} updateCharData ={props.updateCharData} />);
        break;

      case "feats": return(<Feats />);
        break;

      case "gear": return(<Gear />);
        break;

      case "skills": return(<Skills />);
        break;
        default: return(<div></div>);
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

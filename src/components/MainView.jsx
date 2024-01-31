import React from "react";
import About from './tab-bodies/About';
import Feats from './tab-bodies/Feats';
import Gear from './tab-bodies/Gear';
import Skills from './tab-bodies/Skills';

function MainView(props) {

  function ShowTabBody(name) {
    let tabBody;
    switch (name.toLowerCase()) {
      case "about": tabBody = <About charData ={props.charData}/>
        break;

      case "feats": tabBody = <Feats />
        break;

      case "gear": tabBody = <Gear />
        break;

      case "skills": tabBody = <Skills />
        break;
    }

    return (tabBody);
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

import React from "react";

function MainView(props) {

  return (
    <div className="content-wrap container-fluid d-flex px-0">
      <div className="row flex-grow-1 mx-0">
        <div className="col d-flex">


          <div className="card flex-grow-1 text-center">
            <div className="card-header">
              <h1>{props.tabName}</h1>
            </div>
            <div className="card-body">

              <div>
                <p>{"This is Filler for now"}</p>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default MainView;

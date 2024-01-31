import React from "react";

function About(props) {
    return(
    <div className="card-body">
        <div className="border border-dark rounded my-2">
            <h2>Level {0}</h2>
            <p>XP: {0}</p>
        </div>

        

        <div className="border border-dark rounded my-2">
            <p>Class DC {20}</p>
        </div>

        

        <div className="border border-dark rounded my-2">
            <p>Hero Points</p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </div>

        

        <div className="border border-dark rounded my-2">
            <h5>STR +{0}</h5>
            <h5>DEX +{0}</h5>
            <h5>CON +{0}</h5>
            <h5>INT +{0}</h5>
            <h5>WIS +{0}</h5>
            <h5>CHA +{0}</h5>
            <p>Size: {"Medium"}</p>
            <p>Speed: {35}ft.</p>
        </div>



        <div className="border border-dark rounded my-2">
            <p>Gender: {"Not set"}</p>
        </div>
        


        <div className="border border-dark rounded my-2">
            <p>Deiy: {"Not Set"}</p>
            <p>Age: {"Not Set"}</p>
        </div>


        <div className="border border-dark rounded my-2">
            <p>Languages: {"None selected"}</p>
        </div>



        <div className="border border-dark rounded my-2">
            <p>Edit Notes</p>
            <hr />
            <p>{"Notes"}</p>
        </div>
    </div>
    )
}

export default About;
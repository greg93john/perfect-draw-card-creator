import React from "react";

function About(props) {

    return(
    <div className="card-body">
        <div className="border border-dark rounded my-2">
            <h2>Level {props.charData.level}</h2>
            <p>XP: {props.charData.xp}</p>
        </div>

        

        <div className="border border-dark rounded my-2">
            <p><b>Class DC</b> {props.charData.classDC}</p>
        </div>

        

        <div className="border border-dark rounded my-2">
            <p><b>Hero Points</b></p>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </div>

        

        <div className="border border-dark rounded my-2">
            <h5>STR +{props.charData.str}</h5>
            <h5>DEX +{props.charData.dex}</h5>
            <h5>CON +{props.charData.con}</h5>
            <h5>INT +{props.charData.int}</h5>
            <h5>WIS +{props.charData.wis}</h5>
            <h5>CHA +{props.charData.cha}</h5>
            <p><b>Size</b>: {props.charData.size}</p>
            <p><b>Speed</b>: {props.charData.speed}ft.</p>
        </div>



        <div className="border border-dark rounded my-2">
            <p><b>Gender</b>: {props.charData.gender}</p>
        </div>
        


        <div className="border border-dark rounded my-2">
            <p><b>Deity</b>: {props.charData.deity}</p>
            <p><b>Age</b>: {props.charData.age}</p>
        </div>


        <div className="border border-dark rounded my-2">
            <p><b>Languages</b>: {props.charData.languages}</p>
        </div>



        <div className="border border-dark rounded my-2">
            <b>Edit Notes</b>
            <hr />
            <p>{props.charData.editNotes}</p>
        </div>
    </div>
    )
}

export default About;
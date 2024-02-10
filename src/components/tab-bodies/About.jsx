function About(props) {

    return (
        <div className="card-body">
            <div className="border border-dark rounded my-2">
                <div className="">
                    <h2>Level {props.charData.level}</h2>
                    <button onClick={() => { props.updateCharData("level", props.charData.level - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("level", props.charData.level + 1) }}>+</button>
                </div>
                <div className="">
                    <p>XP: {props.charData.xp}</p>
                    <button onClick={() => { props.updateCharData("xp", props.charData.xp - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("xp", props.charData.xp + 1) }}>+</button>
                </div>
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
                <div className="">
                    <h5>STR {props.charData.str >= 0 ? "+" : ""}{props.charData.str}</h5>
                    <button onClick={() => { props.updateCharData("str", props.charData.str - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("str", props.charData.str + 1) }}>+</button>
                </div>

                <div className="">
                    <h5>DEX {props.charData.dex >= 0 ? "+" : ""}{props.charData.dex}</h5>
                    <button onClick={() => { props.updateCharData("dex", props.charData.dex - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("dex", props.charData.dex + 1) }}>+</button>
                </div>
                <div className="">
                    <h5>CON {props.charData.con >= 0 ? "+" : ""}{props.charData.con}</h5>
                    <button onClick={() => { props.updateCharData("con", props.charData.con - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("con", props.charData.con + 1) }}>+</button>
                </div>
                <div className="">
                    <h5>INT {props.charData.int >= 0 ? "+" : ""}{props.charData.int}</h5>
                    <button onClick={() => { props.updateCharData("int", props.charData.int - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("int", props.charData.int + 1) }}>+</button>
                </div>
                <div className="">
                    <h5>WIS {props.charData.wis >= 0 ? "+" : ""}{props.charData.wis}</h5>
                    <button onClick={() => { props.updateCharData("wis", props.charData.wis - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("wis", props.charData.wis + 1) }}>+</button>
                </div>
                <div className="">
                    <h5>CHA {props.charData.cha >= 0 ? "+" : ""}{props.charData.cha}</h5>
                    <button onClick={() => { props.updateCharData("cha", props.charData.cha - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("cha", props.charData.cha + 1) }}>+</button>
                </div>

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
                <textarea name="aboutNotes" id="" cols="50" rows="10" defaultValue={props.charData.editNotes} onChange={(e) => { props.updateCharData("editNotes", e.target.value); }}></textarea>
            </div>
        </div>
    )
}

export default About;
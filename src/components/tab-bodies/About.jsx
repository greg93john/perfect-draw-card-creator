function About(props) {

    return (
        <div className="card-body">

            <div className="border border-dark rounded my-2">
                Name: <input type="text" id="character-name" name="name" value={props.charData.name} onChange={(e) => { props.updateCharData("name", e.target.value); }} />
                <br />
                Pronouns: <input type="text" id="pronouns" name="pronouns" value={props.charData.pronouns} onChange={(e) => { props.updateCharData("pronouns", e.target.value); }} />
            </div>

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
                <div className="">
                    <h5>Passion {props.charData.passion >= 0 ? "+" : ""}{props.charData.passion}</h5>
                    <button onClick={() => { props.updateCharData("passion", props.charData.passion - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("passion", props.charData.passion + 1) }}>+</button>
                </div>

                <div className="">
                    <h5>Skill {props.charData.skill >= 0 ? "+" : ""}{props.charData.skill}</h5>
                    <button onClick={() => { props.updateCharData("skill", props.charData.skill - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("skill", props.charData.skill + 1) }}>+</button>
                </div>

                <div className="">
                    <h5>Friendship {props.charData.friendship >= 0 ? "+" : ""}{props.charData.friendship}</h5>
                    <button onClick={() => { props.updateCharData("friendship", props.charData.friendship - 1) }}>-</button>
                    <button onClick={() => { props.updateCharData("friendship", props.charData.friendship + 1) }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default About;
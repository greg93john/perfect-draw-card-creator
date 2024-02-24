import { useState } from "react"

function CreateCardForm(props) {
    const [prevStrength, setPrevStrength] = useState(props.createCard.strength);

    function UpdateCreateCardValue(attribute, val) {
        let _temp = props.createCard;

        if (attribute === "type" && val === "invocation") {
            setPrevStrength(_temp.strength);
            _temp.strength = "";
        } else if (attribute === "type" && val !== "invocation" && _temp.strength === "") {
            _temp.strength = prevStrength;
        }

        _temp[attribute] = val;

        props.setCreateCard(
            { ..._temp }
        );
    }

    function CheckIfSubmitable() {
        return (props.createCard.name === "");
    }

    const handelSubmit = (e) => { e.preventDefault(); props.submitCreatedCard(); };

    return (
        <form className="text-start" onSubmit={handelSubmit}>
            Name:
            <input className="border-0 border-bottom border-dark w-100" id="name" type="text" maxLength={200} value={props.createCard.name} onChange={(e) => { UpdateCreateCardValue("name", e.target.value) }} />

            <br />

            Type:
            <select className="w-100" name="type-field" id="type" value={props.createCard.type} onChange={e => UpdateCreateCardValue("type", e.target.value)}>
                <option value="warrior">Warrior</option>
                <option value="item">Item</option>
                <option value="invocation">Invocation</option>
            </select>

            <br />

            {
                props.createCard.strength !== "" ?
                    <div className="">
                        Strength :
                        <select className="w-100" name="strength-field" id="strength" value={props.createCard.strength} onChange={e => UpdateCreateCardValue("strength", e.target.value)}>
                            <option value="Weak">Weak</option>
                            <option value="Normal">Normal</option>
                            <option value="Strong">Strong</option>
                        </select>
                    </div>
                    :
                    <div>
                        <br />
                        <br />
                    </div>
            }

            <br />

            Ace: <input id="ace" type="checkbox" value={props.createCard.isAce} onChange={e => UpdateCreateCardValue("isAce", e.target.checked)} />

            <br />

            Upload Image:
            <br />
            <input id="upload-image" type="file" onChange={(e) => UpdateCreateCardValue("customImgURL", e.target.files[0])} />

            <br />

            Effect:

            <br />

            <textarea className="w-100" id="effect" rows="5" maxLength={2000} onChange={(e) => { UpdateCreateCardValue("effect", e.target.value) }}></textarea>

            <br />

            {/* Flavor:

            <br />

            <textarea className="w-100" id="flavour" rows="2" maxLength={2000} onChange={e => UpdateCreateCardValue("flavour", e.target.value)}></textarea>

            <br /> */}

            <button disabled={CheckIfSubmitable()} type="submit" className="btn btn-primary my-3">Save</button>
        </form>
    )
}

export default CreateCardForm
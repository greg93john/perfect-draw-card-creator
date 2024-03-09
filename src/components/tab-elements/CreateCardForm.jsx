import { useState } from "react"

function CreateCardForm(props) {
    const [prevStrength, setPrevStrength] = useState(props.createCard.strength);

    function CheckIfSubmitable() {
        return (props.createCard.name === "");
    }

    function UpdateCreateCardValue(attribute, val) {
        let _temp = props.createCard;

        if (attribute === "type" && val === "invocation") {
            setPrevStrength(_temp.strength);
            _temp.strength = "";
        } else if (attribute === "type" && val !== "invocation" && _temp.strength === "") {
            _temp.strength = prevStrength;
        } else if ( attribute === "customImg") {
            
        }

        _temp[attribute] = val;

        props.setCreateCard(
            { ..._temp }
        );

    }

    const handelSubmit = (e) => { e.preventDefault(); props.submitCreatedCard(); };

    return (
        <form id="create-card-form" className="text-start" onSubmit={handelSubmit}>
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

            Upload Image (16:9 aspect ratio)
            <br />
            <input id="upload-image-input" type="file" onChange={(e) => UpdateCreateCardValue("customImg", e.target.files[0])} />

            <br />

            Effect:

            <br />

            <textarea className="w-100" id="effect-input" rows="5" maxLength={2000} value={props.createCard.effect} onChange={(e) => { UpdateCreateCardValue("effect", e.target.value) }}></textarea>

            <br />

            <button disabled={CheckIfSubmitable()} type="submit" className="btn btn-primary my-3">Create</button>
        </form>
    )
}

export default CreateCardForm
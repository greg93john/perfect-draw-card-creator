import { useState } from 'react';
import DisplayCard from '../tab-elements/DisplayCard';
import DisplayTypeCategory from '../tab-elements/DisplayTypeCategory';

function Deck(props) {
    const _deck = props.charData.deck;
    const [createCard, setCreateCard] = useState(
        {
            name: null,
            strength: "weak",
            type: "warrior",
            effects:
                [
                    {
                        id: 0,
                        description: ""
                    }
                ],
            isAce: false,
            customImgURL: null
        }
    ), [prevStrength, setPrevStrength] = useState(createCard.strength);


    function SubmitCreatedCard() {
        const _typeName = createCard.type + "s";
        createCard.id = Object.keys(_deck[_typeName].cards).length;
        props.updateCharData("deck", { ..._deck, [_typeName]: { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } } });
        ClearCreateCardInputFields();
    }


    function HandleCardCreatorChange(attribute, val) {
        let _temp = createCard;

        if (attribute === "type" && val === "invocation") {
            setPrevStrength(_temp.strength);
            _temp.strength = null;
        } else if (attribute === "type" && val !== "invocation" && _temp.strength === null) {
            _temp.strength = prevStrength;
        }

        _temp[attribute] = val;
        setCreateCard(
            { ..._temp }
        );
    }

    function UpdateEffect(type, inputID, val) {
        let _effects = [...createCard.effects];
        _effects.find(a => a.id == inputID)[type] = val;
        HandleCardCreatorChange("effects", _effects)
    }

    function AddNewEffect() {
        HandleCardCreatorChange("effects", [...createCard.effects, { id: createCard.effects.length, description: "" }])
    }

    function CheckIfSumbitIsPossible() {
        return (createCard.name === null || createCard.name === '');
    }

    function ClearCreateCardInputFields() {
        document.getElementById('create-card-name-input').value = "";
        [].forEach.call(document.getElementsByClassName("effect-input-field"), (el) => { el.value = ""; });
        setCreateCard(
            {
                ...createCard,
                name: "",
                effects:
                    [
                        {
                            id: 0,
                            description: ""
                        }
                    ],
                isAce: false,
                customImgURL: null
            }
        );
    }

    return (
        <div className="card-body">
            {
                Object.keys(_deck).map((_cardsType) => {

                    return (
                        <DisplayTypeCategory cards={_deck[_cardsType].cards} cardsType={_cardsType} key={_cardsType + _deck[_cardsType].id} />
                    )
                })
            }

            <div className="border border-dark rounded my-2">
                <h2>Create New Card:</h2>
                <hr />

                <div className="row mx-0">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <label htmlFor="custom-image-upload">
                                        <li className="nav-item">
                                            <b className="btn btn-success active" style={{ cursor: "pointer" }}>Upload Image</b>
                                        </li>
                                    </label>
                                </ul>
                            </div>
                            <img className="card-img-top" src={(createCard.customImgURL) ? URL.createObjectURL(createCard.customImgURL) : `images/${(createCard.type === "warrior" || createCard.type === "item") ? createCard.strength + "-" : ""}${createCard.type}.png`} alt="Create Card Image Top" />
                            <div className="card-body">
                                Name:
                                <input id="create-card-name-input" type="text" name="name" onChange={(e) => { HandleCardCreatorChange("name", e.target.value) }} />
                                <div className="row">
                                    <div className="col">
                                        Type:
                                        <select onChange={e => HandleCardCreatorChange("type", e.target.value)} value={createCard.type} >
                                            <option value="warrior">Warrior</option>
                                            <option value="item">Item</option>
                                            <option value="invocation">Invocation</option>
                                        </select>
                                    </div>
                                    {
                                        (createCard.type === "warrior" || createCard.type === "item") ?
                                            <div className="col">
                                                Strength:
                                                <select onChange={e => HandleCardCreatorChange("strength", e.target.value)} value={createCard.strength} >
                                                    <option value="Weak">Weak</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="Strong">Strong</option>
                                                </select>
                                            </div> : <div className="col"></div>
                                    }
                                    {
                                        createCard.type === "warrior" ?
                                            <div className="col">
                                                Ace: <br /> <input type="checkbox" onChange={e => HandleCardCreatorChange("isAce", e.target.checked)} checked={createCard.isAce} />
                                            </div>
                                            :
                                            <div className="col"></div>
                                    }
                                </div>
                                <hr />
                                <div>
                                    Effects:
                                    <br />
                                    <div>
                                        {
                                            createCard.effects.map((effect) => {
                                                return (
                                                    <div key={effect.id} className="">
                                                        <input className="effect-input-field mb-1" type="text" name={"effectTitle" + effect.id} onChange={(e) => { UpdateEffect("title", effect.id, e.target.value) }} />
                                                        <br />
                                                        <textarea className="effect-input-field" name={"effectDecription"} id={"effectDescription" + effect.id} rows="2" onChange={(e) => { UpdateEffect("description", effect.id, e.target.value) }}></textarea>
                                                        <br />
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                        <button className="btn btn-success rounded-circle" onClick={AddNewEffect}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={SubmitCreatedCard} disabled={CheckIfSumbitIsPossible()}>Submit</button>
                        <input hidden={true} type="file" id="custom-image-upload" name="custom-image" onChange={(e) => HandleCardCreatorChange("customImgURL", e.target.files[0])} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deck;
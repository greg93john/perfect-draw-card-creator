import { useState } from "react";

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
            isAce: false
        }
    );

    function SubmitCreatedCard() {
        const _typeName = createCard.type + "s";
        createCard.id = Object.keys(_deck[_typeName].cards).length;
        props.updateCharData("deck", { ..._deck, [_typeName]: { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } } });
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
                    ]
            }
        );
        document.getElementById('create-card-name-input').value = "";
    }


    function HandleCardCreatorChange(attribute, val) {
        console.log(attribute + " changed to " + val);
        setCreateCard(
            { ...createCard, [attribute]: val }
        );
    }

    function checkIfSumbitIsPossible() {
        return (createCard.name === null || createCard.name === '');
    }

    return (
        <div className="card-body">
            {
                Object.keys(_deck).map((_cardType) => {
                    const _cardTypeLabel = _cardType.charAt(0).toUpperCase() + _cardType.slice(1, -1);
                    return (
                        <div key={_cardType + _cardType.id} className={_cardType.slice(0, -1) + "-cards-listing border border-dark rounded my-3"}>
                            <h3>{_cardTypeLabel + "s"}</h3>
                            <hr />
                            <div className="row mx-0 mb-3">
                                {
                                    Object.keys(_deck[_cardType].cards).map((_cardName) => {
                                        const _cardObject = _deck[_cardType].cards[_cardName];
                                        return (
                                            <div key={_cardName + _cardName.id} className="col-3">
                                                <div className="card h-100">
                                                    <img className="card-img-top" src={`images/${_cardObject.strength ? _cardObject.strength + "-" : ""}${_cardTypeLabel}.png`} alt="Card image Top" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{_cardName}</h5>
                                                        <p>{_cardTypeLabel} {(_cardObject.strength) ? " | " + _cardObject.strength + (_cardObject.isAce ? " | Ace" : "") : ""}</p>
                                                        <hr />
                                                        {
                                                            _cardObject.effects.map(_effect => <p key={"effect" + _effect.id} className="card-text">{(_effect.title ? (<b>{_effect.title} -</b>) : "")} {_effect.description}</p>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className="border border-dark rounded my-2">
                <h2>Create New Card:</h2>
                <hr />

                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <img src={`images/${(createCard.type === "warrior" || createCard.type === "item") ? createCard.strength + "-" : ""}${createCard.type}.png`} alt="Create Card Image Top" />
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
                                            <option value="special">Special</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                    </div>
                                    {<div className="col">
                                        Strength:
                                        <select onChange={e => HandleCardCreatorChange("strength", e.target.value)} value={createCard.strength} >
                                            <option value="Weak">Weak</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Strong">Strong</option>
                                        </select>
                                    </div>}
                                    <div className="col">
                                        Ace <br /> <input type="checkbox" onChange={e => HandleCardCreatorChange("isAce", e.target.checked)} checked={createCard.isAce} />
                                    </div>
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
                                                        <textarea name={"effect" + effect.id} id={effect.id} rows="2" onChange={(e) => { let _effects = [...createCard.effects]; _effects.find(a => a.id == effect.id).description = e.target.value; HandleCardCreatorChange("effects", _effects) }}></textarea>
                                                        <br />
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={SubmitCreatedCard} disabled={checkIfSumbitIsPossible()}>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deck;
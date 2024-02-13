import { useState } from "react";

function Deck(props) {
    const _deck = props.charData.deck;
    const [createCard, setCreateCard] = useState(
        {
            name: null,
            strength: "weak",
            type: "warrior",
            effects: [],
            isAce: false
        }
    );


    function handleCardCreatorChange(attribute, val) {
        setCreateCard(
            { ...createCard, [attribute]: val }
        );
    }

    return (
        <div className="card-body">
            {
                Object.keys(_deck).map((_cardType) => {
                    const _cardTypeLabel = _cardType.charAt(0).toUpperCase() + _cardType.slice(1, -1);
                    return (
                        <div key={_cardType + _cardType.id} className={_cardType.slice(0, -1) + "-cards-listing border border-dark rounded my-3"}>
                            <h3>{_cardType.charAt(0).toUpperCase() + _cardType.slice(1)}</h3>
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
                                                        <h5 className="card-title">{_cardName.replace(/_/g, " ")}</h5>
                                                        <p>{_cardTypeLabel} {(_cardObject.strength) ? " | " + _cardObject.strength + (_cardObject.isAce ? " | Ace" : "") : ""}</p>
                                                        <hr />
                                                        {
                                                            _cardObject.effects.map(_effect => <p key={"effect" + _effect.id} className="card-text">{(_effect.title ? (<b>{_effect.title} -</b>) : "")} {_effect.description}</p>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }

            <div className="border border-dark rounded my-2">
                <b>Create New Card:</b>
                <hr />

                <form>
                    <label>
                        <div className="card h-100">
                            <img src={`images/${(createCard.type === "warrior" || createCard.type === "item") ? createCard.strength + "-" : ""}${createCard.type}.png`} alt="Create Card Image Top" />
                            <div className="card-body">
                                Name:
                                <input type="text" name="name" />

                                <div className="row">
                                    <div className="col-4">
                                        Type:
                                        <select onChange={e => handleCardCreatorChange("type", e.target.value)} value={createCard.type} >
                                            <option value="warrior">Warrior</option>
                                            <option value="item">Item</option>
                                            <option value="invocation">Invocation</option>
                                            <option value="special">Special</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                    </div>
                                    {<div className="col-4">
                                        Strength:
                                        <select onChange={e => handleCardCreatorChange("strength", e.target.value)} value={createCard.strength} >
                                            <option value="Weak">Weak</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Strong">Strong</option>
                                        </select>
                                    </div>}
                                    <div className="col-4">
                                        Is Ace <br /> <input type="checkbox" value={createCard.isAce} />
                                    </div>
                                </div>

                                <hr />

                                <div>
                                    Effects:
                                    <textarea />
                                </div>
                            </div>
                        </div>
                    </label>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
}

export default Deck;
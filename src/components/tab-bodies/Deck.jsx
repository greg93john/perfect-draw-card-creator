function Deck(props) {
    const _deck = props.charData.deck;
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
                                                    <img className="card-img-top" src={`images/${_cardObject.strength ? _cardObject.strength + "-" : ""}${_cardTypeLabel}.png`} alt="Card image cap" />
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
                        Card Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        </div>
    );
}

export default Deck;
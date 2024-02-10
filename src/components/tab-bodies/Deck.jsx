function Deck(props) {
    let deck = props.charData.cards;

    return (
        <div className="card-body">

            {
                Object.keys(deck).map((_cardType) => {
                    const _cardTypeLabel = _cardType.charAt(0).toUpperCase() + _cardType.slice(1, -1);
                    return (
                        <div className={_cardType.slice(0, -1) + "-cards-listing border border-dark rounded my-3"}>
                            <b>{_cardType}</b>
                            <hr />
                            <div className="row mx-0 mb-3">
                                {
                                    Object.keys(deck[_cardType]).map((_cardName) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card h-100">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{_cardName.replace(/_/g, " ")}</h5>
                                                        <p>{_cardTypeLabel} {(deck[_cardType][_cardName].strength) ? " | " + deck[_cardType][_cardName].strength + (deck[_cardType][_cardName].isAce ? " | Ace" : "") : ""}</p>
                                                        <hr />
                                                        {
                                                            deck[_cardType][_cardName].effects.map(
                                                                (description) => {
                                                                    return (
                                                                        <p className="card-text">{description}</p>
                                                                    )
                                                                }
                                                            )
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
            </div>
        </div>
    );
}

export default Deck;
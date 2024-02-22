import DisplayCard from "./DisplayCard";

function DisplayTypeCategory(props) {
    const _cards= props.cards, _cardsType = props.cardsType;

    return (
        <div className={_cardsType.slice(0, -1) + "-cards-listing border border-dark rounded my-3"}>

            <h3>{_cardsType.charAt(0).toUpperCase() + _cardsType.slice(1)}</h3>

            <hr />

            <div className="row row-cols-4 gy-3 mx-0 mb-3">

                {
                    Object.keys(_cards).map((_cardName) => {
                        const _cardObject = { ..._cards[_cardName], name: _cardName, type: _cardsType.slice(0, -1) };

                        return (
                            <div key={_cardName + _cardName.id} className="col">
                                <DisplayCard cardObject={_cardObject} />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default DisplayTypeCategory;
import DisplayCard from "./DisplayCard";

function DisplayTypeCategory(props) {
    const _cards = props.cards, _cardsType = props.cardsType;

    function HandleDeleteCall(card) {
        if (props.deleteExistingCardMethod && confirm(`Do you wish to delete the ${card.type} card "${card.name}" ?`)) {
            props.deleteExistingCardMethod(card);
        }
    }

    return (
        <div className={_cardsType.slice(0, -1) + "-cards-listing border border-dark rounded my-3"}>

            <h3>{_cardsType.charAt(0).toUpperCase() + _cardsType.slice(1)}</h3>

            <hr />

            <div className="row gy-3 mx-0 mb-3">

                {
                    Object.keys(_cards).map((_cardName) => {
                        const _cardObject = { ..._cards[_cardName], name: _cardName, type: _cardsType.slice(0, -1) };

                        return (
                            <div key={_cardName + _cardObject.id} className="col d-flex">
                                <div className="dropdown-center mx-auto">
                                    <div className="dropdown-toggle" href="" role="button" id={_cardName + _cardObject.type + _cardObject.id} data-bs-toggle="dropdown" aria-expanded="false">
                                        <DisplayCard cardObject={_cardObject} />
                                    </div>
                                    <ul className="dropdown-menu text-center" data-bs-theme="red">
                                        <li><button className="btn btn-extra dropdown-item" type="button" onClick={() => { HandleDeleteCall(_cardObject) }}> Delete</button></li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default DisplayTypeCategory;
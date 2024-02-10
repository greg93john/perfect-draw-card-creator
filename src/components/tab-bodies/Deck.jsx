function Deck(props) {

    return (
        <div className="card-body">
            <div className="border border-dark rounded">
                <div className="warrior-cards-listing">
                    <b>Warriors</b>
                    <hr />
                    <div className="row m-0">
                        {
                            Object.keys(props.charData.cards.warriors).map((_warriorName) => {
                                return (
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{_warriorName.replace(/_/g, " ")}</h5>
                                                <p>Warrior | {props.charData.cards.warriors[_warriorName].strength + (props.charData.cards.warriors[_warriorName].isAce ? " | Ace" : "")}</p>
                                                <hr />
                                                {
                                                    props.charData.cards.warriors[_warriorName].effects.map(
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
                            })
                        }
                    </div>
                </div>
                <div className="item-cards-listing">
                    <b>Items</b>
                    <hr />
                    <div className="row m-0">
                        {
                            Object.keys(props.charData.cards.items).map((_itemName) => {
                                return (
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{_itemName.replace(/_/g, " ")}</h5>
                                                <hr />
                                                {
                                                    props.charData.cards.items[_itemName].effects.map(
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
                            })
                        }
                    </div>
                </div>
                <div className="invocation-cards-listing">
                    <b>Invocations</b>
                    <hr />
                    <div className="row m-0">
                        {
                            Object.keys(props.charData.cards.invocations).map((_invocationName) => {
                                return (
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title">{_invocationName.replace(/_/g, " ")}</h5>
                                                <hr />
                                                {props.charData.cards.invocations[_invocationName].effects.map(
                                                    (description) => {
                                                        return (
                                                            <p className="card-text">{description}</p>)
                                                    }
                                                )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="border border-dark rounded my-2">
                <b>Create New Card:</b>
                <hr />
            </div>
        </div>
    );
}

export default Deck;
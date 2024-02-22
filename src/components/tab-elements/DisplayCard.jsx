function DisplayCard(props) {
    const _card = props.cardObject;
    console.log(_card.effects);
    
    return (
        <div className="card h-100">
            <div className="">
                <img
                    className="card-img-top"
                    src={
                        _card.customImgURL ?
                            URL.createObjectURL(_card.customImgURL)
                            :
                            `images/${(_card.type === "warrior" || _card.type === "item") ? _card.strength.toLowerCase() + "-" : ""}${_card.type}.png`
                    }
                    alt="card header art"
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{_card.name}</h5>

                <p>{_card.type.charAt(0).toUpperCase() + _card.type.slice(1)} {(_card.strength) ? " | " + _card.strength + (_card.isAce ? " | Ace" : "") : ""}</p>

                <hr />
                    
                {
                    _card.effects.map(_effect => <p key={"effect" + _effect.id} className="card-text">{((_effect.title && _effect.title !== "") ? <b>{_effect.title} - </b> : "")} {_effect.description}</p>)
                }
            </div>
        </div>
    )
}

export default DisplayCard;
import React, { useRef, useEffect, useState } from 'react';

function DisplayCard(props) {
    const _card = props.cardObject;

    const defaultEffectTextFontSize = 16;
    const effectText = useRef(null);
    const [effectTextFontSize, setEffectTextFontSize] = useState(defaultEffectTextFontSize); // Initial font size

    useEffect(() => {
        const adjustEffectTextFontSize = () => {
            const effectTextParentHeight = effectText.current.parentElement.offsetHeight;
            const effectTextHeight = effectText.current.scrollHeight;
            const containerGap = effectTextParentHeight - effectTextHeight;


            if (effectTextHeight > effectTextParentHeight) {
                const newFontSize = Math.floor(effectTextFontSize * (effectTextParentHeight / effectTextHeight));
                setEffectTextFontSize(newFontSize);
            }
        };

        adjustEffectTextFontSize();

        window.addEventListener('keydown', adjustEffectTextFontSize);
        return () => {
            window.removeEventListener('keydown', adjustEffectTextFontSize);
        };

    }, [effectTextFontSize]);

    const adjustNameFontSize = () => {

    }


    return (
        <div className="trading-card border border-5 mx-auto">
            <div className="trading-card-name-field">
                <h5>{_card.name}</h5>
            </div>

            <div className="trading-card-image-field">
                <img
                    className="card-image h-100"
                    src={
                        _card.customImgURL ?
                            URL.createObjectURL(_card.customImgURL)
                            :
                            `images/${(_card.type === "warrior" || _card.type === "item") ? _card.strength.toLowerCase() + "-" : ""}${_card.type}.png`
                    }
                    alt="trading card art"
                />
            </div>

            <div className="trading-card-effect-field">
                <p ref={effectText} className='effect-text' style={{ fontSize: `${effectTextFontSize}px` }}>{_card.effect}</p>
            </div>

            <div className="trading-card-details">
                <div className="row">
                    <div className="col">
                        <div className="card-type-field">
                            {_card.type.charAt(0).toUpperCase() + _card.type.slice(1)}
                        </div>
                    </div>
                    {
                        _card.strength ?
                            <div className="col">
                                <div className="card-strength-field">
                                    {`{${_card.strength.charAt(0).toUpperCase() + _card.strength.slice(1)}}`}
                                </div>
                            </div>
                            :
                            ""
                    }
                    {
                        _card.isAce ?
                            <div className="col">
                                <div className="card-ace-field">
                                    Ace
                                </div>
                            </div>
                            :
                            ""
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayCard;
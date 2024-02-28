import textFit from '../../libraries/textFit.min.js';
import { useEffect, useLayoutEffect, useRef } from 'react';

function DisplayCard(props) {
    const _card = props.cardObject;

    const effectTextContainerRef = useRef(null), nameTextContainerRef = useRef(null);

    useEffect(() => {
        if (effectTextContainerRef) {
            textFit([effectTextContainerRef.current], { minFontSize: 4, maxFontSize: 16 });
        } if (nameTextContainerRef) {
            textFit([nameTextContainerRef.current], { minFontSize: 4, maxFontSize: 24 });
        }
    }, [props.cardObject]);

    useLayoutEffect(() => {
        if (effectTextContainerRef) {
            textFit([effectTextContainerRef.current], { minFontSize: 4, maxFontSize: 16 });
        } if (nameTextContainerRef) {
            textFit([nameTextContainerRef.current], { minFontSize: 4, maxFontSize: 24 });
        }
    }, [props.cardObject]);

    return (
        <div className="trading-card border border-5 mx-auto">
            <div ref={nameTextContainerRef} className="trading-card-name-field text-start my-2">
                {_card.name}
            </div>

            <div className="trading-card-image-field ratio ratio-16x9 mx-auto mb-2">
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

            <div ref={effectTextContainerRef} className="trading-card-effect-field text-start p-2 mb-2">
                {_card.effect}
            </div>

            <div className="trading-card-details">
                <div className="row">
                    <div className={(_card.type === "invocation" && !_card.isAce && !_card.strength) ? "col" : "col pe-1"}>
                        <div className="card-type-field">
                            {_card.type.charAt(0).toUpperCase() + _card.type.slice(1)}
                        </div>
                    </div>
                    {
                        _card.isAce ?
                            <div className={`col p${_card.strength ? 'x' : 's'}-1`}>
                                <div className="card-ace-field">
                                    {"{Ace}"}
                                </div>
                            </div>
                            :
                            ""
                    }
                    {
                        _card.strength ?
                            <div className="col ps-1">
                                <div className="card-strength-field">
                                    {`{${_card.strength.charAt(0).toUpperCase() + _card.strength.slice(1)}}`}
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
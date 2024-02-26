import React, { useRef, useEffect, useState } from 'react';

function DisplayCard(props) {
    const _card = props.cardObject;

    const defaultTextFontSize = 16;
    const effectParagraphElement = useRef(null);
    const [textFontSize, setTextFontSize] = useState(defaultTextFontSize); // Initial font size

    useEffect(() => {
        const adjustEffectTextFontSize = () => {
            const parentElementHeight = effectParagraphElement.current.parentElement.clientHeight;
            const effectParagraphHeight = effectParagraphElement.current.clientHeight;
            const containerGap = parentElementHeight - effectParagraphHeight;
            var paragraph = effectParagraphElement.current;
            var lineHeightInPixels, fontSizeToLineHeightMultiplier;



            if (paragraph && props.isCreateCard) {
                lineHeightInPixels = parseFloat(window.getComputedStyle(paragraph).getPropertyValue('line-height'));
                fontSizeToLineHeightMultiplier = lineHeightInPixels / textFontSize;
                console.log("Font size in Pixels: " + textFontSize);
                console.log("Line height in Pixels: " + lineHeightInPixels);
                console.log("Font to Line height multiplier is: " + (fontSizeToLineHeightMultiplier));
                console.log("Paragraph element height is: " + effectParagraphHeight);
                console.log("Container height in Pixels: " + parentElementHeight)
                console.log("Container Gap is: " + containerGap);
            }



            if ((effectParagraphHeight)  > (parentElementHeight)) {
                lineHeightInPixels = parseFloat(window.getComputedStyle(paragraph).getPropertyValue('line-height'));
                const numOfLines = effectParagraphHeight / lineHeightInPixels;
                const newLineHeight = parentElementHeight / numOfLines;
                fontSizeToLineHeightMultiplier = lineHeightInPixels / textFontSize;
                const newFontSize = (newLineHeight / fontSizeToLineHeightMultiplier);
                setTextFontSize(newFontSize);
            } else if (defaultTextFontSize > textFontSize && containerGap > lineHeightInPixels * 1.5) {
                lineHeightInPixels = parseFloat(window.getComputedStyle(paragraph).getPropertyValue('line-height'));
                const numOfLines = effectParagraphHeight / lineHeightInPixels;
                const newLineHeight = parentElementHeight / numOfLines;
                fontSizeToLineHeightMultiplier = lineHeightInPixels / textFontSize;
                const possibeFontSize = (newLineHeight / fontSizeToLineHeightMultiplier);
                const newFontSize = Math.min(defaultTextFontSize, possibeFontSize);
                setTextFontSize(newFontSize);
                console.log("Should Grow! to font size: " + textFontSize);
            }
        };

        adjustEffectTextFontSize();

        window.addEventListener('keydown', adjustEffectTextFontSize);
        return () => {
            window.removeEventListener('keydown', adjustEffectTextFontSize);
        };

    }, [textFontSize]);

    const adjustNameFontSize = () => {

    }


    return (
        <div className="trading-card border border-5 mx-auto">
            <div className="trading-card-name-field text-start mt-2">
                <h5 className='my-auto'>{_card.name}</h5>
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

            <div className="trading-card-effect-field text-start">
                <p ref={effectParagraphElement} id='effect-text' className='effect-text px-2' style={{ fontSize: `${textFontSize}px` }}>{_card.effect}</p>
            </div>

            <div className="trading-card-details">
                <div className="row">
                    <div className="col pe-1">
                        <div className="card-type-field">
                            {_card.type.charAt(0).toUpperCase() + _card.type.slice(1)}
                        </div>
                    </div>
                    {
                        _card.isAce ?
                            <div className={`col p${_card.strength ? 'x' : 's'}-1`}>
                                <div className="card-ace-field">
                                    Ace
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
import { renderToStaticMarkup } from 'react-dom/server';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from "../tab-elements/DisplayCard";

function Exports(props) {
    const _deck = props.deck;

    function GeneratePDF() {
        let numOfCards = 0;

        /* Generate Created Trading Cards (Front) HTML Collection */
        const htmlContainerToPDF = document.createElement('div');
        htmlContainerToPDF.setAttribute('id', 'pdf-container');
        htmlContainerToPDF.classList.add('d-flex', 'flex-wrap');
        htmlContainerToPDF.style.width = '86.7rem';
        document.body.appendChild(htmlContainerToPDF);
        htmlContainerToPDF.innerHTML = renderToStaticMarkup(
            Object.keys(_deck).map((_cardTypes) => {
                const _cards = _deck[_cardTypes].cards;
                return (
                    Object.keys(_cards).map((_cardName) => {
                        return (
                            <div key={_cardName} id={`pdf-cutout-${numOfCards++}`} className="pdf-cutout-border">

                            </div>
                        )
                    })
                )
            })
        );

        const cardElements = document.getElementsByClassName('trading-card');

        for (let x = 0; x < numOfCards; x++) {
            const card = cardElements[x].cloneNode(true);
            htmlContainerToPDF.querySelector(`#pdf-cutout-${x}`).appendChild(card);
        }
        /* End of Generating Created Trading Cards (Front) HTML Collection */

        /* Generate Card Back Cover HTML Collection */
        const backCoverContainerToPDF = document.createElement('div');
        backCoverContainerToPDF.setAttribute('id', 'pdf-container');
        backCoverContainerToPDF.classList.add('d-flex', 'flex-wrap');
        backCoverContainerToPDF.style.width = '86.7rem';
        document.body.appendChild(backCoverContainerToPDF);

        let numOfBackCards = 0;
        const backArray = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8'];
        backCoverContainerToPDF.innerHTML = renderToStaticMarkup(
            backArray.map((backName) => {
                return (
                    <div key={backName + "-back"} id={`pdf-cutout-${numOfBackCards++}`} className="pdf-cutout-border">

                    </div>
                )
            })
        );
        const hiddenCardBack = document.createElement('div');
        hiddenCardBack.classList.add('card-back');
        document.body.appendChild(hiddenCardBack);
        for (let y = 0; y < numOfBackCards; y++) {
            backCoverContainerToPDF.querySelector(`#pdf-cutout-${y}`).appendChild(hiddenCardBack.cloneNode(true));
        }
        hiddenCardBack.remove();
        /* End of Card Back Cover HTML Collection */

        const htmlWidthFront = htmlContainerToPDF.offsetWidth;
        const htmlWidthBack = backCoverContainerToPDF.offsetWidth, htmlHeight = backCoverContainerToPDF.offsetHeight;

        const doc = new jsPDF("p", "px", "a4");

        const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();
        const imgResizeRatioWidth = 1.20918984280532, imgResizeRatioHeight = 0.5988023952095808;
        const imgWidth = pdfPageWidth * imgResizeRatioWidth, imgHeight = pdfPageHeight * imgResizeRatioHeight;
        const pdfOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), pdfOffsetY = (pdfPageHeight / 2) - (imgWidth * 1.175);

        html2canvas(htmlContainerToPDF, { allowTaint: true, useCORS: true, width: htmlWidthFront + 1, height: htmlHeight + 1 }).then((canvas) => {
            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: pdfOffsetX, y: pdfOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });
        });
        html2canvas(backCoverContainerToPDF, { allowTaint: true, useCORS: true, width: htmlWidthBack + 1, height: htmlHeight + 1 }).then((canvas) => {
            doc.addPage({ format: 'a4', orientation: 'p' });
            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: pdfOffsetX, y: pdfOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });
            doc.save("document.pdf");
        });

        htmlContainerToPDF.remove();
        backCoverContainerToPDF.remove();
    }

    return (
        <div className="pb-5">

            <div className="row gy-5 mx-0 my-2">
                {
                    Object.keys(_deck).map(
                        (_types) => {
                            return (
                                Object.keys(_deck[_types].cards).map(
                                    (_cardName) => {
                                        const _cardObject = { ..._deck[_types].cards[_cardName], name: _cardName, type: _types.slice(0, -1) };
                                        return (
                                            <div key={_cardName} className="col d-flex justify-content-center mt-3">
                                                <DisplayCard cardObject={_cardObject} />
                                            </div>
                                        )
                                    }
                                )
                            )
                        }
                    )
                }
            </div>

            <button
                disabled={Object.keys(_deck.warriors.cards).length + Object.keys(_deck.items.cards).length + Object.keys(_deck.invocations.cards).length === 0}
                className='btn btn-danger bottom-button w-100'
                onClick={() => GeneratePDF()}>Export to PDF
            </button>
        </div>
    )
}

export default Exports;
import { renderToStaticMarkup } from 'react-dom/server';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from "../tab-elements/DisplayCard";

function Exports(props) {
    const _deck = props.deck;

    function GeneratePDF() {
        const htmlContainerToPDF = document.createElement('div');
        htmlContainerToPDF.setAttribute('id', 'pdf-container');
        htmlContainerToPDF.classList.add('d-flex', 'flex-wrap');
        htmlContainerToPDF.style.width = '86.7rem';
        document.body.appendChild(htmlContainerToPDF);

        let numOfCards = 0;

        htmlContainerToPDF.innerHTML = renderToStaticMarkup(
            Object.keys(_deck).map((_cardTypes) => {
                const _cards = _deck[_cardTypes].cards;
                return (
                    Object.keys(_cards).map((_cardName) => {
                        const _cardObject = { ..._cards[_cardName], name: _cardName, type: _cardTypes.slice(0, -1) };
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

        const htmlWidth = htmlContainerToPDF.offsetWidth, htmlHeight = htmlContainerToPDF.offsetHeight;

        html2canvas(htmlContainerToPDF, { allowTaint: true, useCORS: true, width: htmlWidth + 1, height: htmlHeight + 1 }).then((canvas) => {
            const doc = new jsPDF("p", "px", "a4");

            const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();
            const imgResizeRatioWidth = 1.20918984280532, imgResizeRatioHeight = (numOfCards < 5) ? 0.2994011976047904 : 0.5988023952095808;
            const imgWidth = pdfPageWidth * imgResizeRatioWidth, imgHeight = pdfPageHeight * imgResizeRatioHeight;
            const htmlImgOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), htmlImgOffsetY = (pdfPageHeight / 2) - (imgWidth * ((numOfCards < 5) ? .85 : 1.20));

            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: htmlImgOffsetX, y: htmlImgOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });
            doc.save('document.pdf');
        });

        htmlContainerToPDF.remove();
    }

    return (
        <div className="">

            <div className="row row-cols-auto g-1 mx-0 my-3">
                {
                    Object.keys(_deck).map(
                        (_types) => {
                            return (
                                Object.keys(_deck[_types].cards).map(
                                    (_cardName) => {
                                        const _cardObject = { ..._deck[_types].cards[_cardName], name: _cardName, type: _types.slice(0, -1) };
                                        return (
                                            <div key={_cardName} className="col px-auto">
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
                disabled={Object.keys(_deck).length + Object.keys(_deck).length + Object.keys(_deck).length === 0}
                className='btn btn-danger w-100'
                onClick={() => GeneratePDF()}>Export to PDF</button>
        </div>
    )
}

export default Exports;
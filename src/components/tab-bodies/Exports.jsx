import { renderToStaticMarkup } from 'react-dom/server';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from "../tab-elements/DisplayCard";

function Exports(props) {
    const _deck = props.deck;

    function GeneratePDF() {
        let numOfCards = 0;

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

        /* Generate Card Back Cover HTML Collection */
        const backCoverContainerToPDF = document.createElement('div');
        backCoverContainerToPDF.setAttribute('id', 'pdf-container');
        backCoverContainerToPDF.classList.add('d-flex', 'flex-wrap');
        backCoverContainerToPDF.style.width = '86.7rem';
        document.body.appendChild(backCoverContainerToPDF);

        numOfCards = 0;
        backCoverContainerToPDF.innerHTML = renderToStaticMarkup(
            Object.keys(_deck).map((_cardTypes) => {
                const _cards = _deck[_cardTypes].cards;
                return (
                    Object.keys(_cards).map((_cardName) => {
                        return (
                            <div key={_cardName + "-back"} id={`pdf-cutout-${numOfCards++}`} className="pdf-cutout-border">

                            </div>
                        )
                    })
                )
            })
        );
        const hiddenCardBack = document.getElementById('hidden-container').querySelector('#hidden-card-back').cloneNode(true);
        hiddenCardBack.classList.remove('d-none');
        for (let y = 0; y < numOfCards; y++) {
            backCoverContainerToPDF.querySelector(`#pdf-cutout-${y}`).appendChild(hiddenCardBack.cloneNode(true));
        }
        hiddenCardBack.remove();
        /* End of Card Back Cover HTML Collection */

        const htmlWidth = htmlContainerToPDF.offsetWidth, htmlHeight = htmlContainerToPDF.offsetHeight;

        const doc = new jsPDF("p", "px", "a4");

        html2canvas(htmlContainerToPDF, { allowTaint: true, useCORS: true, width: htmlWidth + 1, height: htmlHeight + 1 }).then((canvas) => {
            const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();
            const imgResizeRatioWidth = 1.20918984280532, imgResizeRatioHeight = (numOfCards < 5) ? 0.2994011976047904 : 0.5988023952095808;
            const imgWidth = pdfPageWidth * imgResizeRatioWidth, imgHeight = pdfPageHeight * imgResizeRatioHeight;
            const htmlImgOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), htmlImgOffsetY = (pdfPageHeight / 2) - (imgWidth * ((numOfCards < 5) ? .85 : 1.20));

            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: htmlImgOffsetX, y: htmlImgOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });
        });
        html2canvas(backCoverContainerToPDF, { allowTaint: true, useCORS: true, width: htmlWidth + 1, height: htmlHeight + 1 }).then((canvas) => {
            doc.addPage({ format: 'a4', orientation: 'p' });

            const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();
            const imgResizeRatioWidth = 1.20918984280532, imgResizeRatioHeight = (numOfCards < 5) ? 0.2994011976047904 : 0.5988023952095808;
            const imgWidth = pdfPageWidth * imgResizeRatioWidth, imgHeight = pdfPageHeight * imgResizeRatioHeight;
            const htmlImgOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), htmlImgOffsetY = (pdfPageHeight / 2) - (imgWidth * ((numOfCards < 5) ? .85 : 1.20));

            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: htmlImgOffsetX, y: htmlImgOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });

            doc.save("document.pdf");
        });

        htmlContainerToPDF.remove();
        backCoverContainerToPDF.remove();
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
                onClick={() => GeneratePDF()}>Export to PDF
            </button>
            <div id='hidden-container'>
                <div id='hidden-card-back' className='card-back d-none'></div>
            </div>
        </div>
    )
}

export default Exports;
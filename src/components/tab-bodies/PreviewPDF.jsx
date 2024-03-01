import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from "../tab-elements/DisplayCard";
import { useRef } from 'react';


function PreviewPDF(props) {
    const _deck = props.deckData;
    let numOfCards = 0;

    function GeneratePDF() {
        const deckContainer = document.getElementById('pdf-container').cloneNode(true);
        document.body.appendChild(deckContainer);
        deckContainer.style.width = '86.7rem';
        deckContainer.classList.remove('hide-cutout');

        const htmlWidth = deckContainer.offsetWidth, htmlHeight = deckContainer.offsetHeight;

        html2canvas(deckContainer, { allowTaint: true, useCORS: true, width: htmlWidth + 1, height: htmlHeight + 1 }).then((canvas) => {
            const doc = new jsPDF("p", "px", "a4");

            const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();

            const imgResizeRatioWidth = 1.20918984280532, imgResizeRatioHeight = 0.5988023952095808;

            const imgWidth = pdfPageWidth * imgResizeRatioWidth, imgHeight = pdfPageHeight * imgResizeRatioHeight;

            const htmlImgOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), htmlImgOffsetY = (pdfPageHeight / 2) - (imgWidth * 1.25);

            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: htmlImgOffsetX, y: htmlImgOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });

            doc.save('document.pdf');
        });
        deckContainer.remove();
    }

    return (
        <div className="card-body">

            <div id='pdf-container' className="d-flex flex-wrap hide-cutout">
                {
                    Object.keys(_deck).map((_cardTypes) => {
                        const _cards = _deck[_cardTypes].cards;
                        return (
                            Object.keys(_cards).map((_cardName) => {
                                const _cardObject = { ..._cards[_cardName], name: _cardName, type: _cardTypes.slice(0, -1) };
                                return (
                                    <div key={_cardName} id={`pdf-cutout-${numOfCards++}`} className="pdf-cutout-border">
                                        <DisplayCard cardObject={_cardObject} />
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>


            <button className='btn btn-danger mt-4 w-100' onClick={() => GeneratePDF()}>Export to PDF</button>

        </div>
    )
}

export default PreviewPDF;
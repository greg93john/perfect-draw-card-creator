import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from "../tab-elements/DisplayCard";


function PreviewPDF(props) {
    const _deck = props.deckData;
    let i = 0;

    function GeneratePDF() {
        const deckContainer = document.getElementById('pdf-container');
        const htmlWidth = deckContainer.offsetWidth, htmlHeight = deckContainer.offsetHeight;

        html2canvas(deckContainer, { allowTaint: true, useCORS: true, width: htmlWidth, height: htmlHeight + 3 }).then((canvas) => {
            const doc = new jsPDF("p", "px", "a4");

            const pdfPageWidth = doc.internal.pageSize.getWidth(), pdfPageHeight = doc.internal.pageSize.getHeight();

            const imgResizeRatio = Math.min(pdfPageWidth / htmlWidth, pdfPageHeight / htmlHeight);

            const imgWidth = htmlWidth * imgResizeRatio, imgHeight = htmlHeight * imgResizeRatio;

            const htmlImgOffsetX = (pdfPageWidth / 2) - (imgHeight / 2), htmlImgOffsetY = (pdfPageHeight / 2) - (imgWidth * 1.25);

            doc.addImage({ imageData: canvas.toDataURL("image/png"), format: 'PNG', x: htmlImgOffsetX, y: htmlImgOffsetY, width: imgWidth, height: imgHeight, rotation: 270 });

            doc.save('document.pdf');
        });
    }

    return (
        <div className="card-body main-container">

            <div id='pdf-container' className="pdf-preview-container d-flex flex-wrap">
                {
                    Object.keys(_deck).map((_cardTypes) => {
                        const _cards = _deck[_cardTypes].cards;
                        return (
                            Object.keys(_cards).map((_cardName) => {
                                const _cardObject = { ..._cards[_cardName], name: _cardName, type: _cardTypes.slice(0, -1) };
                                return (
                                    <div key={_cardName} id={`pdf-cutout-${i++}`} className="d-inline-block pdf-cutout-border">
                                        <div className="border border-dark border-5 m-1">
                                            <DisplayCard cardObject={_cardObject} />
                                        </div>
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
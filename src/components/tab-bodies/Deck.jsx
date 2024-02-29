import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import DisplayCard from '../tab-elements/DisplayCard';
import DisplayTypeCategory from '../tab-elements/DisplayTypeCategory';
import CreateCardForm from '../tab-elements/CreateCardForm';


function Deck(props) {
    const _deck = props.deckData;
    const [createCard, setCreateCard] = useState(
        {
            name: "",
            type: "warrior",
            strength: "weak",
            isAce: false,
            customImgURL: null,
            effect: "",
            id: "createCard"
        }
    );


    function SubmitCreatedCard() {
        if (!_deck[createCard.type + 's'].cards.hasOwnProperty(createCard.name)) {
            const _typeName = createCard.type + "s";
            createCard.id = Object.keys(_deck[_typeName].cards).length;
            props.updateDeckData([_typeName], { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } });
            ClearCreateCardInputFields();
        } else {
            alert(`The ${createCard.type} card "${createCard.name}" already exists.`);
        }
    }

    function DeleteExistingCard(_card) {
        delete _deck[_card.type + 's'].cards[_card.name];

        let i = 0;
        Object.keys(_deck[_card.type + 's'].cards).map((_cardName) => { _deck[_card.type + 's'].cards[_cardName].id = i; i++; });
        props.updateDeckData([_card.type + 's'], { ..._deck[_card.type + 's'] });
    }

    function ClearCreateCardInputFields() {
        document.getElementById('create-card-form').reset();

        setCreateCard(
            {
                ...createCard,
                name: "",
                effect: "",
                isAce: false,
                customImgURL: null
            }
        );
    }

    function GeneratePDF() {
        const tradingCardElementsHTML = document.getElementsByClassName("trading-card");

        const deckRowContainer = document.createElement('div');
        deckRowContainer.classList.add('row', 'row-cols-3');

        let cardWidth, cardHeight;

        for (let i = 0; i < tradingCardElementsHTML.length; i++) {
            const card = tradingCardElementsHTML[i];
            cardWidth = card.offsetwidth; cardHeight = card.offsetHeight;
            const columnContainer = document.createElement('div');
            columnContainer.classList.add('col', 'mb-5');
            columnContainer.appendChild(card.cloneNode(true));
            columnContainer.lastChild.classList.add('mx-auto');
            deckRowContainer.appendChild(columnContainer.cloneNode(true));
        }
        document.body.appendChild(deckRowContainer);

        const doc = new jsPDF("p", "px", "a4");

        const html = deckRowContainer;
        const containerWidth = html.offsetWidth;
        const containerHeight = html.offsetHeight;


        html2canvas(html, { allowTaint: true, useCORS: true, width: containerWidth}).then((canvas) => {
            doc.addImage(canvas.toDataURL("image/png"), 'PNG', ((canvas.width/2) - (containerWidth/2)), canvas.height/24, canvas.width / 3, canvas.height / 3);
            doc.save("document.pdf");
        });

        document.body.removeChild(deckRowContainer);
    }

    return (
        <div className="card-body">
            <div className="border border-dark rounded my-2">
                <h2>Create New Card:</h2>
                <hr />

                <div className="row row-cols-2 mx-0 mb-3">
                    <div className='col'>
                        <CreateCardForm createCard={createCard} submitCreatedCard={SubmitCreatedCard} setCreateCard={setCreateCard} />
                    </div>
                    <div className='col'>
                        <DisplayCard cardObject={createCard} isCreateCard={true} />
                    </div>
                </div>

            </div>
            {
                Object.keys(_deck).map((_cardsType) => {
                    return (
                        Object.keys(_deck[_cardsType].cards).length > 0 ? <DisplayTypeCategory cards={_deck[_cardsType].cards} cardsType={_cardsType} deleteExistingCardMethod={DeleteExistingCard} key={_cardsType + _deck[_cardsType].id} /> : ""
                    )
                })
            }
            <button className='btn btn-danger mt-4 w-100' onClick={() => GeneratePDF()}>Export to PDF</button>
        </div>
    );
}

export default Deck;
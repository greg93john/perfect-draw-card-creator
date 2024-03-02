import { useState } from 'react';
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
        if (_deck[createCard.type + 's'].cards.hasOwnProperty(createCard.name)) {
            alert(`The ${createCard.type} card "${createCard.name}" already exists.`);
        } else if (Object.keys(_deck.warriors.cards).length + Object.keys(_deck.items.cards).length + Object.keys(_deck.invocations.cards).length >= 8) {
            alert("Cannot have more than 8 cards at a time, please delete a card first.");
        } else {
            const _typeName = createCard.type + "s";
            createCard.id = Object.keys(_deck[_typeName].cards).length;
            props.updateDeckData([_typeName], { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } });
            ClearCreateCardInputFields();
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
        </div>
    );
}

export default Deck;
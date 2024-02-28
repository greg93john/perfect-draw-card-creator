import { useState } from 'react';
import DisplayCard from '../tab-elements/DisplayCard';
import DisplayTypeCategory from '../tab-elements/DisplayTypeCategory';
import CreateCardForm from '../tab-elements/CreateCardForm';


function Deck(props) {
    const _deck = props.charData.deck;
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
            props.updateCharData("deck", { ..._deck, [_typeName]: { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } } });
            ClearCreateCardInputFields();
        } else {
            alert(`The ${createCard.type} card "${createCard.name}" already exists.`);
        }
    }

    function DeleteExistingCard(_card) {
        delete _deck[_card.type + 's'].cards[_card.name]

        let i = 0;
        Object.keys(_deck[_card.type + 's'].cards).map((_cardName) => { _deck[_card.type + 's'].cards[_cardName].id = i; i++; });
        console.log(_deck);
        props.updateCharData("deck", { ..._deck });
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
            {
                Object.keys(_deck).map((_cardsType) => {
                    return (
                        Object.keys(_deck[_cardsType].cards).length > 0 ? <DisplayTypeCategory cards={_deck[_cardsType].cards} cardsType={_cardsType} deleteExistingCardMethod={DeleteExistingCard} key={_cardsType + _deck[_cardsType].id} /> : ""
                    )
                })
            }

            <div className="border border-dark rounded my-2">
                <h2>Create New Card:</h2>
                <hr />

                <div className="row roq-cols-2 mx-0">
                    <div className='col'>
                        <CreateCardForm createCard={createCard} submitCreatedCard={SubmitCreatedCard} setCreateCard={setCreateCard} />
                    </div>
                    <div className='col'>
                        <DisplayCard cardObject={createCard} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deck;
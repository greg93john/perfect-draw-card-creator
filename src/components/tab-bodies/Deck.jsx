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
        const _typeName = createCard.type + "s";
        createCard.id = Object.keys(_deck[_typeName].cards).length;
        props.updateCharData("deck", { ..._deck, [_typeName]: { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } } });
        ClearCreateCardInputFields();
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
                        <DisplayTypeCategory cards={_deck[_cardsType].cards} cardsType={_cardsType} key={_cardsType + _deck[_cardsType].id} />
                    )
                })
            }

            <div className="border border-dark rounded my-2">
                <h2>Create New Card:</h2>
                <hr />

                <div className="row roq-cols-2 mx-0">
                    <div className='col'>
                        <CreateCardForm  createCard={createCard} submitCreatedCard={SubmitCreatedCard} setCreateCard={setCreateCard} />
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
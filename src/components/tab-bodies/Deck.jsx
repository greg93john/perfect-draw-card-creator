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
            effects:
                [
                    {
                        id: 0,
                        description: ""
                    }
                ],
            flavor: ""
        }
    ), [prevStrength, setPrevStrength] = useState(createCard.strength);


    function SubmitCreatedCard() {
        const _typeName = createCard.type + "s";
        createCard.id = Object.keys(_deck[_typeName].cards).length;
        props.updateCharData("deck", { ..._deck, [_typeName]: { ..._deck[_typeName], cards: { ..._deck[_typeName].cards, [createCard.name]: createCard } } });
        ClearCreateCardInputFields();
    }


    function HandleCardCreatorChange(attribute, val) {
        let _temp = createCard;

        if (attribute === "type" && val === "invocation") {
            setPrevStrength(_temp.strength);
            _temp.strength = "";
        } else if (attribute === "type" && val !== "invocation" && _temp.strength === "") {
            _temp.strength = prevStrength;
        }

        _temp[attribute] = val;
        setCreateCard(
            { ..._temp }
        );
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
                        <CreateCardForm submitCreatedCard={SubmitCreatedCard} createCard={createCard} setCreateCard={setCreateCard} />
                    </div>
                    <div className='col'>
                        <DisplayCard isCreateCard={true} cardObject={createCard} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Deck;
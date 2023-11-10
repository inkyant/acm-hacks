import { useState } from "react";
import Card from "./card";

export default function CardBank({startCards}) {

    const [cards, setCards] = useState(startCards)

    const removeCard = id => {
        setCards(oldCards => { return oldCards.filter(c => c.id != id) })
    }

    return (
        <div>
            {cards.map((card) => {
                return (<Card cardData={card} key={card.id} removeCard={() => removeCard(card.id)} />);
            })}
        </div>
    );
}
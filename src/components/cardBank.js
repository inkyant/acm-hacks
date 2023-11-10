import { useState } from "react";
import Card from "./card";

export default function CardBank({startCards}) {

    const [cards, setCards] = useState(startCards)

    const removeCard = id => {
        setCards(oldCards => { return oldCards.filter(c => c.id != id) })
    }

    return (
        <div className = "cardBank">
            <div className = "sectionTitle">Class List</div>
            {cards.map((card) => {
                return (<Card title={card.title} id={card.id} key={card.id} removeCard={() => removeCard(card.id)} />);
            })}
        </div>
    );
}
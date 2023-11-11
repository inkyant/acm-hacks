import { useState } from "react";
import Card from "./card";
import { useDrop } from "react-dnd";
import Search from "./search"

export default function CardBank({ startCards }) {

    const [cards, setCards] = useState(startCards)

    const [, drop] = useDrop(() => ({
        accept: "class",
        drop: (item) => addCard(item),
    }));

    const addCard = ({ data, remove }) => {
        remove()
        setCards(oldCards => [...oldCards, data])
    }

    const removeCard = id => {
        setCards(oldCards => { return oldCards.filter(c => c.id !== id) })
    }

    return (
        <div className="cardBank" ref={drop}>
            <div className="sectionTitle">Class List</div>
            <Search addClass={(d) => addCard({data: d, remove: ()=>{}})}></Search>
            {cards.map((card) => {
                return (<Card cardData={card} key={card.id} preqCleared={true} removeCard={() => removeCard(card.id)} />);
            })}
        </div>
    );
}
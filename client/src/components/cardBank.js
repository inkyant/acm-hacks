import { useState } from "react";
import Card from "./card";
import { getClassById } from "../App";
import { useDrop } from "react-dnd";
import Search from "./search"

export default function CardBank({ startCards }) {

    const [cards, setCards] = useState(startCards)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "class",
        drop: (item) => addCard(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    const addCard = ({ id, remove }) => {
        remove()
        setCards(oldCards => [...oldCards, getClassById(id)])
    }

    const removeCard = id => {
        setCards(oldCards => { return oldCards.filter(c => c.id !== id) })
    }

    return (
        <div className="cardBank" ref={drop}>
            <div className="sectionTitle">Class List</div>
            <Search></Search>
            {cards.map((card) => {
                return (<Card cardData={card} key={card.id} preqCleared={true} removeCard={() => removeCard(card.id)} />);
            })}
        </div>
    );
}
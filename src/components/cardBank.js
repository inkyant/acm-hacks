import Card from "./card";

export default function CardBank({cards}) {
    return (
        <div>
            {cards.map((card) => {
                return (<Card title={card.title} id={card.id} />);
            })}
        </div>
    );
}
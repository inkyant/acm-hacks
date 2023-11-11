
import { useDrop } from "react-dnd";
import Card from "./card";
import './quarter.css'


export default function Quarter({ sectionTitle, classes, addClass, removeClass, isAllowedClass }) {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "class",
        drop: (item) => addClass(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    return (
        <div className="quarter" style={{ opacity: isOver ? 0.5 : 1 }} ref={drop}>
            <div className="sectionTitle">{sectionTitle}</div>
            {classes.map((card) => {
                return (<Card cardData={card} key={card.id} preqCleared={(card) => isAllowedClass()} removeCard={() => removeClass(card.id)} />);
            })}
        </div>
    );
}

import { useDrop } from "react-dnd";
import Card from "./card";
import './quarter.css'


export default function Quarter({ sectionTitle, classes, addClass, removeClass }) {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "class",
        drop: (item) => addClass(item),
        canDrop: (item) => canAddClass(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const canAddClass = ({ data }) => {
        // can add class if not already added, and
        let x = !classes.map((c) => c.id).includes(data.id)
        // if <= 19 credits; classes.reduce(...) sums the credits
        x &= classes.reduce((partialSum, a) => partialSum + a.credits, 0) + data.credits <= 19
        return x
    }

    return (
        <div className="quarter" style={{ opacity: isOver && canDrop ? 0.5 : 1 }} ref={drop}>
            <div className="sectionTitle">{sectionTitle}</div>
            {classes.map((card) => {
                return (<Card cardData={card} key={card.id} preqCleared={true} removeCard={() => removeClass(card.id)} />);
            })}
        </div>
    );
}
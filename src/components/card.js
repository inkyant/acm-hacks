
import './card.css';
import {useDrag} from 'react-dnd';

export default function Card({title, text, id, removeCard}) {

    // set up dragging functionality
    // isDragging is a bool if the component is being dragged
    // drag is a ref that we give to the object so that the library knows which object we want to be draggable
    const [{isDragging}, drag] = useDrag(() => ({
        type: "class", // each draggable needs a "type", but we only have one type of draggable
         // we want the place we drag to get these things:
        item: { 
            id: id,
            remove: () => removeCard(),
        },
        collect: (monitor) => ({
            // we want to have "isDragging", so we get it from monitor
            isDragging: !!monitor.isDragging(), 
        }),
    }))

    return (
        <div className="card" ref={drag}>
            <div className="title">{title}</div>
            <p>{text}</p>
        </div>
    );
}
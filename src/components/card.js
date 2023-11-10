
import './card.css';
import {useDrag} from 'react-dnd';

export default function Card({title, text, id}) {

    // set up dragging functionality
    // isDragging is a bool if the component is being dragged
    // drag is a ref that we give to the object so that the library knows which object we want to be draggable
    const [{isDragging}, drag] = useDrag(() => ({
        type: "class", // each draggable needs a "type", but we only have one type of draggable
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(), // we want to have "isDragging" come out, so we get it from monitor 
        }),
    }))

    return (
        <div className="card" ref={drag} style={{backgroundColor: isDragging ? 'red' : 'blue'}}>
            <div className="title">{title}</div>
            <p>{text}</p>
        </div>
    );
}
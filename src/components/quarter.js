
import { useDrop } from "react-dnd";
import { useState } from "react";
import { classList, getClassById } from "../App";
import Card from "./card";
import './quarter.css'


export default function Quarter() {

    const [classes, setClasses] = useState([])
    const [{isOver, canDrop}, drop] = useDrop(() => ({
      accept: "class",
      drop: (item) => addClass(item),
      canDrop: (item) => canAddClass(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      })
    }));
  
    const addClass = ({id}) => {
      console.log(id)
      setClasses((sched) => [...sched, getClassById(id)])
    };

    const canAddClass = ({id}) => {
        return !classes.includes(getClassById(id)) && classes.length < 3
    }

    return (
        <div className="quarter" ref={drop}>
            {classes.map((card) => {
                return (<Card title={card.title} id={card.id} />);
            })}
        </div>
    );
}
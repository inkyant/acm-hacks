
import { useDrop } from "react-dnd";
import { useState } from "react";
import { getClassById } from "../App";
import Card from "./card";
import './quarter.css'


export default function Quarter({ sectionTitle }) {

    const [classes, setClasses] = useState([])

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "class",
        drop: (item) => addClass(item),
        canDrop: (item) => canAddClass(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        })
    }));

    const addClass = ({ id, remove }) => {
        remove()
        setClasses((sched) => [...sched, getClassById(id)])
    }

    const canAddClass = ({ id }) => {
        // really dumb way to access current state, use setState...
        let x = false
        setClasses(classes => {
            // can add class if not already added, and
            x = !classes.map((c) => c.id).includes(id)
            // if <= 19 credits, classes.reduce(...) sums the credits
            x &= classes.reduce((partialSum, a) => partialSum + a.credits, 0) + getClassById(id).credits <= 19
            return classes
        })
        return x
    }

    const removeCard = id => {
        setClasses(oldCards => { return oldCards.filter(c => c.id != id) })
    }

    const checkPrereq = (classesTaken, prereq) => {
        return prereq.every((oneReq) => {
            return oneReq.some((elem) => {
                return classesTaken.includes(elem)
            })
        })
    }

    return (
        <div className="quarter" style={{ opacity: isOver && canDrop ? 0.5 : 1 }} ref={drop}>
            <div className="sectionTitle">{sectionTitle}</div>
            {classes.map((card) => {
                // let prevClass = classes.map((e) => e.title) + getPrevClasses()
                // let c = checkPrereq(prevClass, card.prereq)
                return (<Card cardData={card} key={card.id} preqCleared={true} removeCard={() => removeCard(card.id)} />);
            })}
        </div>
    );
}
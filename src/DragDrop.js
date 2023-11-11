
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList, getClassById } from "./App";
import { useState } from "react";

export default function DragDrop() {

    const [classes, setClasses] = useState([classList, [[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []]])

    return (
        <>
            <div className="topTitle">Title Page temp</div>
            <div className="yearContain">
                <Year year={1} yearClasses={classes[1]} setClasses={setClasses} />
                <Year year={2} yearClasses={classes[2]} setClasses={setClasses} />
                <Year year={3} yearClasses={classes[3]} setClasses={setClasses} />
                <Year year={4} yearClasses={classes[4]} setClasses={setClasses} />
            </div>
            <CardBank startCards={classes[0]} />
        </>
    );
}

function Year({ year, yearClasses, setClasses }) {

    const addClass = (i, { id, remove }) => {
        console.log(year, id)
        remove()
        setClasses((oldClasses) => {
            const newClasses = JSON.parse(JSON.stringify(oldClasses))
            newClasses[year][i].push(getClassById(id))
            return newClasses
        })
    }

    const removeClass = (quarter, id) => {
        setClasses(oldClasses => {
            let newClasses = [...oldClasses]
            newClasses[year][quarter] = newClasses[year][quarter].filter(c => c.id !== id)
            return newClasses
        })
    }

    return (
        <div className="year">
            <Quarter sectionTitle={"Fall " + year}   classes={yearClasses[0]} addClass={(item) => addClass(0, item)} removeClass={(id) => removeClass(0, id)} />
            <Quarter sectionTitle={"Winter " + year} classes={yearClasses[1]} addClass={(item) => addClass(1, item)} removeClass={(id) => removeClass(1, id)} />
            <Quarter sectionTitle={"Spring " + year} classes={yearClasses[2]} addClass={(item) => addClass(2, item)} removeClass={(id) => removeClass(2, id)} />
            <Quarter sectionTitle={"Summer " + year} classes={yearClasses[3]} addClass={(item) => addClass(3, item)} removeClass={(id) => removeClass(3, id)} />
        </div>
    );
}
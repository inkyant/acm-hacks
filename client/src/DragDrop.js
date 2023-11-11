
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList } from "./App";
import { useState } from "react";

export default function DragDrop() {

    const [classes, setClasses] = useState([classList, [[], [], [], []], [[], [], [], []], [[], [], [], []], [[], [], [], []]])

    const isAllowedClass = (y, q, classData) => {
        return true
    }

    return (
        <>
            <div className="topTitle">SlugPlan</div>
            <div className="yearContain">
                <Year year={1} yearClasses={classes[1]} setClasses={setClasses} isAllowedClass={(q, d) => isAllowedClass(1, q, d)} />
                <Year year={2} yearClasses={classes[2]} setClasses={setClasses} isAllowedClass={(q, d) => isAllowedClass(2, q, d)} />
                <Year year={3} yearClasses={classes[3]} setClasses={setClasses} isAllowedClass={(q, d) => isAllowedClass(3, q, d)} />
                <Year year={4} yearClasses={classes[4]} setClasses={setClasses} isAllowedClass={(q, d) => isAllowedClass(4, q, d)} />
            </div>
            <CardBank startCards={classes[0]} />
        </>
    );
}

function Year({ year, yearClasses, setClasses, isAllowedClass }) {

    const addClass = (i, { data, remove }) => {
        remove()
        setClasses((oldClasses) => {
            const newClasses = JSON.parse(JSON.stringify(oldClasses))
            newClasses[year][i].push(data)
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
            <Quarter sectionTitle={"Fall " + year}   classes={yearClasses[0]} addClass={(item) => addClass(0, item)} removeClass={(id) => removeClass(0, id)} isAllowedClass={(d) => isAllowedClass(0, d)} />
            <Quarter sectionTitle={"Winter " + year} classes={yearClasses[1]} addClass={(item) => addClass(1, item)} removeClass={(id) => removeClass(1, id)} isAllowedClass={(d) => isAllowedClass(1, d)} />
            <Quarter sectionTitle={"Spring " + year} classes={yearClasses[2]} addClass={(item) => addClass(2, item)} removeClass={(id) => removeClass(2, id)} isAllowedClass={(d) => isAllowedClass(2, d)} />
            <Quarter sectionTitle={"Summer " + year} classes={yearClasses[3]} addClass={(item) => addClass(3, item)} removeClass={(id) => removeClass(3, id)} isAllowedClass={(d) => isAllowedClass(3, d)} />
        </div>
    );
}
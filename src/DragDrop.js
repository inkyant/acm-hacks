
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList } from "./App";

export default function DragDrop() {

    return (
        <>
        <div className="topTitle">Title Page temp</div>
            <div className="yearContain">
                <Year title="Frosh" />
                <Year title="Soph" />
                <Year title="Junior" />
                <Year title="Senior" />
            </div>
            <CardBank startCards={classList} />
        </>
    );
}

function Year({ title }) {
    return (
        <div className="year">
            <Quarter sectionTitle={"Fall " + title} />
            <Quarter sectionTitle={"Winter " + title} />
            <Quarter sectionTitle={"Spring " + title} />
            <Quarter sectionTitle={"Summer " + title} />
        </div>
    );
}
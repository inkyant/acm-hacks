
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList } from "./App";

export default function DragDrop() {

    return (
        <>
        <div style={{width: "80%", height: "100%", display: "flex"}}>
            <Quarter>
            </Quarter>
            <Quarter />
            <Quarter />
            <Quarter />
        </div>
        <CardBank startCards={classList} />
        </>
    );
}
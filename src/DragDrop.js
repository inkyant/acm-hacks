
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList } from "./App";

export default function DragDrop() {

    return (
        <>
        <div style={{width: "80%", height: "100%", display: "flex"}}>
            <Quarter sectionTitle={"Fall"}>
            </Quarter >
            <Quarter sectionTitle={"Winter"}/>
            <Quarter sectionTitle={"Spring"}/>
            <Quarter sectionTitle={"Summer"}/>
        </div>
        <CardBank startCards={classList} />
        </>
    );
}
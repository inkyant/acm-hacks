
import CardBank from "./components/cardBank";
import Quarter from "./components/quarter";
import { classList } from "./App";

export default function DragDrop() {

    return (
        <>
        <div style={{width: "80%", height: "100%"}}>
            <div className="year">
            <Quarter sectionTitle={"Fall Fresh"}/>
            <Quarter sectionTitle={"Winter Fresh"}/>
            <Quarter sectionTitle={"Spring Fresh"}/>
            <Quarter sectionTitle={"Summer Fresh"}/>
            </div>
            <div className="year">
            <Quarter sectionTitle={"Fall Soph"}/>
            <Quarter sectionTitle={"Winter Soph"}/>
            <Quarter sectionTitle={"Spring Soph"}/>
            <Quarter sectionTitle={"Summer Soph"}/>
            </div>
            <div className="year">
            <Quarter sectionTitle={"Fall Junior"}/>
            <Quarter sectionTitle={"Winter Junior"}/>
            <Quarter sectionTitle={"Spring Junior"}/>
            <Quarter sectionTitle={"Summer Junior"}/>
            </div>
            <div className="year">
            <Quarter sectionTitle={"Fall Senior"}/>
            <Quarter sectionTitle={"Winter Senior"}/>
            <Quarter sectionTitle={"Spring Senior"}/>
            <Quarter sectionTitle={"Summer Senior"}/>
            </div>
        </div>
        <CardBank startCards={classList} />
        </>
    );
}
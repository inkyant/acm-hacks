import Quarter from "./quarter";
import './schedule.css'

export default function Schedule() {
    return (
        <div className="schedule">
            <Quarter />
            <Quarter />
            <Quarter />
            <Quarter />
        </div>
    );
}
import Card from "./card";
import Quarter from "./quarter";
import './schedule.css'
import './sidebar.css'

export default function Schedule() {
    return (
        <div className="schedule">
            <Quarter>
                <Card title="CSE30" />
            </Quarter>
            <Quarter />
            <Quarter />
            <Quarter />
        </div>
    );
}
import Card from "./card";
import Quarter from "./quarter";
import Classlist from "./classlist";
import './schedule.css'

export default function Schedule() {
    return (
        <div className="schedule">
            <Quarter>
                <Card title="CSE30" />
                <Card title="CSE30" />
            </Quarter>

            <Quarter />
            <Quarter />
            <Quarter />
            <Classlist>
            <Card title="CSE30" />
            </Classlist>
        </div>
    );
}
import Card from "./card";
import Quarter from "./quarter";
import Classlist from "./classlist";
import './schedule.css'

export default function Schedule() {
    return (
        <div className="schedule">
            <Quarter sectiontitle="Fall">
                <Card title="CSE30"/>
                <Card title="CSE30"/>
            </Quarter >

            <Quarter sectiontitle="Winter"/>
            <Quarter sectiontitle="Spring"/>
            <Quarter sectiontitle="Summer"/>
            <Classlist>
            <Card title="CSE30" />
            </Classlist>
        </div>
    );
}
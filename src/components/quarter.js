
import './quarter.css'

export default function Quarter({children}) {

    return (
        <div className="quarter">
            <div className="sectiontitle">title</div>
            {children}
        </div>
    );
}

import './quarter.css'

export default function Quarter({children,sectiontitle}) {

    return (
        <div className="quarter">
            <div className="sectiontitle">{sectiontitle}</div>
            {children}
        </div>
    );
}
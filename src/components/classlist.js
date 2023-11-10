import './classlist.css'

export default function Classlist({children,sectiontitle}) {

    return (
        <div className="classlist">
            <div className="sectiontitle">Class List</div>
            {children}
        </div>
    );
}
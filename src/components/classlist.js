import './classlist.css'

export default function Classlist({children}) {

    return (
        <div className="classlist">
            <div className="sectiontitle">Class List</div>
            {children}
        </div>
    );
}
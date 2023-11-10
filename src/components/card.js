
import './card.css';

export default function Card({title, text}) {

    

    return (
        <div className="card">
            <div className="title">{title}</div>
            <p>{text}</p>
        </div>
    );
}

import { incrementId } from '../App';
import './search.css'
import { useState } from "react";


export default function Search({ addClass }) {

    const [results, setResults] = useState([])

    const handleSearch = (text) => {
        let subject = text.match(/^[a-zA-Z]{2,4}/g)
        let number = text.match(/\d{1,3}[a-zA-Z]?$/g)
        if (subject && number) {
            
            fetch('http://localhost:5000/courses/'+subject+'/'+number)
            .then(res => res.json())
            .then(data => {
                setResults(data)
            })
            .catch(err => console.log(err));
        } else {
            setResults([])
        }
    }

    const handleClick = (d) => {
        d.id = incrementId()
        addClass(d)
    }

    return (
        <div className = "search-top">
            <div className="search">
                <input type="text" placeholder="Search Here" onChange={ e => handleSearch(e.target.value)}/>
            </div>
            <div className="search-results">
                {results.slice(0, 5).map((d, i) => (
                <div className="search-result" key={i} onClick={() => handleClick(d)} style={{cursor: "pointer", marginBottom: '10px'}}>
                    {d.category + d.course_num}
                </div>
                ))}
            </div>
        </div>
    )
}
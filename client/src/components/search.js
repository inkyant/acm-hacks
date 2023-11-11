import React, { useRef } from 'react'
import './search.css'
import { useState } from "react";
import { useEffect } from "react";


export default function Search() {

    useEffect(() => {
        
    }, [])

    const ref = useRef(null)

    const handleKeyDown = ({ key }) => {
        if (key === 'Enter') {
            
            let subject = ref.current.value.match(/[a-zA-Z]{2,3}/g)
            let number = ref.current.value.match(/\d{1,3}.?/g)

            console.log('http://localhost:5000/courses/'+subject+'/'+number)

            fetch('http://localhost:5000/courses/cse/12')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div className = "search-top">
            <div className = 'search'>
                <input ref={ref} type="text" placeholder="Search Here" onKeyDown={handleKeyDown}/>
            </div>
        </div>
    )
}
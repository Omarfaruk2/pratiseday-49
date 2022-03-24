import React from 'react'
import './Card.css'


const Card = (props) => {
    const { strMeal, strArea } = props
    console.log("hellsdfasdf", props)
    return (
        <div className='bg-success name ps-2 h-100 w-100'>
            <h4>Name:{strMeal}</h4>
            <h4>Name:{strArea}</h4>
        </div>
    )
}

export default Card
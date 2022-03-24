import React from 'react'
import './Card.css'
const Card = (props) => {
    console.log("good", props)
    const { strMeal } = props
    return (
        <div className='bg-success name ps-2 h-100 w-100'>
            <h2>{strMeal}</h2>
            <h4>Name:</h4>
        </div>
    )
}

export default Card
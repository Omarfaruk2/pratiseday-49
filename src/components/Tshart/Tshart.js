import React from 'react'
import "./Tshar.css"

const Tshart = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt
    return (
        <div className='t-shart'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} >Add To Card</button>
        </div>
    )
}

export default Tshart
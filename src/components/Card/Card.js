import React from 'react'
import "./Card.css"

const Card = ({ cart, removeFcart }) => {
    // 1. Element veryable
    // 2.Tarnary operetor
    // console.log(cart)

    let command = ""
    if (cart.length === 0) {
        command = <h5>Please Add at least one item !!!</h5>
    }
    else if (cart.length === 1) {
        command = <p>Plese Add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div className='cart'>
            <h2>Items seleted:{cart.length}</h2>
            {
                cart.map(tshart =>
                    <div
                        key={tshart._id}
                        style={{ display: "inline" }}>
                        <p>{tshart.name}</p>
                        <button onClick={() => removeFcart(tshart)}>x</button>
                        <hr />
                    </div>
                )
            }
            {
                cart.length === 0 || <p style={{ backgroundColor: "orange" }}>Yah ! You are buying</p>
            }
            {
                cart.length === 3 && <div style={{ backgroundColor: "red", padding: "7px", borderRadius: "10px" }}>
                    <p>Trigonal</p>
                    <p>Tin jon ke ki diba</p>
                </div>
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button> Remove All</button>}
            {cart.length === 4 && <button style={{ backgroundColor: "yellow" }}>Review Order</button>}
        </div>
    )
}

export default Card
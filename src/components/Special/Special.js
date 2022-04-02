import React, { useContext } from 'react'
import { RingContext } from '../Grandpa/Grandpa'

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div style={{ border: "2px solid red" }}>
            <h4>Special One : {house}</h4>

            <button onClick={() => setHouse(house + 1)} >Add</button>


        </div>
    )
}

export default Special
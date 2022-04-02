import React, { createContext, useState } from 'react'
import Anty from '../Antry/Anty'
import Father from '../Father/Father'
import Uncle from '../Uncle/Uncle'
import "./Grandpa.css"

export const RingContext = createContext("")


const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const handleBuyAHouse = () => {
        setHouse(house + 1)
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <h4>Grandpa</h4>
                <button onClick={() => handleBuyAHouse()}>Buy a House</button>
                <p>House:{house}</p>
                <section style={{ display: "flex", margin: "20px" }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Anty house={house}></Anty>
                </section>
            </div>
        </RingContext.Provider>
    )
}

export default Grandpa
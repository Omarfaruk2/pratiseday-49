import React from 'react'
import Brother from '../Brother/Brother'
import Myself from '../Myself/Myself'
import Sister from '../Sister/Sister'

const Father = ({ house }) => {
    return (
        <div style={{ width: "200px" }}>
            <h4>Father</h4>
            <p>House:{house}</p>
            <Myself house={house}></Myself>
            <Brother house={house}></Brother>
            <Sister house={house}></Sister>
        </div>
    )
}

export default Father
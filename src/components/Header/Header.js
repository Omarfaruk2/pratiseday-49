import React from 'react'
// import { Link } from 'react-router-dom'
import CustomLink from '../CustomLInk/CustomLink'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>This is Header</h2>
            <nav>
                <CustomLink to="/home" > Home</CustomLink>
                <CustomLink to="/orderreview" > Order Review</CustomLink>
                <CustomLink to="/grandpa" >Grandpa</CustomLink>
                {/* <Link to="/home" > Home</Link> */}
            </nav>
        </div>
    )
}

export default Header
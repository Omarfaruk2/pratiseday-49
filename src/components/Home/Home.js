import React, { useState } from 'react'
import Card from '../Card/Card'
import useTshart from '../hooks/usetsharts'
import Tshart from '../Tshart/Tshart'
import "./Home.css"

const Home = () => {
    const [tShirts, setTshirts] = useTshart([])
    const [cart, setCart] = useState([])

    const handleAddToCart = (seleteTshart) => {
        const exits = cart.find(tshirt => tshirt._id === seleteTshart._id)
        if (!exits) {
            const newCard = [...cart, seleteTshart]
            setCart(newCard)
            // console.log(newCard)
        }
        else {
            alert("This Products Already added")
        }
    }
    const removeFcart = (seleteTshart) => {
        const rest = cart.filter(Tshart => seleteTshart._id !== Tshart._id)
        setCart(rest)
        // console.log(cart)
    }
    // console.log(cart[0]._id)
    return (
        <div className='home-container'>
            <div className="tshart-container">
                {
                    tShirts.map(tshirt =>
                        <Tshart
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        >
                        </Tshart>)
                }
            </div>
            <div className="cart-container">
                <Card
                    removeFcart={removeFcart}
                    cart={cart}
                ></Card>
            </div>


        </div>
    )
}

export default Home
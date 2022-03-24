import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Show.css'

const Show = ({ meal, handle }) => {
    const { strMealThumb, strMeal } = meal

    return (
        <div className='col-lg-4  mb-3 ps-4 '>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <h3>{strMeal}</h3>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button onClick={() => handle(meal)} variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Show
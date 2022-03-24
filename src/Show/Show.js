import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './Show.css'
const Show = (props) => {
    const { strMealThumb, strMeal } = props.meal
    console.log(props.meal)
    return (
        <div className='col-4 mb-3 ps-4'>
            <div >
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <h3>{strMeal}</h3>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Show
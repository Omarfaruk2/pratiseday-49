import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Show from '../Show/Show'

const Displaymeal = () => {
    const [meals, SetMeals] = useState([])
    // const [cart, SetCart] = useState([])/////
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
            .then(res => res.json())
            .then(data => SetMeals(data["meals"]))
    }, [])

    const handle = (meal) => {
        Card(meal)
    }
    return (
        <div className='row'>
            <div className="container col-10 row mx-auto">
                {
                    meals.map(meal => <Show
                        key={meal.idMeal}
                        meal={meal}
                        handle={handle}
                    ></Show>)
                }
            </div>
            <div className='col-2'>
                <Card

                ></Card>
            </div>
        </div>
    )
}

export default Displaymeal
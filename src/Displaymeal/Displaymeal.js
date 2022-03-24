import React, { useEffect, useState } from 'react'
import Show from '../Show/Show'

const Displaymeal = () => {
    const [meals, SetMeals] = useState([])
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
            .then(res => res.json())
            .then(data => SetMeals(data["meals"]))
    }, [])
    return (
        <div>
            <div className="row container mx-auto">
                {
                    meals.map(meal => <Show
                        key={meal.idMeal}
                        meal={meal}
                    ></Show>)
                }
            </div>
        </div>
    )
}

export default Displaymeal
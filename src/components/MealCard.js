import React,{useState} from 'react'
import AddMeal from './AddMeal'

 
const MealCard = () => {
    const [mealList, setMealList] = useState([])

    const addMealHandler = (firstMeal, secondMeal, dessert) => {
      setMealList((prevList) => {
        return [...prevList, {meal1: firstMeal, meal2: secondMeal, meal3: dessert, id: Math.random().toString()}]
      })
    }

  return (
    <div>
    <AddMeal onAddMeal={addMealHandler}/>
    <div>
      <ul>
      {mealList.map(meal => 
      <li key={meal.id}>
       {meal.meal1} {meal.meal2} {meal.meal3}
      </li>)}
      </ul>
    </div>
    </div>
  )
}

export default MealCard
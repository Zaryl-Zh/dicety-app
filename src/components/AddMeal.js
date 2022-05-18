import React from 'react'
import MealCard from './MealCard'

const AddMeal = () => {
  return (
    <div>
        <div> <h1>Add your meal</h1></div>
        <form>
            <label htmlFor='i1'>first meal</label>
            <input type="text" id='i1'/>
            <label htmlFor='i2'>second meal</label>
            <input type="text" id='i2' />
            <label htmlFor='i3'>dessert or salad</label>
            <input type="text" id='i3'/>
            <input type='submit' value='add meal'/>
        </form>
        
        <div>
            <MealCard/>
        </div>
    </div>
  )
}

export default AddMeal
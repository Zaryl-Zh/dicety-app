import React from 'react'
import { useState } from 'react'

const AddMeal = props => {

    const [firstMeal, setFirstMeal] = useState('')
    const [secondMeal, setSecondMeal] = useState('')
    const [dessert, setDessert] = useState('')

    const firstMealChangeHandler = e => {
      setFirstMeal(e.target.value)
    }
    const secondMealChangeHandler = e => {
      setSecondMeal(e.target.value)
    }
    const dessertChangeHandler = e => {
      setDessert(e.target.value)
    }
    const addMealHandler = e => {
      e.preventDefault();

      props.onAddMeal(firstMeal, secondMeal, dessert)
      setFirstMeal('');
      setSecondMeal('')
      setDessert('');
 
    }
    

  return (
    <div>
        <div> <h1>Add your meal</h1></div>
        <form onSubmit={addMealHandler}>
            <label htmlFor='i1' >first meal</label>
            <input 
              type="text" 
              id='i1'
              onChange={firstMealChangeHandler}
              value={firstMeal}
            />
            <label htmlFor='i2'>second meal</label>
            <input 
              type="text" 
              id='i2' 
              onChange={secondMealChangeHandler}
              value={secondMeal}
            />
            <label htmlFor='i3'>dessert or salad</label>
            <input 
              type="text" 
              id='i3'
              onChange={dessertChangeHandler}
              value={dessert}
            />
            <button type='submit'>Add meal</button>
        </form>
        
    </div>
  )
}

export default AddMeal
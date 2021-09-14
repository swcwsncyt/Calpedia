import React, {useState} from 'react';

const AddMeal = ({ handleMealSubmit }) => {
  const [ meal, setMeal ] = useState({
    name: "",
    time: "",
    ingredients: []
  });

  const handleChange = (e) => {
    if(e.target.id === "meal-name-input") setMeal({
      ...meal,
      name: e.target.value
    });
    if(e.target.id === "meal-time-input") setMeal({
      ...meal,
      time: e.target.value
    });
  }

  return (
    <form onSubmit={(e) => {handleMealSubmit(e, meal)}}>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text">Meal Name:</span>
        <input value={meal.name} id="meal-name-input" placeholder="Meal A" onChange={handleChange} required/>
        <span className="input-group-text">Meal Time:</span>
        <input value={meal.time} id="meal-time-input" placeholder="18:00" onChange={handleChange} required/>
        <button className="btsn btn-sm btn-primary float-right">Add Meal</button>
      </div>
    </form>
  )
}
export default AddMeal;
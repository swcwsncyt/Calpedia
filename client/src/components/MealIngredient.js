import React from 'react';

const MealIngredient = ({
  ingredient :{quantity, unit, description, calories}, 
  handleDeleteMealIngredient
}) => {
  return (
    <tr>
      <td>{`${quantity} ${unit} ${description}`}</td>
      <td style={{textAlign: "right"}}>{calories} calories</td>
      <td style={{width: "50px"}}>
        <button className="btn btn-sm btn-outline-danger" onClick={handleDeleteMealIngredient} style={{float: "right"}}>x</button>
      </td>
    </tr>
  )
}

export default MealIngredient;
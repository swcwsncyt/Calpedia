import React, { useState, useEffect } from "react";

import MealIngredient from "./MealIngredient.js";
import MealAddIngredient from "./MealAddIngredient.js";

const MealCard = ({ meal: {id, name, time, ingredients}, handleDeleteMeal, updateIngredientList }) => {
  var totalCalories = 0;

  //TODO: create a func to add a line of ingredient, when it is called in AddIngredient
  const handleAddMealIngredient = (mealID, ingredientDetails) => {
    const copyOfIngredient = [...ingredients]
    copyOfIngredient.push(ingredientDetails)
    updateIngredientList(mealID, copyOfIngredient)
  }

  const handleDeleteMealIngredient = (mealID, ingredientIdx) => {
    const copyOfIngredient = [...ingredients]
    copyOfIngredient.splice(ingredientIdx, 1);
    updateIngredientList(mealID, copyOfIngredient);
  }

  return (
    //a table break to 3 parts, header -> meal name and meal time, display delete button
    //part 2 -> display ingredients list in this meal
    //part 3 -> select ingredients from master ingredients list
    <table className="table table-sm" style={{ width: "100%"}}>
      <thead className="table-light">
      {/* part 1 */}
        <tr>
          <th style={{textAlign: "left"}}>{name} @{time}</th>
          <th colSpan="2" style={{padding: "5px"}}>
            <button className="btn btn-sm btn-danger" onClick={handleDeleteMeal} style={{float: "right"}}>Delete Meal</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* part 2 meal ingredients list*/}
        {ingredients.map((ingredient, i) => {
          totalCalories += ingredient.calories;
          return (
            <MealIngredient key={i} ingredient={ingredient} handleDeleteMealIngredient={() => {handleDeleteMealIngredient(id, i)}}/>
          )
        })}
        <tr>
          <td></td>
          <td style={{textAlign: "right"}}>
            Total Calories: 
          </td>
          <td style={{textAlign: "right", padding: "5px"}}>{totalCalories}</td>
        </tr>
        <tr>
          <td colSpan="3">
            {/* part 3 */}
            <MealAddIngredient handleAddMealIngredient={(ingredientDetail) => {handleAddMealIngredient(id, ingredientDetail)}}/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MealCard;